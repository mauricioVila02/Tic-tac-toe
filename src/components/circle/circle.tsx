import { IFigure } from "../../global/interfaces";
import FigureContainer from "../figureContainer/figureContainer";
import "./../../styles/circle.css";

const Circle = (props: IFigure) => {
  const { size = 50, color = "red" } = props;
  return (
    <FigureContainer {...props} className="mv-circle">
      <div style={{ color }} />
    </FigureContainer>
  );
};

export default Circle;
