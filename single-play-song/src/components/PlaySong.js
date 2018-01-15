import React, { Component } from 'react';
import YouTube from 'react-youtube';
import { Label } from 'react-bootstrap';
import GuitarChord from 'react-guitar-chord';
let ProgressBar = require('progressbar.js');

class PlaySong extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoId: this.props.videoId,
            json: this.props.jsonContent,
            player: null,
            showChord: null,
            pause : true,
            time_update_interval : 0,
            next: 'D',
            now: 0,
        };


        this.onReady = this.onReady.bind(this);
        this.onPlayVideo = this.onPlayVideo.bind(this);
        this.onPauseVideo = this.onPauseVideo.bind(this);
        this.onShowChord = this.onShowChord.bind(this);
        this.nextChord = this.nextChord.bind(this);
        this.progressBar = this.progressBar.bind(this);
    }

    componentDidMount() {
        this.onShowChord('intro');
        this.nextChord('startChord', 'start');
    }

    onReady(event) {
        console.log(`YouTube Player object for videoId: "${this.state.videoId}" has been saved to state.`); // eslint-disable-line
        this.setState({
            player: event.target,
        });
    }

    onPlayVideo(event) {

        let songEvent = this.state.json.song.song_events;
        let songDuration = Math.round(event.target.getDuration());
        let self = this;
        this.state.time_update_interval = setInterval(function () {
            let getTime = Math.round(event.target.getCurrentTime());
            if(getTime < 2){
                self.progressBar(15);
            }
            //self.setState({now : Math.round((getTime * 100) / songDuration)});
            songEvent.forEach((e, index)=>{
                if(getTime === Math.round(e.beat_time)){
                    const passIndex = index + 1;
                    self.nextChord(passIndex, songEvent);
                    self.onShowChord(e.name);
                    self.progressBar(e.duration);
                }

            });
        }, 1000);

    }


    progressBar(time){
        let calcTime = Math.round(time*1000);
        let self = this;

        let bar = new ProgressBar.Line('#bar', {
            strokeWidth: 6,
            easing: 'easeInOut',
            duration: calcTime,
            color: '#FFEA82',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: {width: '640px', height: '10px'},
            from: { color: '#000'},
            to: { color: '#FFEA82'},
            step: (state, bar) => {
                if(Math.round(state.offset) === 0) {
                    bar.destroy();
                }
                if(!self.state.pause){
                    bar.stop();
                }
            }
        });

        bar.animate(1.0);
    }

    nextChord(nextIndex, songs){
        if(nextIndex !== 'startChord') {
            songs.forEach((e,index)=>{
                if(index === nextIndex){
                    document.getElementById('nextChord').innerHTML = `Next chord is: <Label>${e.name}</Label> when the bar becomes full`;
                    this.setState({next : e.name});
                }
            })
        } else {
            document.getElementById('nextChord').innerHTML = `Next chord is: <Label>D</Label> when the bar becomes full`;
        }

    }

    onPauseVideo() {
        this.state.player.pauseVideo();
        this.setState({pause: false});
    }

    onShowChord(chord){
        chord === 'intro' ? this.setState({showChord: "INTRO"}) : this.setState({showChord: chord});
    }


    render() {
        const loadChord = this.state.showChord !=='INTRO' ? <GuitarChord chord={this.state.showChord} height={'15em'} width={'40px'}/>: <div className='Intro'>INTRO</div>;
        const nextChord = <GuitarChord chord={this.state.next} height={'12em'}/>;


        return (
            <div className="Container">
                <div className="Player">
                    <YouTube videoId={this.state.videoId} onReady={this.onReady} onPlay={this.onPlayVideo} onPause={this.onPauseVideo} onStateChange={this.onPlayerStateChange}/>
                </div>
                <div id='nextChord'/>
                    <div id='bar' align='center'/>
                <div id='bar' align='center'/>
                <div className="Chords" >
                    {loadChord}
                </div>
                <div className="NextChords">
                    {nextChord}
                </div>

            </div>
        );
    }
}

export default PlaySong;
