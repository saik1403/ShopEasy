import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { NavigationContainer, TabRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateAccount from './screens/CreateAccount';
import Login from './screens/Login';
import Home from'./screens/Home';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';
import TabRoutes from './navigation/TabRoutes';
import Cart from './screens/Cart';
import Products from './screens/Products';
export default function App({ navigation }) {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
      <Stack.Screen name="TabRoutes" component={TabRoutes} />
      {/* <Stack.Screen name="Products" component={Products} /> */}
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
