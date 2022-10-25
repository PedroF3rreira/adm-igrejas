import React, { useState, useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';
import List from '@/Components/List';
import PositionItem from '@/Components/PositionItem';
import FormPosition from '@/Components/FormPosition';
import { IoMdList, IoIosPersonAdd } from 'react-icons/io';
import Dropdown from '@/Components/Dropdown';
import Message from '@/Components/Message';
import Pagination from '@/Components/Pagination';

export default function Index(props) {

    const [ showForm, setShowForm ] = useState(false);
    const [ showMessage, setShowMessage ] = useState(false);

    // função para fazer menssagem temporaria
    const timeMessageShow = (data) => {
        setShowMessage(data)

        setTimeout( () => {
            setShowMessage(false)
        }, 6000)
    }

    return(
        <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        >
            {/*define titulo da aba*/}
            <Head title='Membros' />

            {/* menssagem exibida apos eventos no sistema */}
            {showMessage &&
                <Message text={props.status}/>
            }


            <div className='flex flex-col lg:flex-row px-5 mt-5 text-slate-500 overflow-hidden'>
                <div
                    className='bg-white rounded lg:flex-1 lg:mx-4 mb-2 p-2 shadow-md'
                    data-aos='fade-up'
                    data-aos-duration='1000'
                >

                    <div className="flex mb-2 items-center">

                        {/* Controles de lista */}
                        <div className="w-full flex space-x-5 border-b">

                            {/*pesquisa*/}
                            <div className='w-full'>

                            </div>

                        {/*Botão que mostra formulário para novo registro*/}
                            <div  onClick={() => !showForm?setShowForm(true):setShowForm(false)}>
                                <IoIosPersonAdd className={`
                                    cursor-pointer
                                    text-2xl
                                    text-indigo-400
                                    hover:text-indigo-600
                                    ${showForm && 'text-indigo-900'}`
                                }/>
                            </div>

                            {/* dropdown do filtro */}
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
                            {/* fim dropdown do filtro */}

                        </div>
                    </div>
                {/*Formulário de novo membro*/}
                    {showForm &&
                        <FormPosition title="Cadastro de " formSuccess={timeMessageShow}/>
                    }

                    <List title={'Cargos'}>
                        {props.positions &&
                            props.positions.map((position) =>(
                                <PositionItem key={position.id} position={position} status={props.status}/>
                                ))
                        }
                    </List>
                </div>
                
                {/* lateral */}
                <div
                    className='bg-white rounded lg:w-64 p-2 shadow-md'
                    data-aos='fade-left'
                    data-aos-duration='1000'
                >
                    <h1>Conteúdo lateral</h1>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
