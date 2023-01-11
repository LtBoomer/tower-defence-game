import { Projectile } from "./ProjectileStyled";
import Arrow from "../../image/character/Arrow.png";
import { useState, useEffect, useRef } from "react";

const ProjectileShot = (props) => {
  const { top, right, bottom, left, tower, enemyPosition } = props;
  const [arrowMove, setArrowMove] = useState(parseInt(top));
  const arrow = useRef(null);

  useEffect(() => {
    const gameStartInternal = setInterval(() => {
      const move = arrowMove + Math.floor(Math.random() * 20) + 10;
      setArrowMove(move);
      if (move > 1300) {
        if (tower === 2) {
          setArrowMove(100);
        } else {
          setArrowMove(600);
        }
      }
      enemyPosition.map((enemy, index) => {
        if (
          enemy.left > parseInt(left) - 70 &&
          enemy.left < parseInt(left) + 30 &&
          arrowMove - enemy.top <= 0
        ) {
          enemy.dead = true;
        }
      });
    }, 10);
    return () => {
      clearInterval(gameStartInternal);
    };
  }, [arrowMove]);

  return (
    <Projectile
      ref={arrow}
      src={Arrow}
      customstyle={{
        top: `${arrowMove}px`,
        bottom: bottom,
        left: left,
        right: right,
      }}
    />
  );
};

export default ProjectileShot;
