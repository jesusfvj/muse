export const RoundButton = ({
  color = "white",
  background = "white",
  icon,
  onClick,
}) => {
  const colors = {
    white: "text-gray-200",
    gray: "text-gray-600",
  };

  const backgrounds = {
    white: "bg-gray-200",
    gray: "bg-gray-600",
  };

  const finalClassName = `w-full h-full rounded-full flex items-center justify-center bg-slate-600 ${colors[color]} ${backgrounds[background]}`;

  return (
    <button className={finalClassName} onClick={onClick && onClick}>
      {icon}
    </button>
  );
};
