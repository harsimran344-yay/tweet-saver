// Configuration for Twitter

const API_URL = "https://api.twitter.com/1.1/search/tweets.json"

// proxy url may be required if no access through browser (CORS error)
const PROXY_URL = "https://cors-anywhere.herokuapp.com/"
const B_API_KEY = "AAAAAAAAAAAAAAAAAAAAALChFwEAAAAAJTVHrP7PScBLcainMT6WtRoYOsI%3D7BOm7kSB2MohZN9z1legbsjwtU2WINTjt4AJSrnYwpPPBodyr4";
const consumer_key='flBCjcqkEVF88OZHzkCjMoSkH'
const token='1281818215614734341-2kpLfvqcCLw8PuK8cmuOSIWMQPxcQs'
const signature_method='HMAC-SHA1'
const timestamp='1594446647'
const nonce = 'K7ny27JTpKVsTgdyLdDfmQQWVLERj2zAK5BslRsqyw'
const version ='1.0'
const signature = 'LcZttpUAUt6WSGZxK7XsI825ZLA%3D'

const API_KEY = `OAuth oauth_consumer_key="${consumer_key}", oauth_token="${token}", oauth_signature_method="${signature_method}", oauth_timestamp="${timestamp}", oauth_nonce="${nonce}", oauth_version="${version}", oauth_signature="${signature}"`

export {
    API_URL,
    API_KEY,
    PROXY_URL,
    B_API_KEY
}
