export default class Pessoa {
    #id: any
    #nome: string
    #idade: number
    #profissao: string

    constructor(id: any, nome: string, idade: number, profissao: string) {
        this.#id = id
        this.#nome = nome
        this.#idade = idade
        this.#profissao = profissao
    }

    // static vazio() {
    //     return new Pessoa(0, '', 0, '')
    // }

    get id() {
        return this.#id
    }

    get nome() {
        return this.#nome
    }

    get idade() {
        return this.#idade
    }

    get profissao() {
        return this.#profissao
    }
}
