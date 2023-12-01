/* eslint-disable react-hooks/rules-of-hooks */
import { dados } from '@/backend/dados'
import Botao from './Botao'
import { IconeEdicao, IconeLixo } from './Icones'
import { useContext } from 'react'
import { criarPessoa, editarPessoa, excluirPessoa } from '@/core/ManipularPessoas'
import Pessoa from '@/core/Pessoa'

function renderizarCabecalho() {
    return (
        <tr className='bg-sky-900/100 text-white'>
            <th className='text-center p-4'>Matrícula</th>
            <th className='text-center p-4'>Nome</th>
            <th className='text-center p-4'>Idade</th>
            <th className='text-center p-4'>Profissão</th>
            <th className='text-center p-4'>Ações</th>
        </tr>
    )
}

function renderizarLinhas() {
    return dados.map((pessoa) => {
        return (
            <tr
                key={pessoa.id}
                className={`${pessoa.id % 2 === 0 ? 'bg-sky-300/100' : 'bg-sky-200'}`}>
                <td className='text-center p-4'>{pessoa.id}</td>
                <td className='text-center p-4'>{pessoa.nome}</td>
                <td className='text-center p-4'>{pessoa.idade}</td>
                <td className='text-center p-4'>{pessoa.profissao}</td>
                <td className='flex justify-center p-4'>
                    <Botao
                        cor='gray'
                        className='  text-green-400 flex justify-center items-center rounded-full p-2 m-1 hover:bg-purple-50'
                        onClick={() => editarPessoa(pessoa)}>
                        {IconeEdicao}
                    </Botao>

                    <Botao
                        cor='gray'
                        className=' text-red-400 flex justify-center items-center rounded-full p-2 m-1 hover:bg-purple-50'
                        onClick={() => excluirPessoa(pessoa)}>
                        {IconeLixo}
                    </Botao>
                </td>
            </tr>
        )
    })
}

export default function Listagem() {
    return (
        <>
            <div className='flex justify-end w-full mt-7'>
                <Botao
                    cor='green'
                    className='flex mr-2 justify-center items-center text-white-500 rounded-full p-2 m-1  hover:bg-purple-50'
                    onClick={() => criarPessoa()}>
                    Novo Usuário
                </Botao>
            </div>
            <table className='rounded-full p-2 m-1  text-black'>
                <thead>{renderizarCabecalho()}</thead>
                <tbody>{renderizarLinhas()}</tbody>
            </table>
        </>
    )
}
