import { Logo } from "../../../Logo";
import { Typography } from "../../../Typography";

export const ProfileLoader = ({modal = false, text = ""}) => {
  return (
    <div className={`fixed h-screen w-screen top-0 bottom-0 left-0 right-0 ${modal ? 'backdrop-blur-md' : 'bg-gradient-to-b from-[#4A4A4A]'} to-[#373f3f] flex items-center justify-center`}>
      <div className="animate-wiggle flex flex-col items-center gap-4">
        <Logo logoSize="fit" hasText={false} />
        <Typography
          text={text}
          color="white"
          type="big"
          />
      </div>
    </div>
  );
};

/* from-[#4A4A4A] to-[#373f3f] */