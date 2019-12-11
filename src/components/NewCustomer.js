import React from 'react'
import { Button, Header, Image, Modal, Form, Checkbox } from 'semantic-ui-react'

const NewCustomer = () => (
  <Modal trigger={<Button>Add Customer</Button>}>
    <Modal.Header>Add New Client</Modal.Header>
    <Modal.Content image scrolling>
      <Image wrapped size='medium' src='https://www.forafinancial.com/wp-content/uploads/2018/04/Master-Productive-Client-Meetings.jpg' />
      <Modal.Description>
        <Header>Client Info</Header>
        <Form>
        <Form.Group unstackable widths={1}>
            <Form.Input label='Company name' placeholder='First name' />
            <Form.Input label='address' placeholder='Last name' />
        </Form.Group>
        <Form.Group widths={1}>
            <Form.Input label='city' placeholder='Address' />
            <Form.Input label='state' placeholder='state' />
            <Form.Input label='zip' placeholder='zip' />
        </Form.Group>
    <Button type='submit'>Submit</Button>
  </Form>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default NewCustomer