import React, { Component } from 'react';
// import balanceText from 'balance-text';

class TagDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
          ready: true,
          modifierClass: '',
        };
    }

    // balanceTitle() {
    //     console.log('balance teitle', this.title);
    //     balanceText(this.title);
    // }

    componentWillReceiveProps(nextProps) {
        this.switchNextProps = this.switchContent.bind(this,nextProps.content);
        this.setState({
                ready: false,
                modifierClass: 'topic-details--hide',
            }, () => this.details.addEventListener('animationend', this.switchNextProps)
        );
    }

    switchContent(content) {
        this.details.removeEventListener('animationend', this.switchNextProps);
        this.setState({
            ready: true,
            content: content,
            modifierClass: 'topic-details--show',
        });
    }

    // componentDidUpdate() {
    //     window.setTimeout(this.balanceTitle.bind(this), 40);
    // }

    // componentDidMount() {
    //     window.addEventListener('resize', this.balanceTitle.bind(this));
    // }

    render() {
        return(
            <section className="cloud__selected-topic">
                <div className={`topic-details ${this.state.modifierClass}`} ref={details => this.details = details}>
                    {this.state.content ?
                    <>
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
                    </> : <p>Select a topic to see more details</p>}
                </div>
            </section>
        )

    }
}

export default TagDetails;
