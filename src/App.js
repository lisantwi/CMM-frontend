import React, {useState} from 'react';
import NavBar from './components/NavBar'
import Login from './components/Login'
import Signup from './components/Signup'
import Projects from './components/Projects'
import { Route,Switch, withRouter, Redirect} from "react-router-dom";




import './App.css';

class App extends React.Component{
  

  

 

 render(){
  return(

<div>

<NavBar history={this.props.history}/>
  <Switch>
  <Route path='/login'
  render ={(props) => <Login {...props} history={this.props.history}/>}/>
  <Route path='/signup'
  render ={(props) => <Signup {...props} propsHere={true}/>}/>
   <Route path='/projects'
  render ={(props) => localStorage.token ?  <Projects {...props}/> :  <Redirect push to='/home'/>}/>
  </Switch>

</div>
     
    
  )
 }
   
 }

  


export default withRouter(App);
