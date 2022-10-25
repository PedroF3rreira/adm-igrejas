import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/inertia-react';
import { IoIosContact, IoIosTrash, IoIosCreate, IoIosCloseCircle } from 'react-icons/io';
import FormMemberUpdate from '@/Components/FormMemberUpdate';
import Message from '@/Components/Message';

export default function MemberItem({member, status}) {

    const [ showEditForm, setShowEditForm ] = useState(false);
    const [ showMessage, setShowMessage ] = useState(false);
    const [ showModal, setShowModal] = useState(false);

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
			<div className="flex items-center text-sm">
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
				<div onClick={e => setShowModal(true)} className='flex-1 cursor-pointer'>{member.name}</div>
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

            {showModal &&
                
                /*modal de detalhes de usuario*/
                <div 
                    data-aos='fade-down'
                    className='flex items-center justify-center fixed inset-0 z-index-1 w-full h-full'>
                    <div className='w-3/5  bg-white rounded-lg shadow-lg'>
                        {/*cabeçalho do modal*/}
                        <div className='flex rounded-t-lg items-center bg-indigo-600 border-b-4 border-indigo-800 p-2 overflow-hidden'>
                            <p className='flex-1 text-white'>Detalhes dos membros</p>
                            <IoIosCloseCircle onClick={e => setShowModal(false)} className='text-2xl text-white hover:text-red-500 cursor-pointer'/>
                        </div>
                        {/*Conteúdo do modal*/}
                        <div className='lg:flex p-2'>
                            
                            <div className='flex-1'>
                                <div className='xl:flex xl:space-x-10 my-3'>
                                    <p>Nome: {member.name}</p>
                                    <p>Email: {member.email}</p>    
                                </div>
                                
                                <div className='xl:flex xl:space-x-5 my-3'>
                                    <p>Contatos: {member.cel1}</p>
                                    <p>{member.cel2}</p>  
                                </div>
                                <div className='flex flex-col my-3'>
                                    <p>Cpf: {member.cpf}</p>    
                                    <p className='my-2'>Cargo: {member.positions.length
                                        ? member.positions.map(position => (position.name))
                                        : 'Membro'
                                    }</p>
                                </div>

                                
                            </div>
                            
                            <div className='flex items-center justify-center lg:w-60 lg:h-60 overflow-hidden rounded-md border-4 border-indigo-400'>
                                {member.image
                                    ? <img className='w-full' src={`/storage/${member.image}`}/>
                                    : <IoIosContact className="text-9xl text-center"/>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            }
		</div>
	);
}
