export default class Pessoa {
    #id: any
    #nome: string
    #idade: number
    #profissao: string

    constructor(nome: string, idade: number, profissao: string, id: any) {
        this.#nome = nome
        this.#idade = idade
        this.#profissao = profissao
        this.#id = id
    }

    // static vazio() {
    //     return new Pessoa('', 0, '')
    // }

    get nome() {
        return this.#nome
    }

    get idade() {
        return this.#idade
    }

    get profissao() {
        return this.#profissao
    }

    get id() {
        return this.#id
    }

    set nome(nome: string) {
        this.#nome = nome
    }

    set idade(idade: number) {
        this.#idade = idade
    }

    set profissao(profissao: string) {
        this.#profissao = profissao
    }
}
