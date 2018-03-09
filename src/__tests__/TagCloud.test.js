import React from 'react';
import ReactDOM from 'react-dom';
import {getTestSet, getTestDetails} from '../___mocks___/testData'
import TagCloud from '../js/TagCloud';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TagCloud content={getTestSet().topics} details={getTestDetails()} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
