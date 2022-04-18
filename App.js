import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import UserContextProvinder from './src/contexts/userContext';

import MainStack from './src/stacks/MainStack';



export default () => {
  return (
    <UserContextProvinder>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </UserContextProvinder>
  );
}