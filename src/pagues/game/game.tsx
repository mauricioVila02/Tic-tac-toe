import classNames from "classnames";
import "./../../styles/game.css";

const Game = () => {
  return (
    <div className="mv-game w-100 h-100">
      <h1>GAME</h1>
      {Array.from(Array(9)).map((item, index) => (
        <>
          <BaseFrame id={index} />
          {index === 2 || (index === 5 && <br />)}
        </>
      ))}
    </div>
  );
};

const BaseFrame = (props: IBaseFrame) => {
  const { id } = props;
  return (
    <div
      // onClick={props.onClick}
      className={classNames("mv-base-frame", {
        "mv-top-border": id > 2,
        "mv-right-border":
          id === 0 || id === 1 || id === 3 || id === 4 || id === 6 || id === 7,
        "mv-left-border":
          id === 1 || id === 2 || id === 4 || id === 5 || id === 7 || id === 8,
        "mv-bottom-border": id > 6,
      })}
    ></div>
  );
};

interface IBaseFrame {
  id: number;
  onClick?: (id: number) => void;
}

export default Game;
