import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/inertia-react';
import { IoIosContact, IoIosTrash, IoIosCreate } from 'react-icons/io';
import FormMemberUpdate from '@/Components/FormMemberUpdate';
import Message from '@/Components/Message';

export default function ListItem({member, status}) {

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
                <Message text={status}/>
            }
			<div className="flex  items-center text-sm">
				<div className='w-16'>
                    {member.image
                        ?<div className='flex items-center rounded-full overflow-hidden w-8 h-8'>
                            <img
                                src={'/storage/'+member.image}                            
                            />
                        </div>
                        :<IoIosContact className="text-3xl"/>
                    }
				</div>
				<div className='flex-1'>{member.name}</div>
                <div className='flex-1 hidden xl:block'>{member.email}</div>
				<div className='flex-1 hidden sm:block'>{member.cel1}</div>

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
                        href={route("members.destroy", member.id)}
                        title="Excluir">
                        <IoIosTrash/>
                    </Link>
				</div>
			</div>
            {showEditForm &&
                <FormMemberUpdate title={`Editar`} formSuccess={timeMessageShow} member={member}/>
            }
		</div>
	);
}
