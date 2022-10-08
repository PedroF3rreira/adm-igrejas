import React, { useEffect } from 'react';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import { useForm } from '@inertiajs/inertia-react';
import PrimaryButton from '@/Components/PrimaryButton';

export default function FormMemberUpdate ({ title, formSuccess, member }) {

    const { data, setData, put, processing, reset, errors, wasSuccessful, progress  } = useForm({
        name: member.name?member.name:null,
        cel1: member.cel1?member.cel1:null,
        cel2: member.cel2?member.cel2:null,
        email: member.email?member.email:null,
        cpf: member.cpf?member.cpf:null,
        image: member.image?member.image:null,
    });

    useEffect(() => {
        formSuccess(wasSuccessful)
    }, [wasSuccessful])

    const submitUpdate = (e) =>{
        e.preventDefault();
        put(route('members.update', member.id));
    }

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    return(
        <form
            onSubmit={submitUpdate}
            className='mx-auto flex flex-col space-y-2 w-3/4 border p-2 rounded mb-3'
            data-aos='fade-left'
            data-aos-duration='1000'
            >

            <h3 className='ml-5 mb-3 p-2 bg-indigo-500 text-white rounded-l-lg'>{`${title} Membros`}</h3>

            {/*form control*/}
            <div className='flex space-x-2 w-full'>
                <div className='w-full'>
                    <input
                        name='name'
                        className='border flex w-full placeholder:text-slate-400 placeholder:italic px-3 text-slate-500 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm p-2'
                        value={data.name}
                        placeholder='Nome completo...'
                        onChange={e => setData('name', e.target.value)}
                    />
                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className='w-full'>
                    <input
                        className='border flex w-full placeholder:text-slate-400 placeholder:italic px-3 text-slate-500 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm p-2'
                        name='email'
                        value={data.email}
                        placeholder='email@company.com...'
                        onChange={e => setData('email', e.target.value)}
                    />
                    <InputError message={errors.email} className="mt-2" />
                </div>

            </div>

            {/*form control*/}
            <div className='flex space-x-2'>
                <div className='w-full'>
                    <TextInput
                        name='cel1'
                        value={data.cel1}
                        mask='(00)00000-0000'
                        placeholder='Celular...'
                        handleChange={onHandleChange}
                    />
                    <InputError message={errors.cel1} className="mt-2" />
                </div>

                <div className='w-full'>
                    <TextInput
                        name='cel2'
                        value={data.cel2}
                        mask='(00)00000-0000'
                        placeholder='whatsap...'
                        handleChange={onHandleChange}
                    />
                    <InputError message={errors.cel2} className="mt-2" />
                </div>
            </div>

        {/*form control*/}
            <div className='flex space-x-2'>
                <div className='w-full'>
                    <TextInput
                        name='cpf'
                        value={data.cpf}
                        mask='000.000.000-00'
                        placeholder='digite o cpf...'
                        handleChange={onHandleChange}
                    />
                    <InputError message={errors.cpf} className="mt-2" />
                </div>

                <div className='w-full'>

                    <input
                        type='file'
                        onChange={e => setData('image', e.target.files[0])}
                        className='
                            file:bg-indigo-600
                            file:border-0
                            file:p-1
                            file:rounded
                            file:text-white
                            file:cursor-pointer
                            hover:file:bg-indigo-400
                        '
                        />

                    <InputError message={errors.image} className="mt-2" />
                </div>
            </div>

            <PrimaryButton className='w-32' processing={processing}>Editar membro</PrimaryButton>
        </form>
    );

}
