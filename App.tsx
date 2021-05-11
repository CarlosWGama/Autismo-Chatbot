import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ChatBotContextProvider } from './src/chatbot/context';
import { MainScreen } from './src/screen/main';

export default function App() {
  return (
    <ChatBotContextProvider>
      <MainScreen />
    </ChatBotContextProvider>
  );
}
