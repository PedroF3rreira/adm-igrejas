import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';
import { Link } from '@inertiajs/inertia-react';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/Inputlabel';
import List from '@/Components/List';
import ListItem from '@/Components/ListItem';
import { IoMdList, IoIosPersonAdd } from 'react-icons/io';
import Dropdown from '@/Components/Dropdown';


export default function Index(props) {

    const { dropdown, setDropdown } = useState(false);

    return(
        <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        >
            <Head title='Membros' />

            <div className='lg:flex px-5 mt-5 text-slate-500'>
                <div className='bg-white rounded lg:flex-1 lg:mx-4 mb-2 p-2 shadow-md'>
                    
                    
                    <div className="flex mb-2 items-center">

                        <div className="flex-1">
                            <TextInput type="search" className="p-1" />    
                        </div>
                        
                        
                        <div className="w-32 flex space-x-10">
                            
                            <Link href={route('members.create')}>
                                <IoIosPersonAdd className="text-2xl text-indigo-400 hover:text-indigo-600"/>
                            </Link>

                            <Dropdown>
                            <Dropdown.Trigger>
                                <button>
                                    <IoMdList className="text-2xl text-indigo-400 hover:text-indigo-600"/>
                                </button>
                            </Dropdown.Trigger>
                            <Dropdown.Content >
                                <button className="block w-full px-4 py-2 text-left text-sm leading-5 text-slate-500 hover:bg-indigo-200 focus:bg-indigo-100 transition duration-150 ease-in-out" >
                                    recentes
                                </button>
                                <button className="block w-full px-4 py-2 text-left text-sm leading-5 text-slate-500 hover:bg-indigo-200 focus:bg-indigo-100 transition duration-150 ease-in-out" >
                                    Pastores
                                </button>
                                <button className="block w-full px-4 py-2 text-left text-sm leading-5 text-slate-500 hover:bg-indigo-200 focus:bg-indigo-100 transition duration-150 ease-in-out" >
                                    Presbiteros
                                </button>
                                
                            </Dropdown.Content>
                        </Dropdown>
                        </div>
                    </div>
                    
                    <List title="Membros">
                       {props.members.map((member) => (
                           
                               <ListItem key={member.id} data={member}/>
                           
                           ))}
                    </List>

                </div>
                <div className='bg-white rounded lg:w-64 p-2 shadow-md'>
                    <h1>Conteúdo lateral</h1>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
