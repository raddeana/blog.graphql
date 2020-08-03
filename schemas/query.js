const graphql = require('graphql')
const GraphQLObjectType = graphql.GraphQLObjectType
const GraphQLSchema = graphql.GraphQLSchema
const GraphQLString = graphql.GraphQLString

const data = require('../data.json')

module.exports = new GraphQLObjectType({
    name: 'Query',
    fields: {
        user: {
            type: User,
            args: {
                id: {
                    type: GraphQLInt
                }
            },
            resolve: function (_, args) {
                return data[args.id];
            }
        }
    }
})