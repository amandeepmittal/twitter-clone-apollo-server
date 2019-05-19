const express = require("express")
const { ApolloServer, gql } = require("apollo-server-express")

const app = express()
const port = process.env.PORT || 5000

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
	type Query {
		hello: String
	}
`

// Provide resolver functions for your schema fields
const resolvers = {
	Query: {
		hello: () => "Hello world!"
	}
}

const server = new ApolloServer({ typeDefs, resolvers })

server.applyMiddleware({ app })

app.listen(port, () =>
	console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
)
