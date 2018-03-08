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
    if (!nextProps.appMounted) {
      return false;
    }
    this.setState({
      ready: false,
      modifierClass: `topic-details--${this.props.appMounted ? 'hide' : ''}`,
    }, () => this.switchContentAfterAnim(nextProps.content));
  }

  switchContentAfterAnim(content) {
    this.details.addEventListener('animationend', () => this.switchContent(content));
  }

  switchContent(content) {
    this.details.removeEventListener('animationend', this.switchNextProps);
    this.setState({
      ready: true,
      content: content,
      modifierClass: 'topic-details--show',
    });
  }

  getDataByStringRef(ref, obj) {
    return ref.split('.').reduce((obj,idx)=>obj[idx], this.state.content);
  }

  render() {    
    return(
      <section className="cloud__selected-topic">
        <div className={`topic-details ${this.state.modifierClass}`} ref={details => this.details = details}>
          {this.state.content ?
          <>
            <h3 className="topic-details__title">{this.state.content.label}</h3>
            <dl className="topic-details__list">
              {this.props.detailsAreas.labels.map((area, i) => {
                const areaData = this.getDataByStringRef(area.data, this.state.content) || 'zero';
                return <div key={i}>
                  <dt className="topic-details__type">{area.title}</dt>
                  <dd className={`topic-details__value ${areaData === 'zero' ? 'deemphasise' : ''}`}>{areaData}</dd>
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
