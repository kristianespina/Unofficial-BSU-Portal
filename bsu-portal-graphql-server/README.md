# BSU Portal GraphQL Server

## Description

A server to connect to dione.batstate-u.edu.ph publicly accessible REST API endpoint.

**Note:** This is for educational purposes only

## Usage

```bash
npm run
```

## Contributing

Contributions are welcome


## Sample GraphQL Query

```graphql
query {
  getEnrollmentRecords(srcode: "14-?????") {
		srcode
  }
  grades(srcode: "14-?????",schoolyear: "2018-2019",semester: "SECOND") {
    code
    description
    grade_final
    grade_reexam
    status
  }
}
```
