import React, { Component } from 'react';
import '../css/App.css';
import TagCloud from './TagCloud';
import TagDetails from './TagDetails';
import Legend from './Legend';

import ckMeansCluster from './utils/ckMeansCluster.js';
import shuffle from './utils/shuffle.js';
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
    const sorting = this.props.customSort || (this.props.sortType === 'pyramid' ? pyramidSort : shuffle );
    this.setState({
      topics: sorting(topics),
    })
  }

  selectWord(id) {
    if (id === this.state.selectedTopicId) {
      return false;
    }
    this.setState({
      selectedTopicId: id,
      selected: this.state.topics.find(topic => topic.id === id),
    })
  }

  componentDidMount() {
    this.setState({
      appMounted: true,
    })
  }

  render() {
    return (
      <main className="cloud">
        <div className="cloud__inner">
          <h1 className="cloud__title">{this.props.title}</h1>
          {this.props.legendDetails ? 
            <Legend details={this.props.legendDetails}/> 
            : null }
            <article className="cloud__grid">
              <TagCloud 
                content={this.state.topics}
                selectedTopicId={this.state.selectedTopicId}
                onSelect={this.selectWord.bind(this)}
                legendDetails={this.props.legendDetails}
                appMounted={this.state.appMounted}
              />
              <TagDetails 
                content={this.state.selected}
                detailsAreas={this.props.detailsAreas}
                appMounted={this.state.appMounted}
              />
            </article>
          </div>
      </main>
    );
  }
}

export default App;
