import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import CloudApp from './js/CloudApp';
import registerServiceWorker from './registerServiceWorker';
import topics from './json/topics.json';

const legendDetails = {
    "title": "Sentiment",
    "labels": [
        {
            "title": "red", 
            "description": "under 40"
        }, {
            "title": "grey", 
            "description": "40 – 60"
        }, {
            "title": "green", 
            "description": "over 60"
        }
    ]
}

const detailsAreas = {
    "labels": [
        {
            "title": "Total Mentions", 
            "data": "volume"
        }, {
            "title": "Positive Mentions",
            "data": "sentiment.positive"
        }, {
            "title": "Neutral Mentions", 
            "data": "sentiment.neutral"
        }, {
            "title": "Negative Mentions", 
            "data": "sentiment.negative"
        }
    ]
}

ReactDOM.render(
    <CloudApp 
        data={topics} 
        clustering={6}
        detailsAreas={detailsAreas}
        legendDetails={legendDetails}
    />, document.getElementById('root'));
registerServiceWorker();
