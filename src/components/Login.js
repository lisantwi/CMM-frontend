import React, {useState} from 'react'
import styled from 'styled-components'


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

const Error = styled.div`
  background-color: red;
`;


function Login(){

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");


  function postLogin(){
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user:{
          username: userName,
          password: password
        }
      })
  }).then(resp => resp.json())
  .then(data =>{
      if(data.jwt){
       setLocalStorage(data)
      } else{
        
      }
     
  })
  }

  function setLocalStorage(data){
    localStorage.setItem("token", JSON.stringify(data.jwt));
    localStorage.setItem("user", JSON.stringify(data.user));
  }

  

  
        return(
         <Formdiv>
            <Grid className='grid' textAlign='center' style={{ height: '100vh' }} verticalAlign='top'>
            <Grid.Column style={{ maxWidth: 650 }}>
              <Header className='header' as='h2' color='black' textAlign='center'>
               Log-in to your account
              </Header>
              <Form size='big'>
                <Segment stacked>
                  <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address'
                  type='email'
                  value={email} 
                  onChange={e => {
                    setEmail(e.target.value);
                  }}/>
                  <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Username'
                    type='username'
                    value={userName}
                    onChange={e => {
                      setUserName(e.target.value);
                    }}
                  />
                  <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                    value={password}
                    onChange={e => {
                      setPassword(e.target.value);
                    }}
                  />
        
                  <Button onClick={postLogin} color='yellow' fluid size='big'>
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

export default Login