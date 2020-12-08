import { Button } from 'react-bootstrap';
import React, { useEffect, useState, useContext } from 'react';
import { Card } from 'react-bootstrap';
import { GlobalCartContext } from '../../Utils/store';
import { CardItem } from '../../Utils/types';

export const ComicCard = (data: CardItem) => {

  const [item, setItem] = useState<CardItem>();

  const cart = useContext(GlobalCartContext);

  useEffect(() => {
    setItem(data);
  }, [data]);

  function getItem(item: CardItem) {
    cart.addItem(item);
    console.log('Cart: ', cart.items);
  };


  return (
    <Card style={{ width: '18rem', overflow: 'hidden' }}>
      <Card.Body>
        <Card.Title> {item?.name} </Card.Title>
    <Card.Subtitle className="mb-2 text-muted"> {item?.price === 0? ("For free!") : (`$ ${item?.price.toFixed(2)}`)}</Card.Subtitle>
        <Card.Text>
          {item?.description.length? (item?.description) : (<b>COMING SOON!</b>)}
        </Card.Text>
        <Button onClick={() => getItem(data)}>ADD TO CART</Button>
      </Card.Body>
    </Card>
  )
}