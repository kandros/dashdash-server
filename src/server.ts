import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as logger from 'morgan'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'
import * as cors from 'cors'
import expressPlayground from 'graphql-playground-middleware-express'

import resolvers from './resolvers'
import typeDefs from './typeDefs'

export function runServer() {
  const isProd = process.env.NODE_ENV === 'production'
  const PORT = 5000

  const executableSchema = makeExecutableSchema({
    typeDefs,
    resolvers,
  })

  const app = express()

  if (!isProd) {
    app.use(logger('dev'))
    app.use(cors())
  }

  app.use(
    '/graphql',
    bodyParser.json(),
    graphqlExpress({
      schema: executableSchema,
      // context: {},
    }),
  )

  app.get('/graphiql', expressPlayground({ endpoint: '/graphql' }))

  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
  })
}
