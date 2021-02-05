import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return (
  <div className='mt4 mb4'>
    {
      robots.map((user, i) => {
        return (
          <Card 
            key={user.id} 
            i={i}
            robots={robots}
          />
        )
      })
    }
  </div>
  )
}

export default CardList;