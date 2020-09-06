import React from 'react';
import Card from './Card';

const Cardlist = ({robots}) => {
	return(
			<div>
			{	
			robots.map((card, i) => {	
			return (
			<Card 
			key = {i} 
			name = {card.name} 
			email = {card.email} 
			id = {card.id}
			/>
			);
		})
	}
		</div>
		);
}

export default Cardlist