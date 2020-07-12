import React, { useEffect, useState, useCallback } from "react";
import { getStorage } from '../../helpers/localStorage';
import TweetsRow from "../TweetsRow/TweetsRow"

const SavedTweets = () => {

    const [tweets, setTweets] = useState([]);
    let gettweets = getStorage('savedTweets');
    const getVal = () => {
        setTweets(gettweets)
    }
    const rows = []

    const dragover_handler = useCallback( () => {
        getVal();
    }, []);

    useEffect(() => {
        getVal();
    },[dragover_handler]);

    tweets.forEach((tweet, key) => {
        rows.push(
            tweet
        );
    });
    const listItems = rows.map((row) => <TweetsRow data={row} key={row.id}/>);
    
    return (
            <div className="saved-tweet-table" onDragOver={() => setTweets(gettweets)}>
                {listItems}
            </div>
        );
    }
export default SavedTweets;