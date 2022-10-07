import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import { IoIosContact, IoIosTrash, IoIosCreate } from 'react-icons/io';

export default function ListItem({data}) {
	return(
		<div className="border p-1 rounded  mt-2 hover:bg-indigo-200">
			<div className="flex space-x-20 items-center">
				<div>
                    {data.image
                        ?<img
                            src={'/storage/'+data.image}
                            width='30'
                            height='30'
                            className='rounded-full'
                        />
                        :<IoIosContact className="text-3xl"/>
                    }
				</div>
				<div className="w-64">{data.name}</div>
				<div>{data.cel1}</div>

				<div className="flex space-x-4">
					<Link className="text-2xl text-indigo-400 hover:text-indigo-600" href="#" title="Editar"><IoIosCreate/></Link>
					<Link className="text-2xl text-red-400 hover:text-red-600" href="#" title="Excluir"><IoIosTrash/></Link>
				</div>
			</div>
		</div>
	);
}
