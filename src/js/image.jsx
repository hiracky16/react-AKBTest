import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Image extends Component {
	render () {
		return (
			<div className="div-image">
				<img src={this.props.img.src} width={this.props.img.width} height={this.props.img.height} />
			</div>	
		);
	}
}
