import React from 'react';
import Card from './Card';

const CardList = ({ robos }) => {
  return (
    <div className='mt4 mb4'>
      {
        robos.map((user, i) => {
          return (
            <Card
              key={user.id}
              i={i}
              robos={robos}
            />
          )
        })
      }
    </div>
  )
}

export default CardList;
