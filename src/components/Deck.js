import React, { useState } from 'react';
import Card from './Card';
import { useSprings } from 'react-spring';
import { useGesture } from 'react-with-gesture';
import './Deck.css';
import { robots } from  './robots';

const to = i => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100
});

const from = i => ({  x: 0, rot: 0, scale: 1.5, y: -1000 });

const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${r /10}deg) rotateZ(${r}deg) scale(${s})`;

function Deck() {
  const [nope] = useState(() => new Set());
  const [props, set] = useSprings(robots.length, i => ({
    ...to(i),
    from: from(i)
  }))
  console.log('robotsL', robots.length);
  

  console.log('props', props)

  const bind = useGesture(
    ({
      args: [index],
      down,
      delta: [xDelta],
      distance,
      direction: [xDir],
      velocity
    }) => {
      const trigger = velocity > 0.2;

      const dir = xDir < 0 ? -1 : 1;

      if (!down && trigger) nope.add(index);

      set(i => {
        if (index !== i) return;
        const isNope = nope.has(index);

        const x = isNope ? (200 + window.innerWidth) * dir : down ? xDelta : 0;

        const rot = xDelta / 100 + (isNope ? dir * 10 * velocity : 0);

        const scale = down ? 1.1 : 1;
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isNope ? 200 : 500 }
        };
      });

      if (!down && nope.size === robots.length)
        setTimeout(() => nope.clear() || set(i => to(i)), 600);
    }
  );

  return props.map(({ x, y, rot, scale }, i) => (
   <Card
    key={robots[i].id}
    i={i}
    x={x}
    y={y}
    rot={rot}
    scale={scale}
    trans={trans}
    robots={robots}
    bind={bind}
  />
  ));
}

export default Deck;