import React from 'react';

export default function List({children, title}) {
	return(
		<div className='border rounded-md p-2'>
			<h3 className="bg-indigo-500 text-white p-3 rounded-md">{title}</h3>
			
			{children}
		</div>
	);
}