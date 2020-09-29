import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen111321Navigator from '../features/CopyOfBlankScreen111321/navigator';
import BlankScreen111319Navigator from '../features/BlankScreen111319/navigator';
import BlankScreen011318Navigator from '../features/BlankScreen011318/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen111321: { screen: CopyOfBlankScreen111321Navigator },
BlankScreen111319: { screen: BlankScreen111319Navigator },
BlankScreen011318: { screen: BlankScreen011318Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
