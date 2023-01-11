import { useEffect, useState } from "react";
import "./App.scss";
import Path from "./components/PathComponent/Path";
import TowerDefencer from "./components/TowerComponent/Tower";
import Attacker from "./components/EnemyComonent/Knight";
import enemyModel from "../src/enemyModels";

function App() {
  const [enemys, setEnemys] = useState(enemyModel);

  const variableHandle = (value) => {
    value++;
    return value;
  };

  useEffect(() => {
    const gameStartInternal = setInterval(() => {
      const newState = enemys.map((obj, index) => {
        if (obj.id === index) {
          if (obj.left === 500 && obj.top !== 200) {
            return { ...obj, top: obj.top - 5 };
          } else if (obj.top === 200 && obj.left !== 1300) {
            return { ...obj, left: obj.left + 5 };
          } else if (obj.left === 1300 && obj.top !== 600) {
            return { ...obj, top: obj.top + 5 };
          } else {
            return { ...obj, left: obj.left + 5 };
          }
        }
        return obj;
      });

      setEnemys(newState);
      // console.log(enemys[0].dead);
    }, 10);
    return () => {
      clearInterval(gameStartInternal);
    };
  }, [enemys]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        backgroundColor: "#543c3c",
      }}
    >
      <Path width="500px" height="100px" top="600px" />
      <Path width="100px" height="500px" left="500px" top="200px" />
      <Path width="700px" height="100px" left="600px" top="200px" />
      <Path width="100px" height="500px" left="1300px" top="200px" />
      <Path width="520px" height="100px" left="1400px" top="600px" />
      <TowerDefencer
        left="200px"
        top="400px"
        towerId={1}
        enemyPosition={enemys}
      />
      <TowerDefencer
        left="850px"
        top="0px"
        towerId={2}
        enemyPosition={enemys}
      />
      <TowerDefencer
        left="1520px"
        top="400px"
        towerId={3}
        enemyPosition={enemys}
      />
      {enemys?.map((enemy, index) => {
        return (
          <Attacker
            key={`attacker-${index}`}
            top={`${enemy.top}px`}
            left={`${enemy.left}px`}
            dead={enemy.dead}
          />
        );
      })}
    </div>
  );
}

export default App;
