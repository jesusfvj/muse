export const Typography = ({
  text,
  type = "p1",
  color = "primary",
  family = "lato",
  styles = "",
}) => {
  const types = {
    title: `text-xl sm:text-4xl font-bold`,
    subtitle: `text-base sm:text-2xl font-medium`,
    headline: `text-5xl xs:text-7xl sm:text-8xl font-bold`,
    important: `text-2xl sm:text-5xl font-bold`,
    big: `text-xl sm:text-4xl font-bold`,
    p0: `text-xl sm:text-2xl font-normal`,
    p1: `text-sm sm:text-lg font-normal`,
    p2: `text-xs sm:text-md font-normal`,
    section: `text-2xl sm:text-4xl font-bold`,
    subSection: `text-2xl sm:text-lg font-normal`,
  };

  const colors = {
    black: "text-black",
    white: "text-white",
    primary: "text-gray-400",
    secondary: "text-gray-500",
    transparent: "text-gray-500/0",
    danger: "text-red-400"
  };

  const fontFamily = {
    lato: "lato",
    pilonyc: "pilonyc tracking-widest",
  };

  const finalClassName = `${types[type]} ${colors[color]} ${fontFamily[family]} ${styles} transition duration-500`;

  switch (type) {
    case "p0":
    case "p1":
    case "p2":
    case "important":
    case "big":
    case "headline":
    case "section":
    case "subSection":
      return <p className={finalClassName}>{text}</p>;
    case "title":
      return <h1 className={finalClassName}>{text}</h1>;
    case "subtitle":
      return <h2 className={finalClassName}>{text}</h2>;
    default:
      break;
  }
};
