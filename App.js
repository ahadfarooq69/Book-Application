import React from 'react';
import {StatusBar} from 'react-native';
import Route from './src/navigation/Route';
import {NavigationContainer} from '@react-navigation/native';


const App = () => {
  
  return (
      <NavigationContainer>
        <StatusBar backgroundColor="#20b2aa" hidden={false} />
        <Route />
      </NavigationContainer>

    );
};

export default App;