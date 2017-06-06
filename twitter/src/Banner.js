import React, {Component} from 'react';

export default class Banner extends Component {
	render() {
		return( 
			<img src={this.props.image} alt="The Ultimate Online Boot Camp" id="bgimg"/>
			);
	}
}