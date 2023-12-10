import { useContext, useState } from 'react'
import Botao from './Botao'
import { AppContext } from '@/pages'

export default function Formulario() {
    let { setVisivel, pessoaEscolhida, salvarPessoa, criarNovaPessoa, pessoas } = useContext(AppContext)
    const [nome, setNome] = useState(pessoaEscolhida.nome)
    const [idade, setIdade] = useState(pessoaEscolhida.idade)
    const [profissao, setProfissao] = useState(pessoaEscolhida.profissao)
    const [id, setId] = useState(pessoaEscolhida.id)

    return (
        <div>
            {pessoaEscolhida.id ? (
                <div className='flex flex-col'>
                    <label className='mb-1'>Matrícula</label>
                    <input
                        type='text'
                        defaultValue={pessoaEscolhida.id}
                        className='text-slate-700 border border-blue-500 rounded-lg focus:outline-none bg-slate-400 mb-5 px-4 py-2 '
                    />
                </div>
            ) : (
                false
            )}

            <div className='flex flex-col'>
                <label className='mb-1'>Nome</label>
                <input
                    type='text'
                    defaultValue={nome}
                    className=' text-black border border-blue-500 rounded-lg focus:outline-none bg-gray-100 mb-5 px-4 py-2'
                    onChange={(e) => setNome(e.target.value)}
                />
            </div>

            <div className='flex flex-col'>
                <label className='mb-1'>Idade</label>
                <input
                    type='text'
                    defaultValue={idade}
                    className=' text-black border border-blue-500 rounded-lg focus:outline-none bg-gray-100 mb-5 px-4 py-2'
                    onChange={(e) => setIdade(e.target.value)}
                />
            </div>

            <div className='flex flex-col'>
                <label className='mb-1'>Profissão</label>
                <input
                    type='text'
                    defaultValue={profissao}
                    className=' text-black border border-blue-500 rounded-lg focus:outline-none bg-gray-100 mb-5 px-4 py-2'
                    onChange={(e) => setProfissao(e.target.value)}
                />
            </div>

            <div className='flex justify-end mt-7'>
                <Botao
                    cor='blue'
                    onClick={
                        pessoaEscolhida.id
                            ? () => salvarPessoa({ nome, idade, profissao, id })
                            : () => criarNovaPessoa({ nome, idade, profissao, id })
                    }
                    className='mb-5 mr-2'>
                    {pessoaEscolhida.id ? 'Salvar' : 'Adicionar'}
                </Botao>

                <Botao
                    cor='gray'
                    className='mb-5'
                    onClick={() => setVisivel('listagem')}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}
