export const typeDefs = [
	`
  scalar DateTime

  # Type(s)

  type Tweet {
    _id: String
    tweet: String
    author: String
    createdAt: DateTime
  }

  # Query(ies)

  # Mutation(s)

  type Mutation {
    createTweet (
      tweet: String,
      author: String,
      createdAt: DataTime
    ): Tweet
  }


  # Schema
  
  schema {
    query: Query
    mutation: Mutation
  }
`
]
