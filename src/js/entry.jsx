import React, { Component } from 'react';
import { render } from 'react-dom';

import style from '../css/style.css';

import Title from './test.jsx';
import Patterns from './ABpattern.jsx';

render(
	<div id="main">
		<Title name="React"/>
		<Patterns />
	</div>,
	document.getElementById('root')
);
