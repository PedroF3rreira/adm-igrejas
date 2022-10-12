import React from 'react';
import { Link } from '@inertiajs/inertia-react';

export default function Pagination({ links }) {

	const getClassName = (active) => {
		if(active){
			return "mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded  focus:border-primary focus:text-primary bg-indigo-700 text-white";

		} else{
			return "mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-indigo-400 focus:border-primary focus:text-primary";

		}
	}

	return(
		links.length > 3 && (
			<div className="mb-4">
			<div className="flex flex-wrap mt-8">
			{links.map((link, key) => (
				link.url === null ?
				(<div
					
					key={key}
					>{''}</div>) :

				(<Link
					className={getClassName(link.active)}
					href={ link.url }
					key={key}
					>{
						link.label == "&laquo; Previous" ? 
						'<<': 
							link.label == "Next &raquo;" ? 
							'>>':key
					}</Link>)
				))}
			</div>
			</div>
			)
	);
}