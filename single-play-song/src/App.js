import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Playsong from './components/PlaySong';
let axios = require('axios');

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoId: null,
            jsonContent: null,
            loading : true
        };
    }

   componentDidMount() {
       let self = this;
       axios.get('http://localhost:4200/songList')
           .then(function (response) {
               self.setState({videoId: response.data.song.source_id, jsonContent: response.data ,loading:false});
           })
           .catch(function (error) {
               console.log(error);
           });
    }

  render() {
      const loadpage = <div id='loader'/>;
      const {loading} = this.state;
      if(loading){
          return(<div id='loader-wrapper'>{loadpage}</div>)
      }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Play Jimmi Eat World - The Midle</h1>
        </header>
          <Playsong videoId={this.state.videoId} jsonContent={this.state.jsonContent}/>
      </div>
    );
  }
}

export default App;
