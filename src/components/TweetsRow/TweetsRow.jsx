import React from "react";
import { formatDate } from '../../helpers/dateFormat';
import { addItemToStorage, checkItemInStorage } from '../../helpers/localStorage';

const TweetsRow = props => {

    const data = props.data;
    const newDate = formatDate(data.date)
    let savedTweetData = []
    function drag_handler(e) {
        savedTweetData.push(data)
        let checkItem = checkItemInStorage(data, 'savedTweets')
        if (checkItem === -1){
            addItemToStorage(data, 'savedTweets')
        } else {
            return null
        }
    }
    return (
        <div className="tweet-row" onDragStart={() => {drag_handler()}} draggable="true">
            <img src={data.profileImage} alt="Profile"  className="tweet-row-image"/>
            <div className="tweet-row-info">
                <div className="tweet-row-name">
                    <span>{data.fullName}</span>
                    <span>@{data.userId}</span>
                    <span>{newDate}</span>
                </div>
                <p>{data.text}</p>
            </div>
        </div>
        );
    }

export default TweetsRow;