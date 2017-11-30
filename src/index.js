import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';

const App = () => {
	return (
		<div>
			<Header />
		</div>
	)
}

ReactDOM.render(<App />, document.querySelector('.container'));

// class App extends Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			jobs: [],
// 			selectedJob: null,
// 			isLoaded: false
// 		}

// 		// fetch("http://localhost:3000/jobs")
// 		// 	.then(res => res.json())
// 		// 	.then((result) => {
// 		// 		this.setState({
// 		// 			isloaded: true,
// 		// 			jobs:result
// 		// 		});
// 		// 	},
// 		// 	(error) => {
// 		// 		this.setState({
// 		// 			isLoaded: false,
// 		// 			error
// 		// 		});
// 		// 	}
// 		// )

// 	}
// }

