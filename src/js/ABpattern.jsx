import React, { Component } from 'react';
import { render } from 'react-dom';

import Pattern from './image.jsx';

import img3 from '../images/3.jpg';
import img5 from '../images/5.jpg';

const imgA = {
	src: img3,
	width: "10%",
	height: ""
}

const imgB = {
	src: img5,
	width: "10%",
	height: ""
}


export default class ABpattern extends Component {
	render () {
		return (
			<div className="patterns">
				<Pattern img={ imgA } />
				<Pattern img={ imgB } />
			</div>	
		);
	}
}
