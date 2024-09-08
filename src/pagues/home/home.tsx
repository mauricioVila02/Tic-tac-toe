import { useEffect, useState } from "react";
import Button from "../../components/button/button";
import Circle from "../../components/circle/circle";
import Cross from "../../components/cross/cross";
import "./../../styles/global.css";
import { WinnerLine } from "../../components/winnerLine/winnerLine";

const Home = () => {
  return (
    <div className="mv-home mv-center-element w-100 h-100 d-flex flex-row">
      {/* <div className="mv-figure-selector-container w-100">
        <h1>Choose your figure</h1>
        <section className="d-flex flex-row ">
          <Circle cursorPointer opacityInHover />
          <Cross cursorPointer opacityInHover />
        </section>
        <Button text="PLAY" onClick={() => console.log("..")} />
        <section className="d-flex">
          <h2>Play with machine my friend</h2>
          <input type="checkbox" />
        </section>
      </div> */}
      <Board />
    </div>
  );
};

const Board = (props: {
  onClick?: (id: number) => void;
  // incomingFigure: "cross" | "circle" | string;
}) => {
  // const isCross = props.incomingFigure === "cross";
  // const isCircle = props.incomingFigure === "circle";

  const [winnerFigure, setWinnerFigure] = useState("");
  const [figure, setFigure] = useState("circle");
  const [items, setItems] = useState(["", "", "", "", "", "", "", "", ""]);
  const [winnerPositions, setWinnerPositions] = useState<number[]>([]);
  const [winnerLinePosition, setWinnerLinePosition] = useState("");

  const BoardItem = (props: {
    id: number;
    figure?: string;
    winnerLinePosition?: string;
    showWinnerLinePosition?: boolean;
    onClick: (id: number) => void;
  }) => {
    return (
      <div
        className="board-item position-relative"
        onClick={() => props.onClick(props.id)}
      >
        {props.showWinnerLinePosition && (
          <WinnerLine
            // horizontal={true}
            // vertical={true}
            // secondaryDiagonal={true}
            // mainDiagonal={true}
            linePosition={winnerLinePosition}
          />
        )}
        {props.figure === "cross" && <Cross cursorPointer opacityInHover />}
        {props.figure === "circle" && <Circle cursorPointer opacityInHover />}
      </div>
    );
  };

  const handlerOnClickInBoardItem = (id: number) => {
    // debugger;
    if (winnerFigure) {
      return;
    }
    setItems((currentItems) =>
      currentItems.map((currentFigure, index) => {
        if (index === id && !currentFigure) {
          setFigure((currenFigure) =>
            currenFigure === "circle" ? "cross" : "circle"
          );
          return figure;
        }
        return currentFigure;
      })
    );
  };

  useEffect(() => {
    // debugger;
    // HORIZONTALES
    if (items[0] === items[1] && items[1] === items[2] && items[0]) {
      setWinnerFigure(items[0]);
      setWinnerPositions([0, 1, 2]);
      setWinnerLinePosition("horizontal");
      return;
    }

    if (items[3] === items[4] && items[4] === items[5] && items[3]) {
      setWinnerFigure(items[3]);
      setWinnerPositions([3, 4, 5]);
      setWinnerLinePosition("horizontal");
      return;
    }
    if (items[6] === items[7] && items[7] === items[8] && items[6]) {
      setWinnerFigure(items[6]);
      setWinnerPositions([6, 7, 8]);
      setWinnerLinePosition("horizontal");
      return;
    }

    // VERTICALES
    if (items[0] === items[3] && items[3] === items[6] && items[0]) {
      setWinnerFigure(items[0]);
      setWinnerPositions([0, 3, 6]);
      setWinnerLinePosition("vertical");
      return;
    }
    if (items[1] === items[4] && items[4] === items[7] && items[1]) {
      setWinnerFigure(items[1]);
      setWinnerPositions([1, 4, 7]);
      setWinnerLinePosition("vertical");
      return;
    }
    if (items[2] === items[5] && items[5] === items[8] && items[2]) {
      setWinnerFigure(items[2]);
      setWinnerPositions([2, 5, 8]);
      setWinnerLinePosition("vertical");
      return;
    }

    // DIAGONALES
    if (items[0] === items[4] && items[4] === items[8] && items[0]) {
      setWinnerFigure(items[0]);
      setWinnerPositions([0, 4, 8]);
      setWinnerLinePosition("mainDiagonal");
      return;
    }
    if (items[2] === items[4] && items[4] === items[6] && items[2]) {
      setWinnerFigure(items[2]);
      setWinnerPositions([2, 4, 6]);
      setWinnerLinePosition("secondaryDiagonal");
      return;
    }
  }, [items]);

  const resetItems = () => {
    setWinnerFigure("");
    setWinnerPositions([]);
    setWinnerLinePosition("");
    setItems(["", "", "", "", "", "", "", "", ""]);
  };

  console.log(winnerPositions);

  return (
    <div className="d-flex flex-column align-items-center">
      {winnerFigure && (
        <div className="d-flex flex-row align-items-center">
          <h1 className="mx-2">El ganador es: </h1>
          {winnerFigure === "cross" && <Cross />}
          {winnerFigure === "circle" && <Circle />}
        </div>
      )}
      <button onClick={resetItems}>RESET</button>
      <div className="board w-100">
        <BoardItem
          id={0}
          figure={items[0]}
          winnerLinePosition={winnerLinePosition}
          showWinnerLinePosition={winnerPositions.includes(0)}
          onClick={handlerOnClickInBoardItem}
        />
        <BoardItem
          id={1}
          figure={items[1]}
          winnerLinePosition={winnerLinePosition}
          showWinnerLinePosition={winnerPositions.includes(1)}
          onClick={handlerOnClickInBoardItem}
        />
        <BoardItem
          id={2}
          figure={items[2]}
          winnerLinePosition={winnerLinePosition}
          showWinnerLinePosition={winnerPositions.includes(2)}
          onClick={handlerOnClickInBoardItem}
        />
        <BoardItem
          id={3}
          figure={items[3]}
          winnerLinePosition={winnerLinePosition}
          showWinnerLinePosition={winnerPositions.includes(3)}
          onClick={handlerOnClickInBoardItem}
        />
        <BoardItem
          id={4}
          figure={items[4]}
          winnerLinePosition={winnerLinePosition}
          showWinnerLinePosition={winnerPositions.includes(4)}
          onClick={handlerOnClickInBoardItem}
        />
        <BoardItem
          id={5}
          figure={items[5]}
          winnerLinePosition={winnerLinePosition}
          showWinnerLinePosition={winnerPositions.includes(5)}
          onClick={handlerOnClickInBoardItem}
        />
        <BoardItem
          id={6}
          figure={items[6]}
          winnerLinePosition={winnerLinePosition}
          showWinnerLinePosition={winnerPositions.includes(6)}
          onClick={handlerOnClickInBoardItem}
        />
        <BoardItem
          id={7}
          figure={items[7]}
          winnerLinePosition={winnerLinePosition}
          showWinnerLinePosition={winnerPositions.includes(7)}
          onClick={handlerOnClickInBoardItem}
        />
        <BoardItem
          id={8}
          figure={items[8]}
          winnerLinePosition={winnerLinePosition}
          showWinnerLinePosition={winnerPositions.includes(8)}
          onClick={handlerOnClickInBoardItem}
        />
      </div>
    </div>
  );
};

export default Home;
