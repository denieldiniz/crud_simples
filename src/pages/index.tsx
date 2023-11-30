import { dados } from '@/backend/dados'
import Titulo from '@/components/Titulo'
import Listagem from '@/components/Listagem'
import Formulario from '@/components/Formulario'
import Pessoa from '@/core/Pessoa'
import { createContext, useState } from 'react'

export const AppContext = createContext<any>(null) //cria o contexto
export default function Home() {
    const [visivel, setVisivel] = useState<'listagem' | 'formulario'>('listagem') //cria o status para definir a tela
    const [pessoaEscolhida, setPessoaEscolhida] = useState<Pessoa>() //cria o status para definir a pessoa selecionada

    return (
        <div className={'flex items-center flex-col h-screen bg-gradient-to-r from-blue-900 to-gray-900 text-white'}>
            <AppContext.Provider value={{ visivel, setVisivel, pessoaEscolhida, setPessoaEscolhida }}>
                {/* provê acesso de forma global aos status e respectivos métodos aos componentes declarados dentro do contexto */}

                <Titulo>Cadastro de Pessoas</Titulo>

                {visivel === 'listagem' ? (
                    <div>
                        <Listagem />
                    </div>
                ) : (
                    <div>
                        <Formulario
                            pessoa={dados[0]}
                            pessoaMudou={() => ''}
                        />
                    </div>
                )}
            </AppContext.Provider>
        </div>
    )
}
