import classNames from "classnames";
import { IFigure } from "../../global/interfaces";

const FigureContainer = (props: IFigureConteiner) => {
  const { size = 50, className = "" } = props;
  return (
    <div
      style={{ height: size, width: size }}
      className={classNames(`mv-figure-container ${className}`, {
        "mv-cursor-pointer": props.cursorPointer,
        "mv-mid-opacity-hover": props.opacityInHover,
      })}
    >
      {props.children}
    </div>
  );
};

interface IFigureConteiner extends IFigure {
  className?: string;
  children?: JSX.Element | JSX.Element[];
}

export default FigureContainer;
