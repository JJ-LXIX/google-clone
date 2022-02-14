import React from "react";

const HeaderOptionItems = ({ Icon, title, selected }) => {
  return (
    <div
      className={`flex items-center space-x-1 border-b-4 border-transparent hover:border-blue-300 pb-3 hover:text-blue-300 cursor-pointer ${
        selected && "text-blue-300 border-blue-300"
      }`}
    >
      <Icon className="h-4" />
      <p className="hidden sm:inline-flex">{title}</p>
    </div>
  );
};

export default HeaderOptionItems;
