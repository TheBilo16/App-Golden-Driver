import React from 'react';

//Context
import { RouteControllerProvider } from './src/context/RouteController';

//Router
import RouterApp from './src/router';

function App() {
  return <RouteControllerProvider>
    <RouterApp />
  </RouteControllerProvider>
}

export default App;