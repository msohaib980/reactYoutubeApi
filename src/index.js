import React , {Component} from 'react';
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
import YTSearch from 'youtube-api-search'


const API_KEY = 'AIzaSyBzUSqr_4KUMXyvnvVWe9VHh7QVtMqPhgk'



class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            videos : [],
            selectVideo: null

        }

        YTSearch({key: API_KEY,term: 'surfboard'}, (videos) => {
            this.setState({ 
                videos: videos,
                selectVideo: videos[0]
                
            })
        });

    }

  render(){
    return (
       
        <div>

        <SearchBar />
        <VideoDetail video={this.state.selectVideo}/>
        <VideoList 
        onVideoSelect = {selectedVideo => this.setState({selectedVideo })}
        videos = {this.state.videos}
        />
  
        </div> 
);
}
    
}
ReactDOM.render(<App />, document.querySelector('.container'))