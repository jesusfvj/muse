import { Typography } from "../Typography";

export const EmptyDefault = ({ text, height, styles, error = false }) => {
  return (
    <>
      <Typography type="big" text={text} color="white" styles={styles} />
      <div className="w-full h-[6rem] sm:h-[10rem] md:h-[13rem] mt-[1rem]">
        <div
          className={`h-full w-full text-center flex justify-center items-center bg-gray-400/20 shadow-md ${styles}`}
        >
          <Typography
            color="secondary"
            text={
              error
                ? "Ooops... Something happened..."
                : "Nothing yet in this section"
            }
            styles="z-3 relative"
          />
        </div>
      </div>
    </>
  );
};
