import React, { Component } from 'react';
import '../css/App.css';
import TagCloud from './TagCloud';
import TagDetails from './TagDetails';

import ckMeansCluster from './utils/ckMeansCluster.js';
import shuffle from './utils/shuffle.js';

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
      topics: shuffle(topics),
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
