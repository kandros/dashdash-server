import axios from 'axios'
import { log } from 'util'

const { POCKET_ACCESS_TOKEN, POCKET_API_URL, POCKET_CONSUMER_KEY } = process.env

const URL = `${POCKET_API_URL}?consumer_key=${
  POCKET_CONSUMER_KEY
}&access_token=${POCKET_ACCESS_TOKEN}`

class Pocket {
  async list() {
    const { data } = await axios.get(URL)
    const articles = (<any>Object).values(data.list)
    return articles
  }
}

export default new Pocket()
