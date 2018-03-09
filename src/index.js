import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import CloudApp from './js/CloudApp';
import registerServiceWorker from './registerServiceWorker';
import topics from './json/topics.json';
import vhCheck from 'vh-check';

const iOSfixVar = 'vh-offset';
const iOSfixNeeded = vhCheck(iOSfixVar) //set css variable to alter iOS VH behaviour to make more consistent with other platdorms. 
if (!iOSfixNeeded) {
  document.documentElement.style.setProperty(`--${iOSfixVar}`, '0px');
}

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
