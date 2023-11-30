/* eslint-disable react-hooks/rules-of-hooks */
import Pessoa from '@/core/Pessoa'
import { useContext } from 'react'
import { AppContext } from '@/pages/index'

export function criarPessoa() {
    console.log('exibir formulário limpo')
    const contexto = useContext(AppContext)
}

export function editarPessoa(pessoa: Pessoa) {
    console.log(`editar ${pessoa.nome}`)
}

export function salvarPessoa(pessoa: Pessoa) {
    console.log('salvarPessoa')
}

export function excluirPessoa(pessoa: Pessoa) {
    console.log(`excluir ${pessoa.nome}`)
}
