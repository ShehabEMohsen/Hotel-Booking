import React from "react";

interface FlareProps {
  text: string;
}

const Flare: React.FC<FlareProps> = ({
    text
}) => {
  return (
    <div className="bg-white min-w-auto w-38 px-1 py-1 rounded-sm text-[#1f8f69] font-bold text-sm text-center capitalize shadow-lg">{text}</div>
  );
};

export default Flare;
