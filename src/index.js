import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import Header from './components/header';
import JobList from './components/job_list';
import JobDetail from './components/job_detail';
import Footer from './components/footer';

class App extends Component {

	constructor(props){
		super(props);

		this.state = {
			selectedJob: null,
			isLoaded: false,
			jobs: [],
			notes: []
		}

		axios.get(`http://localhost:3000/jobs`)
			.then(res => {
				this.setState({
					jobs: res.data,
					isLoaded: true,
					selectedJob: res.data[0]
				})
			});
	}

	render(){
		return (
			<div>
				<Header />
				<JobDetail job={this.state.selectedJob}/>
				<JobList
					onJobSelect={selectedJob => this.setState({selectedJob}) }
					jobs={this.state.jobs} />
				<Footer />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));


