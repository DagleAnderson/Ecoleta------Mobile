import React from 'react';
import {AppLoading} from 'expo';
import {StatusBar, View} from 'react-native';
import {Roboto_400Regular, Roboto_500Medium} from '@expo-google-fonts/roboto';
import { Ubuntu_700Bold,useFonts} from '@expo-google-fonts/ubuntu';

import Routes from './src/routes';
//import Home from './src/pages/Home';

export default function App() {

  const [fontLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold
  })

  if(!fontLoaded){
    return <AppLoading/>
  };

  // <>Fragment é o termo usando para criação de <View/> sem necessidade de exposita-la </>
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/>
      <Routes/>
    </> 
  );
}

