import React, { createContext, useState } from "react";
import axios from "axios";
import { API_URL, API_KEY, PROXY_URL } from "../api/config";

/** This can be imported if needed to be tested locally */
// import { mockData } from "../server/mock_data.js"

export const TweetsContext = createContext();

const TweetsContextProvider = props => {

    const [tweets, setTweets] = useState([]);

    /** Below can be commented out if needed to test locally */
    // const runSearch = () => {
    //     let gettweets = mockData()
    //     setTweets(gettweets)
    // }

    /** to call twitter api contactnated with proxy url */
    const runSearch = query => {
    axios.get(PROXY_URL + API_URL, {
        params: {
            q: query
        },
        headers: { 'Authorization' : API_KEY }
    }).then(response => {
        setTweets(response.data.statuses);
    }).catch(error => {
        console.log("Encountered an error with fetching and parsing data",error);
        });
    };
    return (
    <TweetsContext.Provider value={{ tweets, runSearch }}>
        {props.children}
    </TweetsContext.Provider>
    );
};

export default TweetsContextProvider;