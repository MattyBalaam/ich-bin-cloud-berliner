import React, { Component } from 'react';
import Topic from './Topic';

class TagCloud extends Component {
    
    // componentDidMount() {
    //     console.log('mount');
    //     this.firstChild = this.ul.firstChild;
    //     this.lastChild = this.ul.lastChild;
    //     this.adjustStartMargin();
    //     window.addEventListener('resize', this.adjustStartMargin.bind(this));
    // }

    // adjustStartMargin() {

    //     this.firstChild.style.marginLeft = '';
    //     const parentRight = this.ul.getBoundingClientRect().right;
    //     const diff = parentRight - this.lastChild.getBoundingClientRect().right;
    //     console.log(diff);
    //     console.log(this.firstChild);
    //     this.firstChild.style.marginLeft = diff/3 + 'px';
    // }

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
