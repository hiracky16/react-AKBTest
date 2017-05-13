import React, { Component } from 'react';
import { render } from 'react-dom';

import Pattern from './image.jsx';

import img3 from '../images/3.jpg';
import img5 from '../images/5.jpg';
import img6 from '../images/6.jpg';
import img7 from '../images/7.jpg';
import img10 from '../images/10.jpg';
import img11 from '../images/11.jpg';
import img12 from '../images/12.jpg';

const rnd = require('./random.js');

export default class ABpattern extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageA: img3,
      imageB: img5,
      img_list : [
        img3, img5, img6, img7, img10, img11, img12
      ],
    };
  }

  changeImage(e, state) {
    const index = rnd(0, 7);
    // state.imageA = state.img_list[index];
    console.log(index);
  }

	render () {
		return (
			<div className="patterns">
				<Pattern 
          src={ this.state.imageA }
          hover={ {outline: "3px solid #f00"} } 
          id="imageA" 
          onClick={e => this.changeImage(e, this.props, this.state)} />
				<Pattern 
          src={ this.state.imageB } 
          hover={ {outline: "3px solid #00f"} }
          id="imageB" 
          onClick={e => this.changeImage(e, this.state)} />
			</div>	
		);
	}
}
