import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import RoleCreation from './RoleCreation';
import { PAGES } from '../pages/Dashboard';

export default class RoleForm extends React.Component {
    createRole = (e) => {
        e.preventDefault();
        window.location.href="../roles"
    }

    handleSave = () => {
        // console.log(document.querySelector('#role').value)
        // console.log(document.querySelector('#select').value)
        localStorage.setItem('role', document.querySelector('#role').value);
        localStorage.setItem('selected', document.querySelector('#select').value);
        this.props.change(PAGES.ROLEPAGE);
    }

  render() {
    return (
      <Form style={{display: 'flex', flexDirection: 'column', margin: '2rem', border: '1px solid #ccc'}}>
        <h2 style={{marginBottom: '1rem', padding: '2rem 2rem 0 2rem'}}>New Role</h2>
        <FormGroup row style={{padding: '0 2rem'}}>
          <Label for="exampleEmail" sm={4}>Role Description:</Label>
          <Col sm={8}>
            <Input type="input" name="role" id="role" required/>
          </Col>
        </FormGroup>
        <FormGroup row style={{padding: '0 2rem'}}>
            <Label for="exampleSelectMulti" sm={4}>To Be Assigned To:</Label>
            <Col sm={8}>
                <Input type="select" name="select" id="select">
                    <option>Bank User</option>
                    <option>Customer User</option>
                </Input>
          </Col>
        </FormGroup>
        <FormGroup style={creation}>
            <div style={{display: 'flex', justifyContent: 'center', maxHeight: '20rem'}}>
                <RoleCreation />
            </div>
            <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: 'auto'}}>
                <Button style={{marginTop: '2rem', backgroundColor: 'rgb(77, 140, 76)', border: 'none'}} onClick={this.handleSave}>Save</Button>
                <Button style={{margin: '2rem 0 0 1rem', backgroundColor: 'white', border: '1px solid rgb(77, 140, 76)', color: 'green'}} onClick={() => {this.props.change(PAGES.ROLEPAGE)}}>Cancel</Button>
            </div>
        </FormGroup>
      </Form>
    );
  }
}

const creation = {
    display: 'flex',
    flexDirection: 'column',
    flex: 'auto',
    margin: '2rem 0 0 0',
    backgroundColor: '#EDF2F7',
    width: '100%',
    padding: '2rem'
}