import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack'
import Register from './screens/Register';
import Home from './screens/Home'
import AddChat from './screens/AddChat'
import Chat from './screens/Chat'
const Stack= createStackNavigator();

const globalScreenOptions ={
  
  headerStyle : {backgroundColor : "#2C6BED"},
  headerTitleStyle : {color: "white" , marginLeft: "35%"},
  headerTinColor : "white"
}
export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator screenOptions={globalScreenOptions}
    //  initialRouteName="Home"
     >
        <Stack.Screen name='Login' component={Login} options={{}} />

        <Stack.Screen name='Register' component={Register} options={{
       
        }} />
        <Stack.Screen name='Home' component={Home} options={{

        }} />
        <Stack.Screen name='AddChat' component={AddChat} options={{

        }} />

        <Stack.Screen name='Chat' component={Chat} options={{

        }} />

     </Stack.Navigator>
      
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
