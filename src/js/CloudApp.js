import React, { Component } from 'react';
import '../css/App.css';
import TagCloud from './TagCloud';
import TagDetails from './TagDetails';

import ckMeansCluster from './utils/ckMeansCluster.js';
// import shuffle from './utils/shuffle.js';
import pyramidSort from './utils/pyramidSort.js';

import 'core-js/fn/array/find'; // ie fix


class App extends Component {

  GROUPING = 6;

  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    };
  }

  componentWillMount() {

    const topics = ckMeansCluster(this.props.data.topics, this.GROUPING);

    this.setState({
      topics: pyramidSort(topics),
    })
  }

  selectWord(id) {
    if (id !== this.state.selectedTopicId) {
      const selected = this.state.topics.find(topic => topic.id === id)
      this.setState({
        selectedTopicId: id,
        selected: selected,
      })
    }

  }

  render() {

    return (
      <main className="cloud">
        <h1 className="cloud__title">Ich Bin Cloud Berliner</h1>
        <aside className="key">
          <p className="key__title">Sentiment</p>
          <dl>
            <dt className="key__range key__range--red">red</dt>
            <dd className="key__description">under 40</dd>
            <dt className="key__range key__range--grey">grey</dt>
            <dd className="key__description">40 – 60</dd>
            <dt className="key__range key__range--green">green</dt>
            <dd className="key__description">over 60</dd>
          </dl>
        </aside>
        <article className="cloud__grid">
            <TagCloud 
              content={this.state.topics}
              selectedTopicId={this.state.selectedTopicId}
              onSelect={this.selectWord.bind(this)}/>
            <TagDetails content={this.state.selected}/>
          </article>
      </main>
    );
  }
}

export default App;
