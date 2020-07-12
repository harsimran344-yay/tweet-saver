import React, { useContext, useEffect } from "react";
import TweetsRow from "../TweetsRow/TweetsRow"
import { TweetsContext } from "../../context/TweetsContext";

const TweetsTable = ({ searchTerm }) => {
  const rows = []
  const {tweets, runSearch} = useContext(TweetsContext);

  useEffect(() => {
    if(searchTerm !== null && searchTerm !== '' ){
      runSearch(searchTerm);
    } else {
      console.log('no value')
    }
    // eslint-disable-next-line
  }, [searchTerm]);

  tweets.forEach((tweet, key) => {
    rows[key] = { id:tweet.id, id_str:tweet.id_str, 
      date:tweet.created_at, text:tweet.text, 
      fullName:tweet.user.name, userId:tweet.user.screen_name,
      profileImage:tweet.user.profile_image_url }
  });

  const listItems = rows.map((row) => <TweetsRow key={row.id} data={row}/>);

  return (
    <div className="search-tweet-table">
      {listItems}
    </div>
  );
}

export default TweetsTable;