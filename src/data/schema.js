import {
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql';
// import queries and mutations from user folder
import UserQueries from './user/queries'
import UserMutations from './user/mutations'
// creating GraphQL schema with parameters
// each parameter can only take one GraphQLObjectType
export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',      // arbitrary name for library API
    fields: UserQueries // connect fields from queries.js
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: UserMutations
  })
});
