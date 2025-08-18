import React from "react";

interface ButtonProps {
  text: string;
  color: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
    text, color, className = ''
}) => {
  return (
    <div 
      className={`inline-flex items-center justify-center h-12 px-6 sm:px-8 text-center font-medium rounded-sm cursor-pointer transition-colors duration-200 ${
        color === '#ffffff' 
          ? 'bg-white text-black hover:bg-gray-100' 
          : 'bg-[#e5c464] text-black hover:bg-[#d4b356]'
      } ${className}`}
    >
      {text}
    </div>
  );
};

export default Button;
