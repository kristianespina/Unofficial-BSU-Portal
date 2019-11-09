const { gql } = require('apollo-server');

const typeDefs = gql`
    type EnrollmentRecords {
        lastname: String
        firstname: String
        middlename: String
        sex: String
        schoolyear: String
        semester: String
        srcode: String
        school: String
        campus: String
        collegecode: String
        coursecode: String
        coursename: String
        majorcode: String
        majorname: String
        yearlevel: String
        curriculum: String
        enrollmentstatus: String
    }
    type Grade {
        code: String
        description: String 
        credits: String
        grade_final: String
        grade_reexam: String
        status: String
        schoolyear: String
        semester: String
        instructor: String
        section: String
    }

    type Query {
        records(srcode: String): [EnrollmentRecords]
        grades(srcode: String, schoolyear: String, semester: String): [Grade]
    }
`

module.exports = typeDefs;