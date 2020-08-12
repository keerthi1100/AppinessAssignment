/**
 * @format
 */

import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
import App from './src/Routing/StackRouting'
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import React from 'react';

import reducer from './src/Redux/Reducers/userCredreducer';

const store = createStore(reducer);

const AppContainer =()=>
<Provider store ={store}>
<App/>
</Provider>


AppRegistry.registerComponent(appName, () => AppContainer);
