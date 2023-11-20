import { dados } from '@/backend/dados'
import Pessoa from '@/core/Pessoa'
import Titulo from '@/components/Titulo'
import Listagem from '@/components/Listagem'
import Formulario from '@/components/Formulario'
import { createContext, useState } from 'react'

export const VisibilidadeContext = createContext<any>({})
// eslint-disable-next-line react-hooks/rules-of-hooks

export default function Home() {
    const [visivel, setVisivel] = useState<'listagem' | 'formulario'>('listagem')

    return (
        <VisibilidadeContext.Provider value={{ visivel, setVisivel }}>
            <div
                className={'flex items-center flex-col h-screen bg-gradient-to-r from-blue-900 to-gray-900 text-white'}>
                <Titulo>Cadastro de Pessoas</Titulo>

                {visivel === 'listagem' ? (
                    <div>
                        <Listagem />
                    </div>
                ) : (
                    <Formulario
                        pessoa={dados[0]}
                        pessoaMudou={() => ''}
                        // cancelado={setVisivel('listagem')}
                    />
                )}
            </div>
        </VisibilidadeContext.Provider>
    )
}
