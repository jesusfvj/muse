export const Typography = ({
  text,
  type = "p1",
  color = "primary",
  family = "lato",
  styles = ""
}) => {
  const types = {
    title: `text-xl sm:text-4xl font-bold`,
    subtitle: `text-base sm:text-2xl font-medium`,
    important: `text-2xl sm:text-5xl font-bold `,
    headline: `text-5xl sm:text-8xl font-bold`,
    big: `text-xl sm:text-4xl font-bold `,
    p1: `text-sm sm:text-lg font-normal`,
    p2: `text-xs sm:text-md font-normal`,
  };

  const colors = {
    white: "text-white",
    primary: "text-gray-400",
    secondary: "text-gray-500",
  };

  const fontFamily = {
    lato: "lato",
    pilonyc: "pilonyc tracking-widest",
  };

  const finalClassName = `${types[type]} ${colors[color]} ${fontFamily[family]} ${styles}`;

  switch (type) {
    case "p1":
    case "p2":
    case "important":
    case "big":
    case "headline":
      return <p className={finalClassName}>{text}</p>;
    case "title":
      return <h1 className={finalClassName}>{text}</h1>;
    case "subtitle":
      return <h2 className={finalClassName}>{text}</h2>;
    default:
      break;
  }
};
