import React,{ useEffect } from 'react';

export default function List({children, title}) {
	return(
		<div className='border rounded-md p-2' data-aos='fade-up' data-aos-duration='1000'>
			<h3 className="bg-indigo-500 text-white p-3 rounded-md">{title}</h3>

			{children}
		</div>
	);
}
