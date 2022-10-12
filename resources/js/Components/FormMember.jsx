import React, { useEffect } from 'react';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import { useForm } from '@inertiajs/inertia-react';
import PrimaryButton from '@/Components/PrimaryButton';

export default function FormMember ({ title, formSuccess, member=null}) {

    const { data, setData, post, processing, reset, errors, wasSuccessful, progress  } = useForm({
        name: null,
        cel1: null,
        cel2: null,
        email: null,
        cpf: null,
        image: null,
    });

    useEffect(() => {
        formSuccess(wasSuccessful)
    }, [wasSuccessful])

    const submit = (e) =>{
        e.preventDefault();
        post(route('members.store'), { onSuccess: () => reset()});
    }

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    return(
        <form
            onSubmit={submit}
            className='mx-auto flex flex-col space-y-2 w-3/4 border p-2 rounded mb-3'
            data-aos='fade-left'
            data-aos-duration='1000'
            >

            <h3 className='ml-5 mb-3 p-2 bg-indigo-500 text-white rounded-l-lg'>{`${title} Membros`}</h3>

            {/*form control*/}
            <div className='flex flex-col lg:space-x-2 lg:flex-row w-full'>
                <div className='w-full mb-2'>
                    <TextInput
                        name='name'
                        value={data.name}
                        placeholder='Nome completo...'
                        handleChange={onHandleChange}
                    />
                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className='w-full'>
                    <TextInput
                        name='email'
                        value={data.email}
                        placeholder='email@company.com...'
                        handleChange={onHandleChange}
                    />
                    <InputError message={errors.email} className="mt-2" />
                </div>

            </div>

            {/*form control*/}
            <div className='flex flex-col lg:space-x-2 lg:flex-row w-full'>
                <div className='w-full mb-2'>
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
            <div className='flex flex-col lg:space-x-2 lg:flex-row w-full'>
                <div className='w-full mb-2'>
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

            <PrimaryButton className='w-32' processing={processing}>Cadastrar</PrimaryButton>
        </form>
    );

}
