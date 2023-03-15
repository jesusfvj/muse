import React from "react";

export const Button = ({
  text,
  size = "md",
  color = "primary",
  outlined = false,
  disabled = false,
  onClick,
}) => {
  const buttonColors = {
    primary: {
      fill: "bg-gradient-to-tl from-indigo-900 to-blue-500 text-gray-50 enabled:hover:brightness-105",
      outlined:
        "border border-blue-500 bg-transparent text-white enabled:hover:bg-gradient-to-tl from-indigo-900 to-blue-500",
    },
    secondary: {
      fill: "bg-gradient-to-tl from-green-900 to-green-500 text-gray-50  enabled:hover:brightness-105",
      outlined:
        "border border-green-500/90 bg-transparent text-white enabled:hover:bg-gradient-to-tl from-green-900 to-green-500 ",
    },
    danger: {
      fill: "bg-gradient-to-tl from-red-900 to-red-500 text-gray-50  enabled:hover:brightness-105",
      outlined:
        "border border-red-500/90 bg-transparent text-white enabled:hover:bg-gradient-to-tl from-red-900 to-red-500",
    },
  };
console.log(outlined)
  const sizes = {
    md: "text-sm lg:text-base px-5 py-2",
    sm: "text-xs lg:text-sm px-4 py-1",
  };

  const type = outlined ? "outlined" : "fill";
  const disabledClass = disabled ? "opacity-50" : "";

  const finalClassName = `centered rounded flex inline-flex justify-center items-center transition ${sizes[size]} ${buttonColors[color][type]} ${disabledClass} hover:${buttonColors[color][type]}/80`;
  return (
    <button disabled={disabled} onClick={onClick} className={finalClassName}>
      {text}
    </button>
  );
};
