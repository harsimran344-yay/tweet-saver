import React, { useState } from "react";
import TweetsTable from "../TweetsTable/TweetsTable";
import SavedTweets from "../SavedTweets/SavedTweets";
import SearchBar from "../SearchBar/SearchBar"
import TweetsContextProvider from "../../context/TweetsContext";
import './App.css';

function App() {
  const [searchText, setSearchText] = useState('');
  const handleSubmit = (e, searchInput) => {
    e.preventDefault();
    setSearchText(searchInput)
  }
  return (
    <div className="App">
      <h1 className="tweet-saver-heading">
        Tweet Saver
      </h1>
      <TweetsContextProvider>
        <SearchBar className="search-button" handleSubmit={handleSubmit}/>
        <p className="saved-tweets-text">Saved Tweets</p>
        <TweetsTable searchTerm={searchText} />
        <div className="drag-arrow">
          Drag tweets
          <div className="line"></div>
          <div className="point"></div>
          <p>to save</p>
        </div>
        <SavedTweets />
      </TweetsContextProvider>
    </div>
  );
}

export default App;
