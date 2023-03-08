import React from 'react'
import './App.css'
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import PlayList from '../PlayList/PlayList'
// import TrackList from '../TrackList/TrackList'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: [{ name: 'name1', artist: 'artist1', album: 'album1', id: 1 },
      { name: 'name2', artist: 'artist2', album: 'album2', id: 2 }, { name: 'name3', artist: 'artist3', album: 'album3', id: 3 }],
      playListName: 'My Playlist', playListTracks: [{ name: 'name4', artist: 'artist4', album: 'album4', id: 4 },
      { name: 'name5', artist: 'artist5', album: 'album5', id: 5 }, { name: 'name6', artist: 'artist6', album: 'album6', id: 6 }]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlayListName = this.updatePlayListName.bind(this);
  }

  updatePlayListName(name) {
    this.setState({playListName: name})
  }
  removeTrack(track) {
    let tracks = this.state.playListTracks;
    // how does this work? 
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
    this.setState({ playListTracks: tracks });
  }

  addTrack(track) {
    let tracks = this.state.playListTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({ playListTracks: tracks });

  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <PlayList playListName={this.state.playListName} playListTracks={this.state.playListTracks} onRemove={this.removeTrack} onNameChange={this.updatePlayListName} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
