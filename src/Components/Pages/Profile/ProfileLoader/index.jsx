import { Logo } from "../../../Logo";

export const ProfileLoader = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-b from-[#4A4A4A] to-[#373f3f] flex items-center justify-center">
      <div className="animate-wiggle">
        <Logo logoSize="fit" hasText={false} />
      </div>
    </div>
  );
};
