import React, { Component } from 'react';
import Tag from './Tag';

class TagCloud extends Component {
    
  render() {
    return (
      <ul className="cloud__collection"  ref={ul => this.ul = ul}>
        {this.props.content.map(topic => 
          <Tag key={topic.id} 
            appMounted={this.props.appMounted}
            selected={this.props.selectedTopicId === topic.id}
            topic={topic} 
            onSelect={this.props.onSelect}
          />
        )}
      </ul>
    )
  }
}

export default TagCloud;
