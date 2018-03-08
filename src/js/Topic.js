import React, { Component } from 'react';


class Topic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null,
            show: false,
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
        window.addEventListener('resize', this.resizeHandler.bind(this))
    }

    componentDidUpdate(nextProps) {
        if (this.props.appMounted !== nextProps.appMounted ) {
            this.resizeHandler();
        }
    }

    resizeHandler(){
        this.setState({
            show: false,
        })
        clearTimeout(this.wait);
        this.wait = window.setTimeout(this.makeSquare.bind(this), 200);
    }

    makeSquare(){
        const width = this.tag.offsetWidth;
        this.tag.style.height = `${width}px`;
        this.setState({
            show: true,
        })
    }

    getWordCount(str) {
        return str.split(" ").length;
    }

    getColorClass(score) {
        // enhancement - get from this.props.legendDetails;        
        if (score < 40) { //detail.condition
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
                className={`tag tag--size-${topic.group} tag--${this.state.show ? 'show' : 'hide'} ${this.state.colorClass} ${this.props.selected ? 'tag--selected' : ''}`}>
                <button className="tag__button" 
                    onClick={() => this.props.onSelect(topic.id)}>
                    {this.state.splitLabel.map((word, i) => 
                        <span key={i} className="tag__word">{word}</span>)
                    }
                </button>
            </li>
        )
    }
}

export default Topic;