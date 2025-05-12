import { useState } from "react";
import IKImage from "./Image";
import { Link } from "react-router-dom";
import { SignedOut } from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <IKImage src="logo.png" alt="logo" width={32} height={32} />
        <span>Blogz</span>
      </Link>

      <div className="md:hidden">
        <div
          className="cursor-pointer text-4xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "X" : "☰"}
        </div>

        <div
          className={`w-full h-screen flex flex-col gap-8 font-medium text-lg  items-center justify-center absolute top-16 transition-all ease-in-out bg-[#e6e6ff] ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          <Link to="/">Home</Link>
          <Link to="/">Trending</Link>
          <Link to="/">Most Popular</Link>
          <Link to="/">About</Link>
          <Link to="/login">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white cursor-pointer">
              Login
            </button>
          </Link>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Home</Link>
        <Link to="/">Trending</Link>
        <Link to="/">Most Popular</Link>
        <Link to="/">About</Link>
        <SignedOut>
          <Link to="">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white cursor-pointer">
              Login
            </button>
          </Link>
        </SignedOut>
      </div>
    </div>
  );
};

export default Navbar;
