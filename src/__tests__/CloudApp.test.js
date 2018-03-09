import React from 'react';
import ReactDOM from 'react-dom';
import {getTestSet} from '../___mocks___/testData'
import CloudApp from '../js/CloudApp';



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CloudApp data={getTestSet()} clustering={2}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});


// toDo: test to add >
// detailsAreas={detailsAreas}
// legendDetails={legendDetails}
// sort='pyramid'