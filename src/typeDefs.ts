const typeDefs = `
# getpocket article shape from api
type Article {
  item_id: ID!
  resolved_id: ID!
  given_url: String!
  given_title: String!
  favorite: String!
  status: String!
  time_added: String!
  time_updated: String!
  time_read:  String!
  time_favorited: String!
  sort_id: Int!
  resolved_title: String!
  resolved_url: String!
  excerpt: String!
  is_article: String!
  is_index: String!
  has_video: String!
  has_image: String!
  word_count: String!
} 

type Error {
  message: String
}

type allArticlesResponse {
  ok: Boolean!
  articles: [Article]
  errors: [Error!]
}

type Query {
  allArticles: allArticlesResponse!
}
`
export default typeDefs
