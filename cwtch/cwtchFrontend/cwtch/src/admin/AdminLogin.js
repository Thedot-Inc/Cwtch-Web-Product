import React from 'react'
import { Navbar,Nav,Form ,FormControl,Button} from 'react-bootstrap';
import "./AdminStyle.css"
export default function AdminLogin() {
    return (
        <div className="container">
            <div className="text-center mt-5">
                <h3>Admin</h3>
            </div>
            <Form className="container-small marginTop">
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
    )
}
