const TweetModel = require("../models/TweetModel")

const resolvers = {
	Query: {
		getTweet: _id => TweetModel.getTweet(_id),

		getTweets: () => TweetModel.getTweets()
	},

	Mutation: {
		createTweet: (_, args) => TweetModel.createTweet(args),

		deleteTweet: (_, args) => TweetModel.deleteTweet(args),

		updateTweet: (_, args) => TweetModel.updateTweet(args)
	}
}

module.exports = resolvers
