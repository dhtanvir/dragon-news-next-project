
import Image from "next/image";
import user_2 from "@/assets/user_2.png";
import NavLink from "./Navlink";

const Navbar = () => {
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
      <div className="flex items-center gap-4">
        {/* Profile Icon */}
        <div className="w-8 h-8 rounded-full overflow-hidden ">
          <Image
            src={user_2}
            alt="Profile"
            width={48}
            height={48}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Login Button */}
        <button className="bg-gray-800 text-white px-5 py-1.5 rounded">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
