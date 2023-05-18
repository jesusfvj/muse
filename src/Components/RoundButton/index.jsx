export const RoundButton = ({
  color = "white",
  background = "gray",
  icon,
  onClick,
  margin
}) => {
  const colors = {
    white: "text-gray-200",
    gray: "text-gray-600",
    blue: "text-blue-900"
  };

  const backgrounds = {
    green: "bg-green-600",
    white: "bg-gray-200",
    gray: "bg-gray-600",
    dgray: "bg-gray-500",
    darkgray: "bg-gray-700",
    gradient: "bg-[url('../../../src/assets/textures/circularGradient.png')] bg-cover bg-center bg-no-repeat"
  };

  const finalClassName = `w-full h-full rounded-full flex items-center justify-center bg-slate-600 ${colors[color]} ${backgrounds[background]} ${margin}`;

  return (
    <button className={finalClassName} onClick={onClick && onClick}>
      {icon}
    </button>
  );
};