import * as React from 'react';
import { View, Text } from 'react-native';
import Chatbot from '../../chatbot';
import { useChatBot } from '../../chatbot/context';
import { ola }  from './modulos/autismo';

export interface MainScreenProps {
}

export function MainScreen (props: MainScreenProps) {

    const { doAction } = useChatBot()

    React.useEffect(() => {
        ola(doAction);
    }, [])

    return (
      <Chatbot/>
    );
}
