import React, { Component } from "react";
import youtube from "../APIS/youtube";
import SearchBar from "./SearchBar";
import  VideoList  from "./VideoList";

class App extends Component {
  state = {
    videos: [],
  };

  onSearchSubmit = async (term) => {
    console.log(
      `This is the search term printed from the app component: ${term}`
    );

   const results  =await youtube.get('/search', {
      params: {

        q: term
      }
    })

    this.setState({videos: results.data.items})
  };


  render() {
    return (
      <div className="ui container" style={{ marginTop: "1rem" }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <VideoList videos={this.state.videos}/>
        
      </div>
    );
  }
}

export default App;
