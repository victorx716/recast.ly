import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current: exampleVideoData[0],
      videos: exampleVideoData
    };

    this.onVideoClick = this.onVideoClick.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.searchYouTube = _.debounce(this.props.searchYouTube, 1000);
  }

  componentDidMount() {
    var options = {
      max: 5,
      query: '',
      key: YOUTUBE_API_KEY
    };

    this.props.searchYouTube(options, (data) => {
      this.setState({
        currentVideo: data[0],
        videos: data});
    });
  }

  onVideoClick(video) {
    this.setState({
      current: video
    });
  }

  onSearch(query) {
    var options = {
      q: query,
      max: 5,
      key: YOUTUBE_API_KEY
    };
    this.props.searchYouTube(options, (data) => {
      this.setState({
        currentVideo: data[0],
        videos: data});
    });
  }


  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search onSearch={this.onSearch} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.current}/>
          </div>
          <div className="col-md-5">
            <VideoList handleClick={this.onVideoClick} videos={this.state.videos}/>
          </div>
        </div>
      </div>
    );
  }
}

// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <Search />
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <VideoPlayer video={exampleVideoData[0]}/>
//       </div>
//       <div className="col-md-5">
//         <VideoList videos={exampleVideoData}/>
//       </div>
//     </div>
//   </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
