import React from 'react';

//Router
import RouterApp from './src/router';

//Firebase initialization
import './src/services/database';

//Redux
import { Provider } from 'react-redux';
import store from './src/redux/store';

function App() {
  return (
    <Provider store={store}>
      <RouterApp />  
    </Provider>
  )
}

export default App;