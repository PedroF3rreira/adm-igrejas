import React,{ useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function List({children, title}) {

    useEffect(() => {
        AOS.init()
    });

	return(
		<div className='border rounded-md p-2' data-aos='fade-up'>
			<h3 className="bg-indigo-500 text-white p-3 rounded-md">{title}</h3>

			{children}
		</div>
	);
}
