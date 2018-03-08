import React from 'react';
import ReactDOM from 'react-dom';
import TagCloud from './TagCloud';

const testDetails = {
    "title": "Sentiment",
    "labels": [
        {
            "title": "red", 
            "description": "under 40",
            "condition": "< 40"
        }
    ]
}

const testSet = {
    "topics": [
        {
            "id": "1",
            "label": "a",
            "volume": 1,
            "type": "topic",
            "sentiment": {
                "negative": 3,
                "neutral": 133,
                "positive": 29
            },
            "sentimentScore": 65,
        }, {
            "id": "2",
            "label": "b",
            "volume": 2,
            "type": "topic",
            "sentiment": {
                "negative": 4,
                "neutral": 134,
                "positive": 30
            },
            "sentimentScore": 165,
        }
    ]
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TagCloud content={testSet.topics} details={testDetails} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
