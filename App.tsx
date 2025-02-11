import React from 'react';
import { StatusBar, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Home, ScoreCard } from '@src/screens';
import SplashScreen from '@src/screens/splash-screen';


const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />

      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ScoreCardScreen"
        component={ScoreCard}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
};

function App() {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer fallback={<Text>Loading...</Text>}>
        <StatusBar backgroundColor="#4c669f" barStyle="light-content" />
        <RootNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;