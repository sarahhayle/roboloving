import React from 'react';
import { animated, interpolate } from 'react-spring';

const Card = ({ 
  i,
  x,
  y,
  rot,
  scale,
  trans,
  bind,
  robots,
}) => {
  const { id, name, email } = robots[i];

  return !x ?
  (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2> {name} </h2>
        <p> {email} </p>
      </div>
    </div>
  ) :
  (
  <animated.div
    key={i}
    style={{ transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}
    className='deck'
    >
      <animated.div
        {...bind(i)}
        style={{ transform: interpolate([rot, scale], trans) }}
        className='bg-light-green cardInDeck'
      >
      <div className='tc bg-light-green card'>
        <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
        <h2> {name} </h2>
        <p> {email} </p>
      </div>
      </animated.div>
    </animated.div>
  )
}

export default Card;