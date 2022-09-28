import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';
import { Link } from '@inertiajs/inertia-react';

export default function Index(props) {
    return(
        <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        >
            <Head title='Membros' />

            <div className='flex px-5 mt-5 text-slate-600'>
                <div className='bg-white rounded flex-1 mx-4 p-2 shadow-md'>
                    <h1>Conteudo principal</h1>
                </div>
                <div className='bg-white rounded w-64 p-2 shadow-md'>
                    <h1>Conteúdo lateral</h1>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
