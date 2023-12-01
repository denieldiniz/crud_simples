// import { createContext, useContext, ReactNode, useState } from 'react'

// interface VisibilidadeContextProps {
//     children: ReactNode
// }

// interface VisibilidadeContextType {
//     mostrarFormulario: boolean
//     toggleFormulario: () => void
// }

// // Neste arquivo,
// //criamos um contexto chamado "VisibilidadeContext",
// //que fornece o estado "mostrarFormulario"
// //e a função "toggleFormulario" para manipular a visibilidade do formulário.

// const VisibilidadeContext = createContext<VisibilidadeContextType | undefined>(undefined)

// export function VisibilidadeProvider({ children }: VisibilidadeContextProps) {
//     const [mostrarFormulario, setMostrarFormulario] = useState(false)

//     const toggleFormulario = () => {
//         setMostrarFormulario((prevState) => !prevState)
//     }

//     return (
//         <VisibilidadeContext.Provider value={{ mostrarFormulario, toggleFormulario }}>
//             {children}
//         </VisibilidadeContext.Provider>
//     )
// }

// export function useVisibilidade() {
//     const context = useContext(VisibilidadeContext)
//     if (!context) {
//         throw new Error('useVisibilidade deve ser usado dentro de VisibilidadeProvider')
//     }
//     return context
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////

// import { createContext } from 'react'

// export const VisibilidadeContext = createContext<any>(null)

// export function Visibilidade() {
//     // const [visivel, setVisivel] = useState<'listagem' | 'formulario'>('listagem')
//     // const [pessoaEscolhida, setPessoaEscolhida] = useState<Pessoa>()
//     // return <visibilidadeContext.
// }

// export const Message_data = createContext(null)
