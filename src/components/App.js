import React, { Component } from "react";
import youtube from "../APIS/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import Loader from "./shared/Loader";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  onSearchSubmit = async (term) => {
    const results = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({ videos: results.data.items });
  };

  onVideoSelected = (video) => {
    console.log(video.id.videoId);
    this.setState({ selectedVideo: video });
  };

  componentDidMount = async () => {
    const results = await youtube.get("/search", {
      params: {
        q: "Nasa",
      },
    });

    this.setState({
      videos: results.data.items,
      selectedVideo: results.data.items[1],
    });
  };

  render() {
    if (!this.state.videos) {
      return "....";
    }

    return (
      <div className="ui container" style={{ marginTop: "1rem" }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <div className="ui grid container">
            <div className="eleven wide column">
              {this.state.selectedVideo ? (
                <VideoDetail video={this.state.selectedVideo} />
              ) : (
                <Loader />
              )}
            </div>

            <div className="five wide column">
              <VideoList
                onVideoSelected={this.onVideoSelected}
                videos={this.state.videos}
              />
            </div>
        
        </div>
      </div>
    );
  }
}

export default App;
