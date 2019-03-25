import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen';
import OrganisationScreen from '../screens/OrganisationScreen';

const AppNavigator = createStackNavigator({
    Home: {
      screen: HomeScreen
    },
    Profile: {
      screen: ProfileScreen
    },
    Organisation: {
      screen: OrganisationScreen
    }
  },
  {
    initialRouteName: "Home"
  }
  );

export default createAppContainer(AppNavigator);