import { FC } from "react";
import "./Button.scss";

type ButtonStyle = "btn--primary" | "btn--outline";

type ButtonSize = "btn--medium" | "btn--large" | "btn--mobile" | "btn--wide";

type ButtonColor = "primary" | "blue" | "red" | "green";

type ButtonProps = {
  type?: "button" | "submit";
  onClick?: () => void;
  buttonStyle?: ButtonStyle;
  buttonSize?: ButtonSize;
  buttonColor?: ButtonColor;
};

export const Button: FC<ButtonProps> = ({
  children,
  type = "button",
  onClick,
  buttonStyle = "btn--primary",
  buttonSize = "btn--medium",
  buttonColor,
}) => {
  return (
    <button
      className={`btn ${buttonStyle} ${buttonSize} ${buttonColor}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
