import Titulo from '@/components/Titulo'
import Listagem from '@/components/Listagem'
import Formulario from '@/components/Formulario'
import Pessoa from '@/core/Pessoa'
import { createContext, useState } from 'react'
import { dados } from '@/backend/dados'
// import { dados as pessoas } from '@/backend/dados'

export const AppContext = createContext<any>({})

export default function Home() {
    const [visivel, setVisivel] = useState<'listagem' | 'formulario'>('listagem')
    const [pessoas, setPessoas] = useState<Array>(dados)
    const [pessoaEscolhida, setPessoaEscolhida] = useState<Pessoa | { id: undefined }>()

    function criarPessoa(pessoa: Pessoa) {
        setPessoaEscolhida({ id: undefined })
        setVisivel('formulario')
    }

    function criarNovaPessoa(pessoa: Pessoa) {
        pessoa.id = pessoas.length + 1
        pessoaEscolhida.id = pessoa.id
        pessoaEscolhida.nome = pessoa.nome
        pessoaEscolhida.idade = pessoa.idade
        pessoaEscolhida.profissao = pessoa.profissao
        pessoas.push(pessoa)
        setVisivel('listagem')
    }

    function editarPessoa(pessoa: Pessoa) {
        setPessoaEscolhida(pessoa)
        setVisivel('formulario')
    }

    function salvarPessoa(pessoa: Pessoa) {
        pessoaEscolhida.id = pessoa.id
        pessoaEscolhida.nome = pessoa.nome
        pessoaEscolhida.idade = pessoa.idade
        pessoaEscolhida.profissao = pessoa.profissao
        pessoas[pessoaEscolhida.id - 1] = pessoa

        setVisivel('listagem')
    }

    function excluirPessoa(pessoa: Pessoa) {
        console.log(pessoas)

        pessoas.splice(pessoa.id - 1, 1)

        console.log(pessoa.nome + ' removido(a)')
        console.log(pessoas)
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
                    criarNovaPessoa,
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
