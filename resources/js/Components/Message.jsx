import React,{ useEffect } from 'react';
import { IoIosCheckmarkCircle } from 'react-icons/io'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Message({text}) {

	useEffect( () => {
		AOS.init();
	} );

	return (
		
		<div data-aos='fade-left' className=' flex items-center  text-slate-500 transition-all  w-128 my-2 mx-2 rounded-md border-l-4 bg-white border-l-indigo-400 border p-2 shadow-md'>
			<IoIosCheckmarkCircle className='text-3xl text-green mr-3 text-green-500'/>
			<p>{text}</p>
		</div>

		
	);
}