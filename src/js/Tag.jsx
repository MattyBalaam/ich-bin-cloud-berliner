import React, { Component } from 'react';


class Tag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
      animClass: 'tag--hide',
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
    this.tag.addEventListener('animationend', ()=> {
      this.tag.classList.remove('tag--animating');
    });
  }

  componentDidUpdate(nextProps) {
    if (this.props.appMounted !== nextProps.appMounted ) {
      this.resizeHandler();
    }
  }

  resizeHandler(){
    this.setState({
      animClass: 'tag--hide',
    })
    clearTimeout(this.wait);
    this.wait = window.setTimeout(this.animateIn.bind(this), 200);
  }

  animateIn(){
    this.setState({
      animClass: 'tag--show tag--animating',
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
          className={`tag tag--size-${topic.group} ${this.state.animClass} ${this.state.colorClass} ${this.props.selected ? 'tag--selected' : ''}`
          }>
        <button className="tag__button" 
          onClick={() => this.props.onSelect(topic.id)}>
            {this.state.splitLabel.map((word, i) => 
              <span key={i} 
                data-length={word.length} 
                className="tag__word">
                {word}
              </span>)
            }
        </button>
      </li>
    )
  }
}

export default Tag;