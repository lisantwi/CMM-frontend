import React from 'react'
import { withContext } from "../MyContext"
import styled from 'styled-components'
import {Redirect} from 'react-router-dom'


import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'


const Formdiv = styled.div`

.grid {
    margin-top: 50px;
    font-family: 'Nanum Gothic', sans-serif;
}

.header {
    font-family: 'Nanum Gothic', sans-serif;
}
`



class Login extends React.Component {

  constructor(props, context){
    super(props, context)
    this.state = {
      username: "",
      password: ""
  }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
        [name]: value
    })
}



   handleSubmit =(e) =>{
    e.preventDefault()
    this.props.login(this.state)
 


  }


  
  


  

  render(){
    const {username, password} = this.state
    return(
      <Formdiv>
         <Grid className='grid' textAlign='center' style={{ height: '100vh' }} verticalAlign='top'>
         <Grid.Column style={{ maxWidth: 650 }}>
           <Header className='header' as='h2' color='black' textAlign='center'>
            Log-in to your account
           </Header>
           <Form onSubmit={this.handleSubmit} size='big'>
             <Segment stacked>
      
               <Form.Input
                 fluid
                 icon='user'
                 iconPosition='left'
                 placeholder='Username'
                 type='username'
                 name='username'
                 value={username}
                 onChange={this.handleChange}
               />
               <Form.Input
                 fluid
                 icon='lock'
                 iconPosition='left'
                 placeholder='Password'
                 type='password'
                 name='password'
                 value={password}
                 onChange={this.handleChange}
               />
     
               <Button  color='yellow' fluid size='big'>
                 Login
               </Button>
             </Segment>
           </Form>
           <Message>
             New to us? <a href='/signup'>Sign Up</a>
           </Message>
   
         </Grid.Column>
       </Grid>
       </Formdiv>
     )

  }
        
    }

    export default withContext(Login);