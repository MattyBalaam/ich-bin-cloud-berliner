import React, { Component } from 'react';

class TagDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
          ready: true,
          modifierClass: 'topic-details--waiting',
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.appMounted ) {
            this.switchNextProps = this.switchContent.bind(this,nextProps.content);
            this.setState({
                    ready: false,
                    modifierClass: `topic-details--${this.props.appMounted ? 'hide' : ''}`,
                }, () => this.details.addEventListener('animationend', this.switchNextProps)
            );
        }
    }

    switchContent(content) {
        this.details.removeEventListener('animationend', this.switchNextProps);
        this.setState({
            ready: true,
            content: content,
            modifierClass: 'topic-details--show',
        });
    }

    render() {    
        return(
            <section className="cloud__selected-topic">
                <div className={`topic-details ${this.state.modifierClass}`} ref={details => this.details = details}>
                    {this.state.content ?
                    <>
                        <h3 className="topic-details__title" ref={title => this.title = title}>{this.state.content.label}</h3>
                        <dl>
                            {this.props.detailsAreas.labels.map((area, i) => {
                                const areaData = area.data.split('.').reduce((o,i)=>o[i], this.state.content) || 'zero';
                                return <div key={i}>
                                    <dt>{area.title}</dt>
                                    <dd className={`${areaData === 'zero' ? 'deemphasise' : null}`}>{areaData}</dd>
                                </div>
                                }
                            )}
                        </dl>
                    </> : <p>Select a topic to see more details</p>}
                </div>
            </section>
        )

    }
}

export default TagDetails;
