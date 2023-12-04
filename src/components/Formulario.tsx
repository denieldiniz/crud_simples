import { useContext } from 'react'
import Botao from './Botao'
import Entrada from './Entrada'
import { AppContext } from '@/pages'

export default function Formulario() {
    let { setVisivel, pessoaEscolhida } = useContext(AppContext)

    return (
        <div>
            {pessoaEscolhida ? (
                <Entrada
                    somenteLeitura
                    legenda='Código'
                    valor={pessoaEscolhida.id}
                    className='mb-5'
                />
            ) : (
                false
            )}

            <Entrada
                legenda='Nome'
                valor={pessoaEscolhida.nome}
                valorMudou={pessoaEscolhida.setNome}
                className='mb-5'
            />

            <Entrada
                legenda='Idade'
                tipo='number'
                valor={pessoaEscolhida.idade}
                valorMudou={pessoaEscolhida.setIdade}
                className='mb-5'
            />

            <Entrada
                legenda='Profissão'
                valor={pessoaEscolhida.profissao}
                valorMudou={pessoaEscolhida.setProfissao}
                className='mb-5'
            />

            <div className='flex justify-end mt-7'>
                <Botao
                    cor='green'
                    // onClick={() => props.pessoaMudou?.(new Pessoa(id, nome, idade, profissao))}
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
