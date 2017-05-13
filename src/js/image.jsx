import React, { Component } from 'react';
import { render } from 'react-dom';

import img3 from '../images/3.jpg';
import img5 from '../images/5.jpg';
import img6 from '../images/6.jpg';
import img7 from '../images/7.jpg';
import img10 from '../images/10.jpg';
import img11 from '../images/11.jpg';
import img12 from '../images/12.jpg';

export default class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
      img_list: [img3, img5, img6, img7, img10, img11, img12]
    }
  }
  
  mounseOver() {
    this.setState({hovered: true});
  }

  mounseOut() {
    this.setState({hovered: false});
  }


	render () {
    console.log(this.state.hovered);
    const hover_style = this.state.hovered ? this.props.hover : {};
    return (
			<div className="image" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} style={hover_style}>
        <img src={this.props.src} width="80%" />
			</div>	
		);
	}
}
