import React, { Component } from 'react';


class TagCloud extends Component {

    constructor(props) {
        super(props);
        this.state = {
          selected: null,
        };
    }
    
    getTopic(topic) {
        const tagColour = topic.sentimentScore > 60 ? 'tag--green' : topic.sentimentScore < 40 ? 'tag--red' : 0; //toDo - make readable.
        return (
            <li key={topic.id} className={`tag tag--size-${topic.group} ${tagColour ? tagColour : ''}`}>
                <button className="tag__button" onClick={() => this.props.onSelect(topic.id)}>
                    {topic.label}
                </button>
            </li>
        )
    }

    render() {
        return (
            <ul className="cloud__collection">
                {this.props.content.map(topic => this.getTopic(topic))}
            </ul>
        )
    }
}

export default TagCloud;
