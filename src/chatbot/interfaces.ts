
export enum Face {
    NEUTRO = require('./imgs/neutro.jpg'),
    FELIZ = require('./imgs/feliz.jpg'),
    RAIVA = require('./imgs/raiva.jpg'),
    TRISTE = require('./imgs/triste.jpg'),
    ESPANTO = require('./imgs/espantada.jpg'),
    NAO_ALTERA = -1,
}

export interface CBAction {
    (messages: CBMessage[], buttons?: CBButton[]|null, input?: CBInput|null): Promise<void>;
} 

// Mensagem dita
export interface CBMessage {
    avatar?: Face,
    message: string,
    delay?: number,
    you?: boolean,
}

export interface CBInput {
    onPress: any
}

// Ação do botão
export interface CBButton {
    title: string,
    onPress: any
}