const query = require('./query')
const user = require('./user')

module.exports = new GraphQLSchema({
    query,
    user
})