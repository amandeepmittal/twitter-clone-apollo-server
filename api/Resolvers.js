import { GraphQLScalarType } from "graphql"

import TweetModel from "../models/TweetModel"

export const resolvers = {
	// Query: {},

	Mutation: {
		createTweet: (_, args) => TweetModel.createTweet(args)
	},

	DateTime: new GraphQLScalarType({
		name: "DateTime",
		description: "Date custom Scalar Type",
		parseValue: () => new Date(),
		serialize: value => value,
		parseLiteral: ast => ast.value
	})
}
