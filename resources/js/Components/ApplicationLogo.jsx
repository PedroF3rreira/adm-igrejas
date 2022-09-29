import React from 'react';
import { IoIosJournal } from 'react-icons/io';

export default function ApplicationLogo({ className }) {
    return (
    	<div className="flex flex-col items-center">

        <IoIosJournal className="text-3xl text-indigo-600"/>
        <p className="text-sm font-bold text-indigo-600">AdmIgrejas</p>
        </div>
    );
}
