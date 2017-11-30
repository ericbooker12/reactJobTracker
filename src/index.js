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

		fetch("http://localhost:3000/jobs")
			.then(res => res.json())
			.then((result) => {
				this.setState({
					isloaded: true,
					jobs:result
				});
			},
			(error) => {
				this.setState({
					isLoaded: false,
					error
				});
			}
		)

	}
}

