import { createBrowserRouter } from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login";
import App from "./App";
import List from './Components/medicine/List'
import Create from "./Components/medicine/Create";
import View from "./Components/medicine/View";
import Edit from "./Components/medicine/Edit";
import Search from "./Components/medicine/Search";




const router = createBrowserRouter([
  { path: '', element: <App/> },
  { path: 'register', element:<Register/>},
  { path: 'login', element:<Login/>},
  { path: 'medicine/list', element: <List/>},
  { path: 'medicine/list/create', element: <Create/>},
  { path: 'medicine/list/:postId', element: <View/>},
  { path: 'medicine/list/:postId/edit', element: <Edit/>},
  { path: 'medicine/list/search', element: <Search/>},



]);





export default router;