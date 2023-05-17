export const Button = ({
  text,
  size = "md",
  color = "primary",
  textWhite = false,
  outlined = false,
  disabled = false,
  typeButton = "button",
  onClick,
  onChange,
  icon,
  isLabel = false,
  htmlFor,
  refElement,
  styles
}) => {
  const buttonColors = {
    primary: {
      fill: `bg-gradient-to-tl from-indigo-900 to-blue-500 ${textWhite ? 'text-white': 'text-gray-50'} enabled:hover:brightness-105`,
      outlined:
        "border border-blue-500 bg-transparent text-gray-300 enabled:hover:bg-gradient-to-tl from-indigo-900 to-blue-500",
    },
    secondary: {
      fill: "bg-gradient-to-tl from-green-900 to-green-500 text-gray-50  enabled:hover:brightness-105",
      outlined:
        "border border-green-500/90 bg-transparent text-gray-300 enabled:hover:bg-gradient-to-tl from-green-900 to-green-500 ",
    },
    danger: {
      fill: "bg-gradient-to-tl from-red-900 to-red-500 text-gray-50  enabled:hover:brightness-105",
      outlined:
        "border border-red-500/90 bg-transparent text-gray-300 enabled:hover:bg-gradient-to-tl from-red-900 to-red-500",
    },
    gray: {
      fill: `bg-gradient-to-tl from-gray-900 to-gray-500 ${textWhite ? 'text-white': 'text-gray-300'}  enabled:hover:brightness-105`,
      outlined:
        `border border-gray-500/90 bg-transparent ${textWhite ? 'text-white': 'text-gray-300'} enabled:hover:bg-gradient-to-tl from-gray-900 to-gray-500`,
    },
    black: {
      fill: "bg-gradient-to-tl from-[#02050d] to-gray-700 text-gray-300  enabled:hover:brightness-150",
      outlined:
        "border border-gray-500/90 bg-transparent text-gray-300 enabled:hover:bg-gradient-to-tl from-gray-900 to-gray-500",
    },
    transparent: {
      fill: "transparent",
      outlined:
        "",
    }
  };

  const sizes = {
    md: "text-sm lg:text-base px-5 py-2",
    sm: "text-xs lg:text-sm px-4 py-1",
    xs: "text-xs lg:text-xs px-3 py-1",
  };

  const type = outlined ? "outlined" : "fill";
  const disabledClass = disabled ? "opacity-50" : "";

  const finalClassName = `w-full h-full lato font-semibold centered rounded flex inline-flex gap-2 justify-center items-center cursor-pointer transition ${sizes[size]} ${buttonColors[color][type]} ${disabledClass} hover:${buttonColors[color][type]}/80 active:scale-[0.995] active:translate-y-[0.5px]`;
  return (
    isLabel ?
      (<label htmlFor={htmlFor} disabled={disabled} onClick={onClick} className={finalClassName} type={typeButton}>
      {icon && icon} {text}
      </label>)
      :(
      <button disabled={disabled} onClick={onClick} className={`${finalClassName} ${styles}`} type={typeButton} ref={refElement}>
      {icon && icon} {text}
      </button>)
  );
};
