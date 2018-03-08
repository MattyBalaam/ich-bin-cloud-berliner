import React, { Component } from 'react';
import Topic from './Topic';

class TagCloud extends Component {
    
    render() {
        return (
            <ul className="cloud__collection"  ref={ul => this.ul = ul}>
                {this.props.content.map(topic => 
                    <Topic key={topic.id} 
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
