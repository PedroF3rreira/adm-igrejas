import React, { useEffect } from 'react';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/inertia-react';

export default function FormMember ({title}) {

    const { data, setData, post, prossecing, errors, reset } = useForm({
        name: '',
        cel1: '',
        cel2: '',
        email: '',
        cpf: ''
    });

    const submit = (e) =>{
        e.preventDefault();
        post(route('member.store'));
    }

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    return(
        <form className='mx-auto flex flex-col space-y-2 w-3/4 border p-2 rounded mb-3'>
            <h3 className='ml-5 mb-3 p-2 bg-indigo-500 text-white rounded-l-lg'>{`${title} Membros`}</h3>
            <div className='flex space-x-2 w-full'>
                <TextInput
                    value={data.name}
                    name='name'
                    placeholder='Nome completo...'
                    handleChange={onHandleChange}
                />

                <TextInput
                    name='email'
                    value={data.email}
                    placeholder='email@company.com...'
                    handleChange={onHandleChange}
                />

            </div>
            <div className='flex space-x-2'>
                <TextInput
                    name='cel1'
                    value={data.cel1}
                    mask='(00)00000-0000'
                    placeholder='Celular...'
                    handleChange={onHandleChange}
                />
                <TextInput
                    name='cel2'
                    value={data.cel2}
                    mask='(00)00000-0000'
                    placeholder='whatsap...'
                    handleChange={onHandleChange}
                />
            </div>
            <div className='flex w-1/2 space-x-2'>
                <TextInput
                    name='cpf'
                    value={data.cpf}
                    mask='000.000.000-00'
                    placeholder='digite o cpf...'
                    handleChange={onHandleChange}
                />
            </div>
        </form>
    );

}
