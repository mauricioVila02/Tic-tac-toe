import classNames from "classnames";
import "./../../styles/winnerLine.css";

export const WinnerLine = (props: IWinnerLine) => {
  return (
    <div
      className={classNames(
        "winner-line position-absolute d-flex align-self-center",
        {
          "horizontal-winner-line": props.linePosition === "horizontal",
          "vertical-winner-line": props.linePosition === "vertical",
          "secondary-diagonal-winner-line":
            props.linePosition === "secondaryDiagonal",
          "main-diagonal-winner-line": props.linePosition === "mainDiagonal",
        }
      )}
    ></div>
  );
};

interface IWinnerLine {
  horizontal?: Boolean;
  vertical?: Boolean;
  mainDiagonal?: Boolean;
  linePosition?: string;
  secondaryDiagonal?: Boolean;
}
