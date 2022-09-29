import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';
import { Link } from '@inertiajs/inertia-react';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/Inputlabel';
import List from '@/Components/List';
import ListItem from '@/Components/ListItem';
import { IoMdSearch } from 'react-icons/io';
import { IoMdList } from 'react-icons/io';
import { Dropdown } from '@/Components/Dropdown';

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
                    
                    
                    <div className="flex mb-2 items-center space-x-20">
                        <TextInput type="search" className="p-1" />
                        <div className="">
                            <IoMdList className="text-2xl cursor-pointer" onClick={() => setDropdown(true)}/>
                        </div>
                    </div>
                    <List title="Membros">
                       {props.members.map((member) => (
                           
                               <ListItem data={member}/>
                           
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
