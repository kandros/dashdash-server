const dotenv = require('dotenv')
dotenv.config()

const { POCKET_CONSUMER_KEY } = process.env

if (!POCKET_CONSUMER_KEY) {
  throw Error('no consumer key found in env')
}

async function main() {
  try {
    var auth = require('pocket-auth')

    var consumerKey = POCKET_CONSUMER_KEY
    var redirectUri = 'https://google.com'

    let code = await auth.fetchToken(consumerKey, redirectUri, {})
    let uri = auth.getRedirectUrl(code.code, redirectUri)
    console.log(
      'Visit the following URL and click approve in the next 10 seconds:',
    )
    console.log(uri)

    setTimeout(async function() {
      try {
        let r = await auth.getAccessToken(consumerKey, code.code)
        console.log(r)
      } catch (err) {
        console.log(
          `You didn't click the link and approve the application in time`,
        )
      }
    }, 10000)
  } catch (err) {
    console.log(err)
  }
}

main()
