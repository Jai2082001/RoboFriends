import React from 'react';
import Cardlist from './cardlist';
import Searchingbar from './Searchingbar';
import { robots } from './robots.js';
import './App.css';
import Scroll from './Scroll.js';

//Posting on github


class App extends React.Component {
	constructor()
	{
		super()
		this.state = {
		robots: [],
		searchifield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({searchifield: event.target.value})
		}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users').then(response=>{return response.json();})
		.then(users => {
			this.setState({ robots: users})
		});
	}

	render(){
		const filteredrobo = this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchifield.toLowerCase())
		});
		return(
			<div className = 'tc'>{
				<>				
				<h1>RoboFriends</h1> 
				<Searchingbar onsearchange = {this.onSearchChange}/>
				<Scroll>
					<Cardlist robots = { filteredrobo }/>
				</Scroll>	
				</>
			}
			</div>
		);
	}
}

export default App;