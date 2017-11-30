import React from 'react';
import { Component } from 'react';
// above line is same as:
// const Component = React.Component

class Header extends Component {

	// Every class in react must have a render method
	render() {
		return <div className='header'>This is the header</div>
	}
}

export default Header;