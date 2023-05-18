import { Typography } from "../Typography";

export const Logo = ({
  extraClassesParent = "",
  logoSize = "sm",
  fontType = "big",
  hasText = true,
}) => {
  const size = {
    xs: "w-8 h-8",
    sm: "w-16 h-16",
    md: "w-20 h-20",
    lg: "w-24 h-24",
    xl: "w-30 h-30",
    fit: "h-full w-1/5"
  };

  return (
    <div
      className={`w-screen flex flex-col justify-center items-center ${extraClassesParent}`}
    >
      <img
        src="https://res.cloudinary.com/dmufnezzd/image/upload/v1684419477/muze-image_file-folder/logoWhite_xxtkq5.png"
        alt="muze logo"
        className={size[logoSize]}
      />
      {hasText && (
        <Typography text="muze" type={fontType} color="white" family="lato" />
      )}
    </div>
  );
};
