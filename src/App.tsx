import React from 'react'
import { RouterProvider } from 'react-router-dom';
import Approute from './routes/Approute';

const App = () => {
  return <RouterProvider router={Approute}/>
}

export default App;
