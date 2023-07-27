import LoginScreen from './Screens/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegisterScreen from './Screens/RegisterScreen';
import MainScreen from './Screens/MainScreen';
import Leisure1 from './Screens/Leisure1';
import Leisure2 from './Screens/Leisure2';
import Leisure3 from './Screens/Leisure3';
import Leisure4 from './Screens/Leisure4';
import Profile from './Screens/Profile'
import { StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name = "Login"
        component={LoginScreen}
        options={{title:"Welcome to Otays Agency"}}
        />
        <Stack.Screen
        name = "Register"
        component={RegisterScreen}
        options = {{title : "Registration Form"}}
        />
        <Stack.Screen
        name = "Main"
        component = {MainScreen}
        options = {{title : "OTays Mobile"}}
        />
         <Stack.Screen
        name = "Leisure 1"
        component = {Leisure1}
        options = {{title : "Leisure 1"}}
        />
         <Stack.Screen
        name = "Leisure 2"
        component = {Leisure2}
        options = {{title : "Leisure 2"}}
        />
        <Stack.Screen
        name = "Leisure 3"
        component = {Leisure3}
        options = {{title : "Leisure 3"  }}
        />
        <Stack.Screen
        name = "Leisure 4"
        component = {Leisure4}
        options = {{title : "Leisure 4"}}
        />
        <Stack.Screen
        name = "Profile"
        component={Profile}
        options={{title : "Profile"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


