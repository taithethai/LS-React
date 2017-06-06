import React, {Component} from 'react';

export default class Stream extends Component {
	render() {
		return(
			<div className="stream">
				{this.props.tweets.map((item) => {
          return <p>{item.text}</p>
        })}
			</div>
			);
	}
}