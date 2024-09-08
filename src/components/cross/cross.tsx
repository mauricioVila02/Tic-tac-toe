import { IFigure } from "../../global/interfaces";
import FigureContainer from "../figureContainer/figureContainer";
import "./../../styles/cross.css";

const Cross = (props: IFigure) => {
  const { color = "blue" } = props;
  return (
    <FigureContainer
      {...props}
      className="mv-cross position-relative d-flex justify-content-center"
    >
      <div style={{ color }} />
      <div style={{ color }} />
    </FigureContainer>
  );
};

export default Cross;
