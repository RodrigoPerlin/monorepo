import React from "react";
import ButtonStyles from "./Button.styles";

export interface IButtonProps {
  color?: string;
  background?: string;
  children: React.ReactNode;
}

const Button = ({ children, background, ...props }: IButtonProps) => {
  return (
    <ButtonStyles className="Button" background={background} {...props}>
      {children}
    </ButtonStyles>
  );
};
export default Button;
