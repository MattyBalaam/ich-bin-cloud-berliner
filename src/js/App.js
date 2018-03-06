import React, { Component } from 'react';
import '../css/App.css';
import data from '../json/topics.json';
import TagCloud from './TagCloud';
import TagDetails from './TagDetails';

import ckMeansCluster from './utils/ckMeansCluster.js';
import shuffle from './utils/shuffle.js';


class App extends Component {

  GROUPING = 6;

  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    };
  }

  componentWillMount() {

    const topics = ckMeansCluster(data.topics, this.GROUPING);

    this.setState({
      topics: shuffle(topics),
    })
  }

  selectWord(id) {
    const selected = this.state.topics.find(topic => topic.id === id)
    this.setState({
      selectedTopic: id,
      selected: selected,
    })
  }

  render() {

    return (
      <main className="cloud">
        <article className="cloud__grid">
            <TagCloud content={this.state.topics} onSelect={this.selectWord.bind(this)}/>
            <TagDetails content={this.state.selected}/>
          </article>
      </main>
    );
  }
}

export default App;
