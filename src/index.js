// TODO: Render the `App` component to the DOM
// import React from 'react';
// import ReactDOM from 'react-dom';
import App from './components/App.js';
import searchYouTube from './lib/searchYouTube.js';

ReactDOM.render(<App searchYouTube={searchYouTube}/>, document.getElementById('app'));
