import ApolloClient from 'apollo-boost';

const graphQLClient = new ApolloClient({
    uri: "http://localhost:4000/graphql"
});

export default graphQLClient