import React, { Component } from 'react';

class TagCloud extends Component {
    
    render() {
        return (
            <ul className="cloud__collection">
                {this.props.content.map(topic => {
                    return <Topic key={topic.id} 
                        selected={this.props.selectedTopicId === topic.id}
                        topic={topic} 
                        onSelect={this.props.onSelect}/>}
                    )
                }
            </ul>
        )
    }
}

class Topic extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selected: null,
        };
    }

    componentWillMount() {
        const wordCount = this.getWordCount(this.props.topic.label);
        this.setState({
            colorClass: this.getColorClass(this.props.topic.sentimentScore),
            wordCount: wordCount,
            splitLabel: this.props.topic.label.split(' '),
        })
    }

    componentDidMount() {
        window.setTimeout(this.makeSquare.bind(this), 100); // toDo check for styles;
        window.addEventListener('resize', this.makeSquare.bind(this))
    }

    makeSquare(){
        const width = this.tag.offsetWidth;
        this.tag.style.height = `${width}px`;
    }


    getWordCount(str) {
        return str.split(" ").length;
    }

    getColorClass(score) {
        if (score < 40) {
            return 'tag--red';
        } else if (score > 60) {
            return 'tag--green';
        } else {
            return 'tag--grey';
        }
    }

    render() {
        const topic = this.props.topic;
        return (
            <li ref={tag => this.tag = tag}
                className={`tag tag--size-${topic.group} ${this.state.colorClass} ${this.props.selected ? 'tag--selected' : ''}`}
                >
                <button className="tag__button" onClick={() => this.props.onSelect(topic.id)}>
                    {this.state.splitLabel.map((word, i) => <span key={i} className="tag__word">{word}</span>)}
                </button>
            </li>
        )
    }

}


export default TagCloud;
