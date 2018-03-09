import React from 'react';
import ReactDOM from 'react-dom';
import {getTestLegend} from '../___mocks___/testData'
import Legend from '../js/Legend';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Legend details={getTestLegend()} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
