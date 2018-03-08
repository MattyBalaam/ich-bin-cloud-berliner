import React, { Component } from 'react';
import balanceText from 'balance-text';

class TagDetails extends Component {

    CARD_ANIM_TIME = 300;

    constructor(props) {
        super(props);
        this.state = {
          ready: true,
        };
    }

    balanceTitle() {
        console.log('balance teitle', this.title);
        balanceText(this.title);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            ready: false,
            hide: true,
        }, ()=> this.switchContent(nextProps.content));
    }

    switchContent(content) {
        window.setTimeout(()=> {
            this.setState({
                ready: true,
                content: content,
                hide: false,
            });
        }, this.CARD_ANIM_TIME);
        
    }

    componentDidUpdate() {
        window.setTimeout(this.balanceTitle.bind(this), 40);
    }

    componentDidMount() {
        window.addEventListener('resize', this.balanceTitle.bind(this));
    }

    render() {
        return(
            <section className="cloud__selected">
                <div className={`topic-details ${this.state.content || this.state.hide ? `topic-details--${this.state.ready ? 'show' : 'hide'}`: null}`}>
                    {this.state.content ?
                    <div>
                        <h3 className="topic-details__title" ref={title => this.title = title}>{this.state.content.label}</h3>
                        <dl>
                            <dt>Total Mentions</dt>
                            <dd>{this.state.content.volume}</dd>
                            <dt>Positive Mentions</dt>
                            <dd>{this.state.content.sentiment.positive || 'zero'}</dd>
                            <dt>Neutral Mentions</dt>
                            <dd>{this.state.content.sentiment.neutral || 'zero'}</dd>
                            <dt>Negative Mentions</dt>
                            <dd>{this.state.content.sentiment.negative || 'zero'}</dd>
                        </dl>
                    </div> : <p>Select a topic to see more details</p>}
                </div>
            </section>
        )

    }
}

export default TagDetails;
