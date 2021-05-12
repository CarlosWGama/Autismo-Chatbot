import AsyncStorage from "@react-native-async-storage/async-storage";
import { CBAction, Face } from "../../../chatbot/interfaces";
import * as autismo from './autismo';


export async function inicial(doAction: CBAction) {

    AsyncStorage.getItem('nome').then((nome) => {

        if (!nome)
            bemVindo(doAction)
        else
            bemVindoDeNovo(doAction, nome)
    })
}

export async function bemVindoDeNovo(doAction: CBAction, nome: string) {
    await doAction([
        {message: `Olá, ${nome}! Fico feliz em te ver aqui de novo!`}
    ]);
    principal(doAction);
}

export function bemVindo(doAction: CBAction) {
    doAction([
        {message: 'Bem vindo! Vejo que esse é seu primeiro momento aqui!', delay: 2000, avatar: Face.FELIZ},
        {message: 'Como posso te chamar?!', delay: 1000, avatar: Face.NEUTRO},
    ], null, {onPress: digiteSeuNome})
}

export async function digiteSeuNome(doAction: CBAction, nome: string) {
    AsyncStorage.setItem('nome', nome);
    await doAction([
            {message: nome, you: true},
            {message: `Olá! ${nome}`, delay: 1000, avatar: Face.FELIZ}
        ]),
    principal(doAction)    
}

export async function principal(doAction: CBAction) {
    const nome = await AsyncStorage.getItem('nome');

    await doAction([
        { message: 'O que você gostaria de saber?', delay: 1000, avatar: Face.NEUTRO}
    ], [
        { title: 'Sobre autismo', onPress: autismo.inicial},
        { title: 'Fale-me sobre você', onPress: creditos},
        { title: `Não sou ${nome}`, onPress: trocarNome}
    ])
}

export async function trocarNome(doAction: CBAction) {
    await doAction([
        {message: 'Ah não!', delay: 1000, avatar: Face.ESPANTO},
        {message: 'Perdão pelo meu engano!', delay: 1500, avatar: Face.TRISTE},
        {message: 'Como posso te chamar, então?', delay: 1500, avatar: Face.NEUTRO},
    ], null, {onPress: digiteSeuNome})
}

export async function creditos(doAction: CBAction) {
    await doAction([
        { message: 'Ah, fico feliz que queira saber mais!', delay: 1500, avatar:Face.FELIZ},
        { message: 'Eu sou um chatbot criado como fruto do doutorado de Alessandra Pontes!', delay: 2000},
        { message: 'E desenvolvido no Centro de Inovação Tecnológica do Centro Universitário CESMAC por Carlos Alberto! ', delay: 2500},
    ])
    principal(doAction)

}
