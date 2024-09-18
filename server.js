const express = require("express")
const {graphqlHTTP} = require("express-graphql")
const {GraphQLSchema, graphql, GraphQLObjectType, GraphQLString} = require("graphql")
const app = express()

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "helloworld",
    fields: () => ({
      message: {type: GraphQLString, resolve: () => "Hello World"},
    }),
  }),
})

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
)
app.listen(5000, () => console.log("Server Running"))
