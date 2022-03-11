// Entry point of the API
const { ApolloServer } = require("apollo-server")
const { typeDefs } = require("./schema/type-def")
const { resolvers } = require("./schema/resolvers")

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
    console.log(`YOUR API IS RUNNING AT: ${url}`);
});