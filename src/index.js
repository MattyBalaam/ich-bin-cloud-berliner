import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import CloudApp from './js/CloudApp';
import registerServiceWorker from './registerServiceWorker';
import topics from './json/topics.json';

const berlin = {
    title: 'Ich Bin Cloud Berliner',
    clustering: 6,
    detailsAreas: {
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
    },
    legendDetails: {
        "title": "Sentiment",
        "labels": [
            {
                "title": "red", 
                "description": "under 40",
                "condition": "< 40"
            }, {
                "title": "grey", 
                "description": "40 – 60",
                "condition": ""
            }, {
                "title": "green", 
                "description": "over 60",
                "condition": "> 60"
            }
        ]
    },
    sortType: 'pyramid'
}

ReactDOM.render(
    <CloudApp 
        title={berlin.title}
        data={topics}
        clustering={berlin.clustering}
        detailsAreas={berlin.detailsAreas}
        legendDetails={berlin.legendDetails}
        sortType={berlin.sortType}
    />, document.getElementById('root'));
registerServiceWorker();
