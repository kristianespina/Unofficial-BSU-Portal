const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./schema');

const BSUAPI = require('./datasources/BSUAPI');
const resolvers = {
    Query: {
        records: (_, { srcode }, { dataSources }) => dataSources.BSUAPI.records(srcode),
        grades: (_, { srcode, schoolyear, semester }, { dataSources }) => dataSources.BSUAPI.grades(srcode, schoolyear, semester),
    }
};
const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        BSUAPI: new BSUAPI()
    })
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url} !`);
})


