import "./Input.styles.scss";

type InputProps = {
  children?: React.ReactNode;
};

const Input = ({}: InputProps) => {
  return (
    <div data-testid="Input" className="Input">
      Input
    </div>
  );
};

export default Input;
