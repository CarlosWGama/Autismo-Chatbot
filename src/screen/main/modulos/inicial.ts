import { CBAction, Face } from "../../../chatbot/interfaces";

export function bemVindo(doAction: CBAction) {
    doAction([
        {message: 'Bem vindo! Eu sou Ale e estou aqui para te ajudar um pouco sobre assuntos de autismo!', delay: 3000, avatar: Face.FELIZ},
        {message: 'O que você gostaria de saber?', delay: 2000, avatar: Face.NEUTRO},
    ], [
        {title: 'Autismo', onPress:digiteSeuNome},
        {title: 'Me fale sobre você', onPress:clicou}
    ])
}

export function digiteSeuNome(doAction: CBAction) {
    doAction([
        {message: 'Qual o seu nome?', delay: 3000, you: false, avatar: Face.FELIZ}
    ], null, {onPress:olaPessoa})
}

export function olaPessoa(doAction: CBAction, nome: string) {
    doAction([
        {message: nome, you: true},
        {message: 'Olá ' + nome, delay: 2000, you: false},
    ], [
        {onPress:bemVindo, title: 'Repetir'}
    ]);


}

export function clicou(doAction: CBAction) {
    doAction([
        {message: 'Cliquei!', you: true},
        {message: 'Ainda bem!!', delay: 3000, you: false}
    ], [
        {title:'Repetir', onPress: bemVindo}
    ])
}