import React, { createContext } from 'react';
import { CBAction, CBButton, CBInput, CBMessage, Face, getAvatar } from './interfaces';

export const ChatBotContext = createContext({} as {
    CBMessages: CBMessage[], 
    CBButtons: CBButton[],
    CBInput: CBInput|null, 
    CBAvatar: any,
    doAction: CBAction
});

export const ChatBotContextProvider = (props: any) => {

    const [ CBMessages, setCBMessages] = React.useState<CBMessage[]>([]);
    const [ CBAvatar, setCBAvatar] = React.useState<any>(Face.NEUTRO);
    const [ CBButtons, setCBButtons] = React.useState<CBButton[]>([]);
    const [ CBInput, setCBInput] = React.useState<CBInput|null>(null);

    //Adiciona a fala
    const doAction = async (messages: CBMessage[], buttons:CBButton[] = [], input?: CBInput) => {
        
        const newMessages = [...CBMessages];
        setCBButtons([]);
        setCBInput(null);

        //Executa as mensagens
        for (let i = 0; i < messages.length; i++) {
            if (messages[i].avatar)
                 setCBAvatar(messages[i].avatar)

            if (messages[i].delay && messages[i].delay > 0) {
                newMessages.push({message: 'Digitando...', you: messages[i].you});
                setCBMessages(newMessages);
            
                await new Promise(resolve => setInterval(() => resolve(''), messages[i].delay))
                newMessages.pop()
            }
            newMessages.push(messages[i])

            setCBMessages(newMessages);            
        }
        
        //Executa os botões
        setCBButtons(buttons ? buttons : []);
        
        //Input
        setCBInput(input ? input : null);
    }

    return (
        <ChatBotContext.Provider value={{CBMessages, CBButtons, CBInput, doAction, CBAvatar}}>
            {props.children}
        </ChatBotContext.Provider>
    )
}


export const useChatBot = () => React.useContext(ChatBotContext);