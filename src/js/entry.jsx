import React, { Component } from 'react';
import { render } from 'react-dom';
import Dropzone from 'react-dropzone';

import style from '../css/style.css';

import Title from './test.jsx';
import Patterns from './ABpattern.jsx';

render(
	<div id="main">
		<Title name="React"/>
		<Patterns />
    <Dropzone>
      <div>Drag and Drop files at Here!</div>
    </Dropzone>
	</div>,
	document.getElementById('root')
);
