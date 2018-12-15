/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
/////////////////////////////////////////////////////////////
import First from './src/First'
//import SignIn from './src/SignIn'
import SignIn from './src/SignIn2'
////////////////////////////////////////////////////////////
AppRegistry.registerComponent(appName, () => SignIn);
