import React from 'react';
import { Component } from 'react';
// above line is same as:
// const Component = React.Component
import SearchBar from './search_bar';

class Header extends Component {

	// Every class in react must have a render method
	render() {
		return (
			<div className='header'>
				<SearchBar />
			</div>
		)
	}
}

export default Header;