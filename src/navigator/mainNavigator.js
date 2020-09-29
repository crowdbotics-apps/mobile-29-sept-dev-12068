import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen311386Navigator from '../features/BlankScreen311386/navigator';
import BlankScreen211336Navigator from '../features/BlankScreen211336/navigator';
import BlankScreen011331Navigator from '../features/BlankScreen011331/navigator';
import CopyOfBlankScreen111329Navigator from '../features/CopyOfBlankScreen111329/navigator';
import BlankScreen311328Navigator from '../features/BlankScreen311328/navigator';
import BlankScreen011324Navigator from '../features/BlankScreen011324/navigator';
import CopyOfBlankScreen111322Navigator from '../features/CopyOfBlankScreen111322/navigator';
import CopyOfBlankScreen111321Navigator from '../features/CopyOfBlankScreen111321/navigator';
import BlankScreen111319Navigator from '../features/BlankScreen111319/navigator';
import BlankScreen011318Navigator from '../features/BlankScreen011318/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen311386: { screen: BlankScreen311386Navigator },
BlankScreen211336: { screen: BlankScreen211336Navigator },
BlankScreen011331: { screen: BlankScreen011331Navigator },
CopyOfBlankScreen111329: { screen: CopyOfBlankScreen111329Navigator },
BlankScreen311328: { screen: BlankScreen311328Navigator },
BlankScreen011324: { screen: BlankScreen011324Navigator },
CopyOfBlankScreen111322: { screen: CopyOfBlankScreen111322Navigator },
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
