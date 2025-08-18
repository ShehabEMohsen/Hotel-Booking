import React from "react";

interface ButtonProps {
  text: string;
  color: string;
}

const Button: React.FC<ButtonProps> = ({
    text, color
}) => {
  return (
    <div className={`bg-[${color}] h-12 px-8 text-center items-center text-black flex rounded-xs cursor-pointer`}>{text}</div>
  );
};

export default Button;
