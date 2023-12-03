import { dados } from '@/backend/dados'
import Titulo from '@/components/Titulo'
import Listagem from '@/components/Listagem'
import Formulario from '@/components/Formulario'
import Pessoa from '@/core/Pessoa'
import { createContext, useContext, useState } from 'react'

export const AppContext = createContext<any>({})

export default function Home() {
    const [visivel, setVisivel] = useState<'listagem' | 'formulario'>('listagem')
    const [pessoaEscolhida, setPessoaEscolhida] = useState<Pessoa | {}>()

    function criarPessoa() {
        setPessoaEscolhida({})
        setVisivel('formulario')
    }

    function editarPessoa(pessoa: Pessoa) {
        setPessoaEscolhida(pessoa)
        setVisivel('formulario')
    }

    function salvarPessoa(pessoa: Pessoa) {
        console.log('salvarPessoa')
    }

    function excluirPessoa(pessoa: Pessoa) {
        console.log(`excluir ${pessoa.nome}`)
    }

    return (
        <div className={'flex items-center flex-col h-screen bg-gradient-to-r from-blue-900 to-gray-900 text-white'}>
            <AppContext.Provider
                value={{
                    visivel,
                    setVisivel,
                    pessoaEscolhida,
                    setPessoaEscolhida,
                    criarPessoa,
                    editarPessoa,
                    salvarPessoa,
                    excluirPessoa
                }}>
                <Titulo>Cadastro de Pessoas</Titulo>

                {visivel === 'listagem' ? (
                    <div>
                        <Listagem />
                    </div>
                ) : (
                    <div>
                        <Formulario />
                    </div>
                )}
            </AppContext.Provider>
        </div>
    )
}
