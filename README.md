This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In Tweet-Saver:
User can search for tweets typing in search box (for example: noradio),
Tweets will show up and can be dragged to "Saved Tweets" table to save the tweets,
User will be able to have those stored on page load as well

Authentication:
This project may require auth token to access twitter api, that can be requested from Twitter developer tools:
https://developer.twitter.com/en/docs/basics/authentication/oauth-1-0a

API configuration is in src/api/config.js

In case browser gives CORS error, I have added PROXY_URL to add twitter api

## Run project locally:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.