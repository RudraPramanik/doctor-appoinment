import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HamburgerMenu from './src/component/home/Humburger';
import SearchInput from './src/component/home/SearchInput';
import React, { useState } from 'react';
import Select, { Option } from './src/component/home/Dropdown';
import DocList from './src/component/DocList';
import HorizontalCardList from './src/component/home/HorizontalCardList';
import AppScreen from './src/screen/AppScreen';
import DetailScreen from './src/screen/DetailScreen';
import store from './src/store/store';
import { Provider } from 'react-redux';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={AppScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            options={{
              headerStyle: {
                backgroundColor: 'black', // Set the background color to black
              },
              headerTintColor: 'white', // Set the text color to white
            }}
          />
          {/* <Stack.Screen
          name="booking"
          component={DetailScreen}
          options={{ headerShown: false }}
        /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});
