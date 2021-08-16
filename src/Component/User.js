import React from 'react'
import{Card, Button} from "react-bootstrap"
import { Link } from 'react-router-dom';
export const User = (user) => {
    return (
        <div>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXMk-gEIPzIBHa810RlRSvD_ksc0Htj-vuTQ&usqp=CAU" />
  <Card.Body>
    <Card.Title>{user.name +" " + user.username}</Card.Title>
    <Card.Text>
      {user.email}
    </Card.Text>
    <Button variant="primary">
    <Link to ={'/users/§{user.id}'}>Go somewher
    </Link>

    </Button>
  </Card.Body>
</Card>
        </div>
    )
}
export default  User;