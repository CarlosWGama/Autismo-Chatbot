import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Image } from 'react-native';
import { Asset } from 'expo-asset';
import { ChatBotContextProvider } from './src/chatbot/context';
import { MainScreen } from './src/screen/main';


function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export default function App() {

  useEffect(() => {
    const imageAssets = cacheImages([
      require('./src/chatbot/imgs/espantada.jpg'),
      require('./src/chatbot/imgs/feliz.jpg'),
      require('./src/chatbot/imgs/neutro.jpg'),
      require('./src/chatbot/imgs/raiva.jpg'),
      require('./src/chatbot/imgs/triste.jpg'),
    ]);

    Promise.all([...imageAssets]);
  }, [])
  
  return (
    <ChatBotContextProvider>
      <MainScreen />
    </ChatBotContextProvider>
  );
}
