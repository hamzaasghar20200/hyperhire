import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  classnames?: string;
}

const Button: React.FC<ButtonProps> = ({
  classnames,
  children,
  style,
  ...rest
}) => {
  return (
    <button className={`${classnames}`} style={style} {...rest}>
      {children}
    </button>
  );
};

export default Button;
