import React from 'react';
import ReactDOM from 'react-dom';
import router from "./router";
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Components/store/store';
import AutoLogin from './Components/store/AutoLogin';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <Provider store={store}>
      {/* <AutoLogin> */}
        <RouterProvider router={router}/>
      {/* </AutoLogin> */}
    </Provider>
  </React.StrictMode>
);

