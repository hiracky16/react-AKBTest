import React, { Component } from 'react';
import { render } from 'react-dom';

import Title from './test.jsx';
import Patterns from './ABpattern.jsx';

render(
	<div>
		<Title name="React"/>
		<Patterns />
		<p>Hello webpack and React!</p>
	</div>,
	document.getElementById('root')
);
