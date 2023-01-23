
 export interface IFigure {
    size?: string | number
    color?: string;
    cursorPointer?: boolean
    opacityInHover?: boolean
    onClick?: () => void;
  }