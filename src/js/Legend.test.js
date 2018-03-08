import React from 'react';
import ReactDOM from 'react-dom';
import Legend from './Legend';

const testSet = { 
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
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Legend details={testSet} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
