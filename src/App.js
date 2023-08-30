import './App.css';
import { createBrowserRouter,  RouterProvider, } from "react-router-dom";
import Main from "./components/Main/Main";
import Registr from "./components/Main/Registr/Registr/Registr";
import Repass from "./components/Main/Registr/Repass/Repass";
import Name from "./components/Main/Registr/Name/Name";
import Country from "./components/Main/Registr/Country/Country";
import state from "./redux/state"



const Router = createBrowserRouter([{
    element: <Main state={state.main}/>, path:'/'
},{
    element: <Registr state={state.registr}/>, path:'/Registr'
},{
    element: <Repass state={state.repass}/>, path:'/Repass'
},{
    element: <Name state={state.name}/>, path:'/Name'
},{
    element: <Country state={state.сountry}/>, path:'/Country'
}])
function App(props) {
  return (
    <RouterProvider router={Router}/>
  );
}


export default App;