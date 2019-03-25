import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen';
import OrganisationScreen from '../screens/OrganisationScreen';
import AppNavigator from './AppNavigator';

const TabNavigator = createBottomTabNavigator({
  // Home: {
  //   screen: HomeScreen
  // },
  // Profile: {
  //   screen: ProfileScreen
  // },
  // Organisation: {
  //   screen: OrganisationScreen
  // }
  Home: AppNavigator,
  Profile: AppNavigator,
  Organisation: AppNavigator
},
  // {
  //   initialRouteName: "Home"
  // }
);

export default createAppContainer(TabNavigator);