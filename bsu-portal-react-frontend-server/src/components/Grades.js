import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";

const FETCH_GRADES = gql`
  query Grade($srcode: String!, $schoolyear: String!, $semester: String!) {
    grades(srcode: $srcode, schoolyear: $schoolyear, semester: $semester){
        code
        credits
        description
        grade_final
        grade_reexam
        status
    }
  }
`



function Grades(props) {
    const { loading, error, data } = useQuery(FETCH_GRADES, {
        variables: {
            srcode: props.srcode,
            schoolyear: props.schoolyear,
            semester: props.semester
        },
    });
    // Unnecessary
    let SRCODE_PATTERN = /(\d+)-(\d+).*/
    if (props.srcode.length < 8 || SRCODE_PATTERN.test(props.srcode) === false) return [];

    if (loading) return (
        <h1 className="subtitle is-3">No records found...</h1>
    );
    if (error) return `${error}`;

    let credits = 0;
    let sum_of_grades = 0;
    let gwa = 0

    data.grades.forEach((grade) => {
        if(grade.grade_final !== "INC"){
            sum_of_grades += Number(grade.grade_final)*Number(grade.credits);
            credits += Number(grade.credits);
        } else if(grade.grade_reexam !== "-") {
            sum_of_grades += Number(grade.grade_reexam)*Number(grade.credits);
            credits += Number(grade.credits);
        }
    })

    if(credits !== 0)
        gwa = sum_of_grades/credits

    return (
        <>
        <div className="table-container">
        <table className="table is-fullwidth is-hoverable">
            <tbody>
                <tr>
                    <th className="is-hidden-mobile">Code</th>
                    <th>Description</th>
                    <th>Grade</th>
                    <th>Removal</th>
                    <th className="is-hidden-mobile">Status</th>
                </tr>
                {
                    data.grades.map((grade) => (
                        <tr key={grade.code}>
                            <td className="is-hidden-mobile">{grade.code}</td>
                            <td>{grade.description}</td>
                            <td className="has-text-centered">{grade.grade_final}</td>
                            <td className="has-text-centered">{grade.grade_reexam}</td>
                            <td className="is-hidden-mobile"><span className={grade.status === "PASSED" ? "tag is-success is-light":"tag is-danger is-light"}>{grade.status}</span></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <p>Academic Load: <span className="tag is-primary is-light">{credits}</span></p>
        <p>General Weighted Average (GWA): <span className="tag is-success is-light">{gwa.toFixed(4)}</span></p>
        </div>
        </>
    )
}

export default Grades
