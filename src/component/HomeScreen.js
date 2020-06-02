// import {createStackNavigator} from 'react-navigation';
// import UserList from './UserList';
// import UserDetails from './UserDetails';
// const HomeScreen = createStackNavigator(
//   {
//     USER_LIST: {screen: UserList},
//     USER_DETAILS: {screen: UserDetails},
//   },
//   {
//     initialRouteName: 'USER_LIST',
//     defaultNavigationOptions: {
//       headerMode: 'none',
//       header: null,
//     },
//   },
// );;

// export default HomeScreen;

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
        options={{title: 'User List'}}
      />
      <Stack.Screen
        name="UserDetails"
        component={UserDetails}
        options={{title: 'User Details'}}
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
