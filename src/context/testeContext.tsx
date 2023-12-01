// import { ReactNode, createContext, useContext } from 'react'

// const UiContext = createContext({})

// export const UiProvider = ({ children }: { children: ReactNode }) => {
//     const openModal = () => {
//         // ...
//     }
//     return (
//         <UiContext.Provider
//             value={{
//                 openModal
//             }}>
//             {children}
//         </UiContext.Provider>
//     )
// }

// export const useUi = () => useContext(UiContext)

// // o context vai envolver o elemento que você quer manipular. posse ser o elemento App como um todo ou apenas alguma tela/página específica, tipo

// export const Router = () => {
//     return (
//         <UiProvider>
//             <UserProfile />
//         </UiProvider>
//     )
// }

// // e aí você pode invocar o hook nos elementos contidos dentro desse context, tipo

// export const UserProfile = () => {
//     const { openModal } = useUi()
//     return <div></div>
// }
