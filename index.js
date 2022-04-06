/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
const GLOBAL = require('./app.config')
appName = GLOBAL.default.name


AppRegistry.registerComponent(appName, () => App);
