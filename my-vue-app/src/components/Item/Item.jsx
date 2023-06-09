import React from 'react'
import "./Item.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Item({title,img,category,price,color,stock,id}) {
  return (
  <div>     
    <Card style={{ width: '15rem'}}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Link to={`/product/${id}`}>
        <Card.Img variant="top" src={img} />
        </Link>
        <Card.Text>
        ${price}
        </Card.Text>
        <Card.Text>
        {category}
        </Card.Text>
        { stock === 0 ? (
<Link to={`/product/${id}`}>          
<Button variant="secondary">{"ver detalle"}</Button>
</Link> 
        ):(
<Link to={`/product/${id}`}>
<Button variant="primary">{"ver detalle"}</Button>
</Link> 
)
} 
</Card.Body>
</Card>
</div>    
);
}

export default Item;





















/*





const Item = (props) => {
  return (
   <div className='item-card'>

    <div className='item-card_header'>
<h2>{props.title}</h2>

    </div>
    <div className='item-card_img'>
        <img src={props.img} alt="imagen"></img>

        
    </div>
    <div className='item-card_detail'></div>
<h4>$ {props.price}</h4>
<small>{props.category}</small>
<Button label="ver detalles"/>
</div>
   
)}

export default Item*/