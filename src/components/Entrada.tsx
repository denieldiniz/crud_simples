interface PropriedadesDaEntrada {
    tipo?: 'text' | 'number'
    legenda: string
    valor: any
    somenteLeitura?: boolean
    className?: string
    valorMudou?: (valor: any) => void
}

export default function Entrada(props: PropriedadesDaEntrada) {
    return (
        <div>
            <div className={`flex flex-col ${props.className}`}>
                <label className='mb-1'>{props.legenda}</label>
                <input
                    type={props.tipo ?? 'text'}
                    value={props.valor}
                    readOnly={props.somenteLeitura}
                    onChange={(e) => props.valorMudou?.(e.target.value)}
                    className={` text-black border border-blue-500 rounded-lg focus:outline-none bg-gray-100 px-4 py-2 ${
                        props.somenteLeitura ? 'bg-slate-400 text-slate-700' : ''
                    }`}
                />
            </div>
        </div>
    )
}
