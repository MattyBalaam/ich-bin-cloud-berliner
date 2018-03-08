import React from 'react';
import ReactDOM from 'react-dom';
import CloudApp from './CloudApp';

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
  ReactDOM.render(<CloudApp data={testSet} clustering={2}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

// toDo: test to add >
// detailsAreas={detailsAreas}
// legendDetails={legendDetails}
// sort='pyramid'