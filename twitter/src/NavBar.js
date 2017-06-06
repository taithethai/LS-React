import React, {Component} from 'react';

export default class NavBar extends Component{
	render() {
		return(
			<div className="navBar">
				<ul>
					<li id="Home">
						<a href="/home">Home</a>
					</li>
					<li id="Moments">
						<a href="/moments">Moments</a>
					</li>
					<li id="Notifications">
						<a href="/notifications">Notifications</a>
					</li>
					<li id="Messages">
						<a href="messages">Messages</a>
					</li>
				</ul>
			</div>
			);
	}
}

				// <ul>
				// 	<li className="Home">Home</li>
				// 	<li className="Moments">Moments</li>
				// 	<li className="Notifications">Notifications</li>
				// 	<li className="Messages">Messages</li>
				// </ul>