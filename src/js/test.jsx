import React, { Component } from 'react';
import { render } from 'react-dom';

const rnd = require('./random.js');
console.log(rnd(1, 3));

export default class Title extends Component {
	render () {
		return (
			<div className="title">
				<h1> This is {this.props.name} </h1>
			</div>	
		);
	}
}
