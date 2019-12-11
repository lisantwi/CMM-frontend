import React from 'react'
import NewCustomer from './NewCustomer'
import NewProject from './NewProject'
import {Grid, Menu} from 'semantic-ui-react'
import styled from 'styled-components'

const CustomerDiv = styled.div`
body {
    margin: 0;
  }
  
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 25%;
    background-color: #f1f1f1;
    position: fixed;
    height: 100%;
    overflow: auto;
    font-size:25px;
  }
  
  li a {
    display: block;
    color: #000;
    padding: 8px 16px;
    text-decoration: none;
  }
  
  li a.active {
    background-color: #f6c244;
    color: white;
  }
  
  li a:hover:not(.active) {
    background-color: #555;
    color: white;
  }
`




class Projects extends React.Component{



    render(){
        return(
            
            <CustomerDiv>
                      
     
                <Grid className='grid' textAlign='center' columns={3} style={{height: '100vh', width:'100vw'}}>
                <Grid.Row  >
                    <Grid.Column width={5} >
                    <ul>
  <li><a class="active" href="#home">Projects</a></li>
  <li><a href="#news">Clients</a></li>
  <li><a href="#contact">Profile</a></li>
</ul>
                    </Grid.Column>
                    <Grid.Column width={11}   >
                        <NewProject/>
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
               
                </CustomerDiv>
     
        )
    }
}

export default Projects