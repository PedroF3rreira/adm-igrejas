import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';
import { Link , useForm} from '@inertiajs/inertia-react';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/Inputlabel';
import InputError from '@/Components/InputError';
import List from '@/Components/List';
import ListItem from '@/Components/ListItem';

export default function Created(props) {

    const { data, setData, post, processing, reset, errors } = useForm({
        name: '',
        email: '',
        cel1: '',
        cel2: '',
        cpf: '',
    });

    const submit = (e) =>{
        e.preventDefault();
        post(route('members.store'), { onSuccess: () => reset() });
    }


    return(
        <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        >
            <Head title='Membros' />

            <div className='lg:flex px-5 mt-5 text-slate-500'>
                <div className='bg-white rounded lg:flex-1 lg:mx-4 mb-2 p-2 shadow-md'>
                    <form>
                        <InputLabel className="text-slate-500">Nome completo</InputLabel>
                        <input
                            value={data.name} 
                            className="p-1 border border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm " 
                            onChange={e => setData('name', e.target.value)}
                        />

                    </form>
                    {console.log(data.name)}
                </div>
                <div className='bg-white rounded lg:w-64 p-2 shadow-md'>
                    <h1>Conteúdo lateral</h1>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
