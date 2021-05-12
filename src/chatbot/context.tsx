import React, { createContext } from 'react';
import { CBAction, CBButton, CBInput, CBMessage, Face } from './interfaces';

export const ChatBotContext = createContext({} as {
    CBMessages: CBMessage[], 
    CBButtons: CBButton[],
    CBInput: CBInput|null, 
    CBAvatar: any,
    doAction: CBAction,
    CBChange: boolean
});

export const ChatBotContextProvider = (props: any) => {

    const [ CBChange, setCBChange] = React.useState<boolean>(false);
    const [ CBMessages, setCBMessages] = React.useState<CBMessage[]>([]);
    const [ CBAvatar, setCBAvatar] = React.useState<any>(Face.NEUTRO);
    const [ CBButtons, setCBButtons] = React.useState<CBButton[]>([]);
    const [ CBInput, setCBInput] = React.useState<CBInput|null>(null);

    //Adiciona a fala
    const doAction = async (messages: CBMessage[], buttons:CBButton[]|null = [], input?: CBInput|null) => {
        
        const newMessages = CBMessages;
        setCBButtons([]);
        setCBInput(null);

        let change = CBChange;    
        //Executa as mensagens
        for (let i = 0; i < messages.length; i++) {

            if (messages[i].hasOwnProperty('avatar'))
                 setCBAvatar(messages[i].avatar)

            //@ts-ignore
            if (messages[i].hasOwnProperty('delay') && messages[i].delay > 0) {
                newMessages.push({message: 'Digitando...', you: messages[i].you});
                
                setCBMessages(newMessages);
            
                await new Promise(resolve => setInterval(() => resolve(''), messages[i].delay))
                newMessages.pop()
            }
            newMessages.push(messages[i])
            
            setCBMessages(newMessages); 
            change = !change;     
            setCBChange(change)
        }
        
        //Executa os botões
        setCBButtons(buttons ? buttons : []);
        
        //Input
        setCBInput(input ? input : null);
    }

    return (
        <ChatBotContext.Provider value={{CBMessages, CBButtons, CBInput, doAction, CBAvatar, CBChange}}>
            {props.children}
        </ChatBotContext.Provider>
    )
}


export const useChatBot = () => React.useContext(ChatBotContext);