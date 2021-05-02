import React from 'react'
import { Navbar,Nav,Form ,FormControl,Button} from 'react-bootstrap';

export default function AdminLayout() {
    return (
        <div>
        <Navbar bg="primary" variant="dark">
<Navbar.Brand href="#home">Cwtch</Navbar.Brand>

<Form inline className="ml-auto">

  <Button variant="outline-light">Logout</Button>
</Form>
</Navbar>
    </div>
    )
}
