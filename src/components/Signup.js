import React from 'react'
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


class Signup extends React.Component{

    render(){
        return(
         <Formdiv>
            <Grid className='grid' textAlign='center' style={{ height: '100vh' }} verticalAlign='top'>
            <Grid.Column style={{ maxWidth: 650 }}>
              <Header className='header' as='h2' color='black' textAlign='center'>
               Sign-up for an account
              </Header>
              <Form size='big'>
                <Segment stacked>
                  <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                  <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                  />
        
                  <Button color='yellow' fluid size='big'>
                    Login
                  </Button>
                </Segment>
              </Form>
              <Message>
                Already have an account? <a href='/login'>Log in</a>
              </Message>
            </Grid.Column>
          </Grid>
          </Formdiv>
        )
    }
}
export default Signup