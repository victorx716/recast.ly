import YOUTUBE_API_KEY from '../config/youtube.js'
import VideoListEntry from '../components/Search.js'

var searchYouTube = (options, callback) => {
  // TODO
  var baseurl = 'https://www.googleapis.com/youtube.v3/search';
  var params = {
    part: options.part,
    q: options.query,
    maxResults: options.max,
    key: options.key
  }
  var callback = (data) => {
    callback(data.items);
  };

  $.get(baseurl, params, callback, 'json');
};

export default searchYouTube;
