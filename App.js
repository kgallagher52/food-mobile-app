import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './src/screens/Home';
import Search from './src/screens/Search';

const navigator = createStackNavigator({
  Home: Home,
  Search: Search,

}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'Business Search'
  },
});

export default createAppContainer(navigator);


