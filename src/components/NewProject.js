import React from 'react'
import { withContext } from '../MyContext'
import { Button, Header, Image, Modal, Form} from 'semantic-ui-react'

class NewProject extends React.Component{

    constructor(){
        super()
        this.state = {
            customer:'',
            project_name:''
        }

    }
   

    componentDidMount(){
    this.props.getClients()
       
    }

   


  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
        [name]: value
    })
}

handleDropdownChange = (e, { value }) => this.setState({ customer: value })


handleSubmit =(e) =>{
    e.preventDefault()
    this.props.addProject(this.state)
  }

  
  

    render(){
        const {customer, project_name} = this.state
        return(
            <Modal trigger={<Button>Add New Project</Button>}>
            <Modal.Header>Add New Project</Modal.Header>
            <Modal.Content image>
              <Image wrapped size='medium' src={require('../images/client.png')} />
              <Modal.Description>
                <Header>Project Info</Header>
                <Form size='large'>
                <Form.Group stackable widths={1}>
                    <Form.Dropdown fluid selection options={this.props.options} onChange={this.handleDropdownChange} label='Client'  name='customer' placeholder='Client Name' value={customer}/>
                    <Form.Input onChange={this.handleChange} label='Project Name' value={project_name} name='project_name'  placeholder='Project Name' />
                </Form.Group>

            <Button type='submit'>Submit</Button>
          </Form>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        )
    }
 
}

export default withContext(NewProject)