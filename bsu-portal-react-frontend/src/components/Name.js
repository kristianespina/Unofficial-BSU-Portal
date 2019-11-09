import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";

const FETCH_RECORDS = gql`
  query Records($srcode: String!) {
    records(srcode: $srcode) {
        srcode
        firstname
        middlename
        lastname
    }
  }
`


function Name(props) {
    const { loading, error, data } = useQuery(FETCH_RECORDS, {
        variables: {
            srcode: props.srcode,
        },
    });
    let mask = ''
    for (var i =0;i<props.srcode.length;i++) {
        mask += '.'
    }
    if (loading) return (
        <>
            {mask}
        </>
    );
    if (error) return `${error}`;
    if(data.records.length > 0) {
        mask = data.records[0].firstname
    }

    return (
        <>
            <span key={mask}>{mask}</span>
        </>
    )
}

export default Name
