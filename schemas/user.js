const graphql = require('graphql')
const GraphQLObjectType = graphql.GraphQLObjectType
const GraphQLSchema = graphql.GraphQLSchema
const GraphQLString = graphql.GraphQLString

module.exports = new GraphQLObjectType({
    name: 'User',
    description: 'User对象',
    fields: {
        id: {
            type: GraphQLInt
        },
        name: {
            type: GraphQLString
        },
    }
})