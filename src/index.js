import React, { Component } from 'react';
import ReactDom from 'react-dom';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			jobs: [],
			selectedJob: null,
			isLoaded: false
		}

	}
}

