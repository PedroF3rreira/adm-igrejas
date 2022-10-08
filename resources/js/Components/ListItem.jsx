import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/inertia-react';
import { IoIosContact, IoIosTrash, IoIosCreate } from 'react-icons/io';
import FormMemberUpdate from '@/Components/FormMemberUpdate';
import Message from '@/Components/Message';

export default function ListItem({data, status}) {

    const [ showEditForm, setShowEditForm ] = useState(false);
    const [ showMessage, setShowMessage ] = useState(false);

    const timeMessageShow = (data) => {
        setShowMessage(data)

        setTimeout( () => {
            setShowMessage(false)
        }, 3000)
    }
    const showEditFormHandle = () => {
        if(!showEditForm){
            setShowEditForm(true);
        }
        else{
            setShowEditForm(false);
        }
    }

    return(
		<div className={`border p-1 rounded  mt-2 ${!showEditForm && 'hover:bg-indigo-200'}`}>
            {showMessage &&
                <Message text={'editado copm exito'}/>
            }
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
					<button
                        className={`text-2xl text-indigo-400 hover:text-indigo-600 ${showEditForm && 'text-indigo-900'}`}
                        onClick={() => showEditFormHandle()}
                        title="Editar">
                        <IoIosCreate/>
                    </button>
					<Link
                        className="text-2xl text-red-400 hover:text-red-600"
                        as="button"
                        method="delete"
                        href={route("members.destroy", data.id)}
                        title="Excluir">
                        <IoIosTrash/>
                    </Link>
				</div>
			</div>
            {showEditForm &&
                <FormMemberUpdate title={`Editar ${data.name}`} formSuccess={timeMessageShow} member={data}/>
            }
		</div>
	);
}
