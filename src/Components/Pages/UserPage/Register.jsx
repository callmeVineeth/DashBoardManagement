import React from 'react'
import { Button,Form,Row, Col } from 'react-bootstrap'

function Register() {
  return (
    <div>
        <h1>Register</h1>

<main className=' w-100  d-flex justify-content-center'>
        <Form className=' w-50'>
        <Row className="mb-3 gap-3">
        <Form.Control  placeholder="First Name" />
        <Form.Control  placeholder="Last Name" />
        <Form.Control type="password" placeholder="Password" />
        <Form.Control type="password" placeholder="Confirm Password" />
      </Row>

        
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
        </main>
    </div>
  )
}

export default Register