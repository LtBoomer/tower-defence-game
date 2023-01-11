import { useState, useEffect } from "react";
import { Tower } from "./TowerStyled";
import tower from "../../image/character/tower.png";
import rock from "../../image/ambient/rock.png";
import ProjectileShot from "../ProjectileComponent/Projectile";

const TowerDefencer = (props) => {
  const { top, right, bottom, left, towerId, enemyPosition } = props;

  return (
    <>
      <Tower src={tower} customstyle={{ top, right, bottom, left }} />
      <ProjectileShot
        top={`${parseInt(top) + 100}px`}
        right={right}
        bottom={bottom}
        left={`${parseInt(left) + 70}px`}
        tower={towerId}
        enemyPosition={enemyPosition}
      />
    </>
  );
};

export default TowerDefencer;
