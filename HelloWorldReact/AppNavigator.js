import { createStackNavigator } from 'react-navigation-stack'

import App                 from './components/StartScreenComponent/StartScreenComponent'
import HomeScreenComponent from './components/HomeScreenComponent/HomeScreenComponent'

const AppNavigator = createStackNavigator(
  {
    Home: App,
    Other: HomeScreenComponent
  })

export default AppNavigator

