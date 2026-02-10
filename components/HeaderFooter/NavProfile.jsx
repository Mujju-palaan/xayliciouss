import { CgProfile } from "react-icons/cg";

const NavProfile = () => {
  return (
    <button
      aria-label="Account"
      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white/40 sm:h-10 sm:w-10"
    >
      <CgProfile className="text-lg text-white" />
    </button>
  );
};

export default NavProfile;
