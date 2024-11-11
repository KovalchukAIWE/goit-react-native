import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import Home from '../screens/Home';
import CreatePostsScreen from '../screens/CreatePostsScreen';
import CommentsScreen from '../screens/CommentsScreen';
import HomeIcon from '../../icons/HomeIcon';
import ProfileScreen from '../screens/ProfileScreen';
import ProfileIcon from '../../icons/ProfileIcon';
import AddPostIcon from '../../icons/AddPostIcon';
import BtnBackIcon from '../../icons/BtnBackIcon';
import LogOutIcon from '../../icons/LogOutIcon';
import { logoutDB } from '../utils/auth';

const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          headerShown: true,
          headerLeftContainerStyle: {
            paddingHorizontal: 16,
          },
          headerRightContainerStyle: {
            paddingHorizontal: 16,
          },
          tabBarIcon: () => <HomeIcon />,
          tabBarLabel: () => null,
          headerTitle: 'Публікації',
          headerRight: () => <LogOutIcon />,
        }}
      />

      <Tab.Screen
        name='CreatePostsScreen'
        component={CreatePostsScreen}
        options={{
          headerShown: true,
          tabBarStyle: {
            display: 'none',
          },
          headerLeftContainerStyle: {
            paddingHorizontal: 16,
          },
          headerRightContainerStyle: {
            paddingHorizontal: 16,
          },
          tabBarIcon: () => <AddPostIcon />,
          tabBarLabel: () => null,
          headerTitle: 'Створити публікацію',
          headerLeft: () => <BtnBackIcon onPress={() => logoutDB(dispatch)} />,
        }}
      />

      <Tab.Screen
        name='ProfileScreen'
        component={ProfileScreen}
        options={{
          tabBarIcon: () => <ProfileIcon />,
          tabBarLabel: () => null,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
