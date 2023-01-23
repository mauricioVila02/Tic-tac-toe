const Button = (props: IButton) => {
  const { backgroundColor = "cornflowerblue", color = "white" } = props;
  return (
    <button
      onClick={props.onClick}
      className="mv-button p-2"
      style={{ color, backgroundColor }}
    >
      {props.text}
    </button>
  );
};

interface IButton {
  text?: string;
  color?: string;
  backgroundColor?: string;
  onClick?: () => void;
}

export default Button;
