import ApolloClient from 'apollo-boost';

const graphQLClient = new ApolloClient({
    //uri: "http://localhost:4000/graphql"
    uri: "https://unofficial-bsu-portal-graphql.herokuapp.com/graphql"
});

export default graphQLClient