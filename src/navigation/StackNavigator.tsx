import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RegistrationScreen from '../screens/RegistrationScreen';
import LoginScreen from '../screens/LoginScreen';
import BottomTabNavigator from './BottomTabNavigator';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';

const Stack = createStackNavigator();

const StackNavigator: React.FC = () => {
  const user = useSelector((state: RootState) => state.user.userInfo);
  return (
    <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{
        headerShown: false,
      }}>
      {user ? (
        // Якщо користувач залогінений, показуємо головний екран
        <Stack.Screen
          name='Home'
          component={BottomTabNavigator}
        />
      ) : (
        // Якщо користувач не залогінений, показуємо екрани Login та Signup
        <>
          <Stack.Screen
            name='Login'
            component={LoginScreen}
          />
          <Stack.Screen
            name='Signup'
            component={RegistrationScreen}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
