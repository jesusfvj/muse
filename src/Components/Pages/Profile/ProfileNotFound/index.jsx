import { Logo } from "../../../Logo";
import { Typography } from "../../../Typography";

export const ProfileNotFound = ({ message }) => {
  return (
    <div className="h-screen w-screen bg-gradient-to-b from-[#4A4A4A] to-[#373f3f] flex flex-col gap-4 items-center justify-center">
      <Typography
        text={message ? message : "User not found . . ."}
        color="white"
        type="big"
        styles="mb-8"
      />
      <div className="animate-wiggle">
        <Logo logoSize="fit" hasText={false} />
      </div>
    </div>
  );
};
