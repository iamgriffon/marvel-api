import React, { useEffect, useState } from 'react';
import { CardItem, CardSectionProps } from '../../Utils/types';
import { ComicCard } from '../ComicCard';
import './styles.scss';



const CardSection: React.FC<CardSectionProps> = ({ data, number, title }) => {
  const [cards, setCards] = useState<CardItem[]>();

  useEffect(() => {
    setCards(data)
  }, [data]);

  return (
    <div className='list-preview-container'>
      <br />
      <h3>{title}</h3>
      <div className='item-preview-container'>
        {
          cards?.filter((item, idx) => idx < number).map((item, id) => {
            const { name, description, price, quantity } = item
            return (<ComicCard id={id} key={id} price={price} name={name} description={description} quantity={quantity} />)
          })
        }
      </div>
    </div>
  )
};

export default CardSection;