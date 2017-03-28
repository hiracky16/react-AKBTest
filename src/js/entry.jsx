import React, { Component } from 'react';
import { render } from 'react-dom';

import Title from './test.jsx';

/*
export default class Title extends Component {
	render () {
		return (
			<div className="title-div">
				<h1> This is {this.props.name} </h1>
			</div>	
		);
	}
}
*/


render(
	<div>
		<Title name="React"/>
		<p>Hello webpack and React!</p>
	</div>,
	document.getElementById('root')
);
