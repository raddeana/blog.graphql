const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schemas')

const app = express()
const port = 3000

app.use('/', graphqlHTTP({
    schema: schemas,
    graphiql: true
}))


app.listen(port)