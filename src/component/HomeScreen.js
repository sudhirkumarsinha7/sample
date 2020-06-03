
import * as React from 'react';
import {Button, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import UserList from './UserList';
import UserDetails from './UserDetails';
const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UserList"
        component={UserList}
        options={{title: 'User List',headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}
      />
      <Stack.Screen
        name="UserDetails"
        component={UserDetails}
        options={{title: 'User Details',headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}
      />
    </Stack.Navigator>
  );
}

export default function HomeScreen() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
