const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools');
// const { GraphQLServer } = require('graphql-yoga')

import {GraphQLServer} from 'graphql-yoga'

const typeDefs = `
type Query {
  info: String!
  feed: [Link!]!
}

type Link {
  id: ID!
  description: String!
  url: String!
}
`;



// Make a GraphQL schema with no resolvers
const schema = makeExecutableSchema({ typeDefs: typeDefs });

// Add mocks, modifies schema in place
addMockFunctionsToSchema({ schema });

const server = new GraphQLServer({typeDefs, schema}) 
server.start(() => console.log(`Server is running on http://localhost:4000`))
