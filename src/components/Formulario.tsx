import { useContext } from 'react'
import Botao from './Botao'
import { AppContext } from '@/pages'

export default function Formulario() {
    let { setVisivel, pessoaEscolhida, salvarPessoa } = useContext(AppContext)

    return (
        <div>
            {pessoaEscolhida.id ? (
                <div className='flex flex-col'>
                    <label className='mb-1'>Matrícula</label>
                    <input
                        type='number'
                        value={pessoaEscolhida.id}
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
                    value={pessoaEscolhida.nome}
                    className=' text-black border border-blue-500 rounded-lg focus:outline-none bg-gray-100 mb-5 px-4 py-2'
                    // onChange={(e) => (pessoaEscolhida.nome = e.target.value)}
                />
            </div>

            <div className='flex flex-col'>
                <label className='mb-1'>Idade</label>
                <input
                    type='text'
                    value={pessoaEscolhida.idade}
                    className=' text-black border border-blue-500 rounded-lg focus:outline-none bg-gray-100 mb-5 px-4 py-2'
                    onChange={(e) => (pessoaEscolhida.idade = e.target.value)}
                    // onChange={(e) => (pessoaEscolhida.idade = e.target.value)}
                />
            </div>

            <div className='flex flex-col'>
                <label className='mb-1'>Profissão</label>
                <input
                    type='text'
                    value={pessoaEscolhida.profissao}
                    className=' text-black border border-blue-500 rounded-lg focus:outline-none bg-gray-100 mb-5 px-4 py-2'
                    // onChange={(e) => (pessoaEscolhida.profissao = e.target.value)}
                />
            </div>

            <div className='flex justify-end mt-7'>
                <Botao
                    cor='blue'
                    onClick={() => salvarPessoa(pessoaEscolhida)}
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
