import React, {useState} from 'react';
import NavBar from './components/NavBar'
import Login from './components/Login'
import Signup from './components/Signup'
import Projects from './components/Projects'
import { Route, BrowserRouter, Switch} from "react-router-dom";
import MyProvider from './provider/MyProvider'



import './App.css';

class App extends React.Component{
  

  

 

 render(){
  return(
    <div>

      <NavBar/>
      <MyProvider >
      <BrowserRouter>
      <Switch>
        <Route path='/login'
        render ={(props) => <Login {...props} propsHere={true}/>}/>
        <Route path='/signup'
        render ={(props) => <Signup {...props} propsHere={true}/>}/>
        <Route path='/projects' component={Projects}/>
      </Switch>

      </BrowserRouter>
      </MyProvider>
    </div>
  )
 }
   
 }

  


export default App;
