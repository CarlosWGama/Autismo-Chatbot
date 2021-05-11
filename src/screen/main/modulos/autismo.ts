import { useChatBot } from "../../../chatbot/context";
import { CBAction, Face } from "../../../chatbot/interfaces";

export function ola(doAction: CBAction) {
    doAction([
        {message: 'Olá!', delay: 2000, you: false},
        {message: 'Oi!', you: true},
    ], [
        {title: 'Qual seu nome?', onPress:digiteSeuNome},
        {title: 'Opção 2', onPress:clicou}
    ])
}

export function digiteSeuNome(doAction: CBAction) {
    doAction([
        {message: 'Qual o seu nome?', delay: 3000, you: false, avatar: Face.FELIZ}
    ], null, {onPress:olaPessoa})
}

export function olaPessoa(doAction: CBAction, nome: string) {
    doAction([
        {message: 'Olá ' + nome, delay: 2000, you: false},
    ], [
        {onPress:ola, title: 'Repetir'}
    ]);


}

export function clicou(doAction: CBAction) {
    doAction([
        {message: 'Cliquei!', you: true},
        {message: 'Ainda bem!!', delay: 3000, you: false}
    ], [
        {title:'Repetir', onPress: ola}
    ])
}