import React from 'react';

//Context
import { RouteControllerProvider } from './src/context/RouteController';

//Router
import RouterApp from './src/router';

//Redux
import { Provider } from 'react-redux';
import store from './src/redux/store';

function App() {
  return <Provider store={store}>
    <RouteControllerProvider>
      <RouterApp />
    </RouteControllerProvider>    
  </Provider>
}

export default App;