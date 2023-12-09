import Titulo from '@/components/Titulo'
import Listagem from '@/components/Listagem'
import Formulario from '@/components/Formulario'
import Pessoa from '@/core/Pessoa'
import { createContext, useState } from 'react'
import { dados as pessoas } from '@/backend/dados'

export const AppContext = createContext<any>({})

export default function Home() {
    const [visivel, setVisivel] = useState<'listagem' | 'formulario'>('listagem')
    const [pessoaEscolhida, setPessoaEscolhida] = useState<Pessoa | { id: undefined }>()

    function criarPessoa(pessoa: Pessoa) {
        setPessoaEscolhida({ id: undefined })
        setVisivel('formulario')
    }

    function editarPessoa(pessoa: Pessoa) {
        setPessoaEscolhida(pessoa)
        setVisivel('formulario')
    }

    function salvarPessoa(pessoa: Pessoa) {
        pessoaEscolhida?.id === undefined ? console.log('adicionar nova pessoa') : console.log(`salvar ${pessoa.nome}`)
        // console.log(pessoaEscolhida.idade)
    }

    function excluirPessoa(pessoa: Pessoa) {
        setPessoaEscolhida(pessoa)
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
                    excluirPessoa,
                    pessoas
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
