import React, { Component } from 'react';

class Legend extends Component {
    render(){
      return (
        <aside className="legend">
            <p className="legend__title">{this.props.details.title}</p>
            <dl className="legend__labels">
            {this.props.details.labels.map(label => <>
                <dt className={`legend__label legend__label--${label.title}`}>{label.title}</dt>
                <dd className="legend__description">{label.description}</dd>
            </>)}
            </dl>
        </aside>
      )
    }
  
  }
  
  export default Legend;