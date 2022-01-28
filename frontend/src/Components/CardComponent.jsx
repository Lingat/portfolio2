import React from 'react';
import { Card, Button, Badge } from "react-bootstrap";

function CardComponent({info}) {
  return <Card style={{ width: '18rem', color: "black", background: "#fff" }}>
  <Card.Img border="light" variant="top" src={info.img} />
  <Card.Body>
    <Card.Title><h3>{info.title}</h3></Card.Title>
    {info.tags.map((t) => <Badge bg={t[1]}>{t[0]}</Badge>)}
    <Card.Text> 
      {info.description}
    </Card.Text>
    
    <Button >Go somewhere</Button>
   
    
  </Card.Body>
  <Card.Footer className="text-muted">January 20th, 2022</Card.Footer>
</Card>;
}

export default CardComponent;
