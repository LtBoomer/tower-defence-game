import { Knight } from "./KnightStyled";
import knight from "../../image/character/knight.png";

const Attacker = (props) => {
  const { top, right, bottom, left, dead } = props;
  return (
    <Knight src={knight} customstyle={{ top, right, bottom, left, dead }} />
  );
};
export default Attacker;
