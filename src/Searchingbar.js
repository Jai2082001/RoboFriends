import React from 'react';

const Searchingbar = ({onsearchange}) => {
	return(
	<div className = 'pd2'>
	<input className = "pa3 ba b--green bg-lightest-blue" type = "search" placeholder = 'Search it Here' onChange = {onsearchange}/>
	</div>
	);
}

export default Searchingbar;