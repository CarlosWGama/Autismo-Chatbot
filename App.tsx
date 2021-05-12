import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { Asset } from 'expo-asset';
import { ChatBotContextProvider } from './src/chatbot/context';
import { MainScreen } from './src/screen/main';
import * as Updates from 'expo-updates';
import { LoadingScreen } from './src/screen/loading';

export default function App() {

  //Atualiza
  const [estaAtualizacao, setEstaAtualizacao] = useState(false);
  useEffect(() => {
    setEstaAtualizacao(true);
    //Busca por atualizações
    const update = async () => {
      try {
        const update = await Updates.checkForUpdateAsync();
        if (update.isAvailable) {
          await Updates.fetchUpdateAsync();
          await Updates.reloadAsync();
        }
      } catch(e) {
        console.log(e)
      }
      setEstaAtualizacao(false);
    }
    update();
  }, [])
  
  //Fonte
  if (estaAtualizacao) return <LoadingScreen />;
    
  return (
    <ChatBotContextProvider>
      <MainScreen />
    </ChatBotContextProvider>
  );
}
