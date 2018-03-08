import React, { Component } from 'react';
import '../css/App.css';
import TagCloud from './TagCloud';
import TagDetails from './TagDetails';
import Legend from './Legend';

import ckMeansCluster from './utils/ckMeansCluster.js';
// import shuffle from './utils/shuffle.js';
import pyramidSort from './utils/pyramidSort.js';

import 'core-js/fn/array/find'; // ie fix


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    };
  }

  componentWillMount() {

    const clustering = this.props.clustering || 20;
    const topics = ckMeansCluster(this.props.data.topics, clustering);

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
        <div className="cloud__inner">
          <h1 className="cloud__title">Ich Bin Cloud Berliner</h1>
          {this.props.legendDetails ? <Legend details={this.props.legendDetails}/> : null }
          <article className="cloud__grid">
              <TagCloud 
                content={this.state.topics}
                selectedTopicId={this.state.selectedTopicId}
                onSelect={this.selectWord.bind(this)}/>
              <TagDetails content={this.state.selected}/>
            </article>
          </div>
      </main>
    );
  }
}

export default App;
