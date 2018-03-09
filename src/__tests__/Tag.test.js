import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render  } from 'enzyme';
import {getTestSet} from '../___mocks___/testData'
import Tag from '../js/Tag';


describe('Tag', ()=> {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Tag topic={getTestSet().topics[0]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('shows proper text', () => {
    const div = document.createElement('div');
      const tag = mount(<Tag topic={getTestSet().topics[0]} />);
      expect(tag.text()).toEqual('a');
  });

  it('has selected class when selected prop passed', () => {
    const div = document.createElement('div');
    const tag = mount(<Tag selected={true} topic={getTestSet().topics[0]} />);
    expect(tag.render().hasClass('tag--selected')).toEqual(true);
  });
      
})

