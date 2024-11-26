import React from 'react';
import Config from 'react-native-config';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigatorContainer from './StackNavigator';

axios.defaults.baseURL = Config.BASE_URL;

const NavigationContainerScreen = () => {
  return (
    <NavigationContainer>
      <StackNavigatorContainer />
    </NavigationContainer>
  );
};

export default NavigationContainerScreen;
