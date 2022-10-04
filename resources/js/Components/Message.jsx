import React from 'react';
import { IoIosCheckmarkCircle } from 'react-icons/io'


export default function Message({text}) {
	return (
		

		<div className=' flex items-center  text-slate-500 transition-all  w-128 my-2 mx-2 rounded-md border-l-4 bg-white border-l-indigo-400 border p-2 shadow-md'>
			<IoIosCheckmarkCircle className='text-3xl text-green mr-3 text-green-500'/>
			<p>{text}</p>
		</div>

		
	);
}