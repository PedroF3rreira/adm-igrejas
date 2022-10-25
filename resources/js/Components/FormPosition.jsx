import React, { useEffect } from 'react';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import { useForm } from '@inertiajs/inertia-react';
import PrimaryButton from '@/Components/PrimaryButton';

export default function FormPosition ({ title, formSuccess}) {

    const { data, setData, post, processing, reset, errors, wasSuccessful, progress  } = useForm({
        name: null,
        description: null
    });

    useEffect(() => {
        formSuccess(wasSuccessful)
    }, [wasSuccessful])

    const submit = (e) =>{
        e.preventDefault();
        post(route('position.store'), { onSuccess: () => reset()});
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

            <h3 className='ml-5 mb-3 p-2 bg-indigo-500 text-white rounded-l-lg'>{`${title} Cargos`}</h3>

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

                    <textarea cols='50' rows='10' placeholder='descrição do cargo' 
                        className='flex w-full placeholder:text-slate-400 placeholder:italic px-3 text-slate-500 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mt-5' 
                        value={data.description} 
                        onChange={(e) => setData('description', e.tareget.value)}>
                        
                    </textarea>
                    <InputError message={errors.description} className="mt-2" />
                </div>

                <div className='w-full'>
                    
                </div>

            </div>
                
            <PrimaryButton className='w-32' processing={processing}>Cadastrar</PrimaryButton>
        </form>
    );

}
