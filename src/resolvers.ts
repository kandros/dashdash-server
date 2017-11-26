import { PassThrough } from 'stream'
import pocketApi from './pocket'
import { log } from 'util'

const resolvers = {
  Query: {
    async allArticles(parent, {}, { models }) {
      const articles = await pocketApi.list()
      try {
        return {
          ok: true,
          articles,
        }
      } catch (e) {
        console.log(e)
        return {
          ok: false,
          errors: [{ message: 'unable to load articles' }],
        }
      }
    },
  },
}

export default resolvers
