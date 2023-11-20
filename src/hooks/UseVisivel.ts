import { useState } from 'react'

export default function UseVisivel() {
    const [visivel, setVisivel] = useState<'listagem' | 'formulario'>('listagem')

    const exibirListagem = () => setVisivel('listagem')
    const exibirFormulario = () => setVisivel('formulario')

    return {
        formularioVisivel: visivel === 'formulario',
        listagemVisivel: visivel === 'listagem',
        exibirFormulario,
        exibirListagem
    }
}
