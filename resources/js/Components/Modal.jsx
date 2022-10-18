import React from 'react';


export default function Modal({children, title, isOpen}) {
	return(
	<div 
        data-aos='fade-down'
        className='flex items-center justify-center fixed inset-0 z-index-1 w-full h-full'>
        <div className='w-3/5  bg-white rounded-lg shadow-lg'>
            {/*cabeçalho do modal*/}
            <div className='flex rounded-t-lg items-center bg-indigo-600 border-b-4 border-indigo-800 p-2 overflow-hidden'>
                <p className='flex-1 text-white'>{ title }</p>
                <IoIosCloseCircle onClick={e => setShowModal(isOpen)} className='text-2xl text-white hover:text-red-500 cursor-pointer'/>
            </div>
            {/*Conteúdo do modal*/}
            <div className='flex p-2'>
            	{children}    
			</div>
        </div>
    </div>
	);
}