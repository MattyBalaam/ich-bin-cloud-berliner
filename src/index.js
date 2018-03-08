import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import CloudApp from './js/CloudApp';
import registerServiceWorker from './registerServiceWorker';
import topics from './json/topics.json';

ReactDOM.render(<CloudApp data={topics} />, document.getElementById('root'));
registerServiceWorker();
