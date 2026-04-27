"use client";
import Image from "next/image";
import user_2 from "@/assets/user_2.png";
import NavLink from "./Navlink";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { BeatLoader, HashLoader } from "react-spinners";
import { on } from "../../../node_modules/nanostores/lifecycle/index";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;

  console.log(user, " session");

  return (
    <nav className="w-full bg-gray-200 px-6 py-3 flex items-center justify-between">
      <div></div>
      {/* Left side */}
      <ul className="flex gap-6 text-gray-700 font-medium ">
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/about-us">About</NavLink>
        </li>
        <li>
          <NavLink href="/career">Career</NavLink>
        </li>
      </ul>

      {/* Right side */}
      {/* Profile Icon */}
      {isPending ? (
        <BeatLoader />
      ) : user ? (
        <>
          <div className="flex items-center gap-4">
            <h2>Hello, {user?.name.toUpperCase()}</h2>
            <div className="w-8 h-8 rounded-full overflow-hidden ">
              <Image
                src={user?.image || user_2}
                alt="Profile"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Login Button */}

            <button
              onClick={async () => await authClient.signOut()}
              className="bg-gray-800 text-white px-5 py-1.5 rounded 
            hover:bg-gray-900 cursor-pointer"
            >
              LogOut
            </button>
          </div>
        </>
      ) : (
        <>
          <Link
            href="/login"
            className="bg-gray-800 text-white px-5 py-1.5 rounded 
            hover:bg-gray-900 cursor-pointer"
          >
            <button className="">Login</button>
          </Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
