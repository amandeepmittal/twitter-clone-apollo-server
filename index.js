const express = require("express")
const { ApolloServer, gql } = require("apollo-server-express")

const app = express()
const port = process.env.PORT || 5000

const typeDefs = gql`
	type Query {
		hello: String
	}
`

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
