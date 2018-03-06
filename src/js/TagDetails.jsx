import React, { Component } from 'react';


class TagDetails extends Component {

    render() {
        return(
            <section className="cloud__selected">
                {this.props.content  ?
                    <dl>
                        <lh>{this.props.content.label}</lh>
                        <dt>Total Mentions</dt>
                        <dd>{this.props.content.volume}</dd>
                        <dt>Positive Mentions</dt>
                        <dd>{this.props.content.sentiment.positive || 'zero'}</dd>
                        <dt>Neutral Mentions</dt>
                        <dd>{this.props.content.sentiment.neutral || 'zero'}</dd>
                        <dt>Negative Mentions</dt>
                        <dd>{this.props.content.sentiment.negative || 'zero'}</dd>
                    </dl>
                : null}
            </section>
        )

    }
}

export default TagDetails;
