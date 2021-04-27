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

function Deck({ setChosenRobos, chosenRobos }) {
  const [swiped] = useState(() => new Set());
  const [props, set] = useSprings(robots.length, i => ({
    ...to(i),
    from: from(i)
  }))

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

      if (!down && trigger) swiped.add(index);

      if (!down && trigger && dir >= 1) setChosenRobos(chosenRobos => [...chosenRobos, robots[index]]);

      set(i => {
        if (index !== i) return;
        const beenSwiped = swiped.has(index);

        const x = beenSwiped ? (200 + window.innerWidth) * dir : down ? xDelta : 0;

        const rot = xDelta / 100 + (beenSwiped ? dir * 10 * velocity : 0);

        const scale = down ? 1.1 : 1;
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : beenSwiped ? 200 : 500 },
        };
      });

      if (!down && swiped.size === robots.length)
        setTimeout(() => swiped.clear() || set(i => to(i)), 600);
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
    chosenRobos={chosenRobos}
  />
  ));
}

export default Deck;
