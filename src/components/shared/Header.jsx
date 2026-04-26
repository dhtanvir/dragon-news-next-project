import React from "react";
import logo from "../../assets/logo.png";
import Image from "next/image";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="container mx-auto text-center py-10 space-y-4">
      <Image
        src={logo}
        alt="Logo"
        width={500}
        height={100}
        className="mx-auto"
      />
      <h6 className="text-balance text-[#706F6F]">
        Journalism Without Fear or Favour
      </h6>
      <p className="text-balance text-[#706F6F]">
        {format(new Date(), 'EEEE, MMMM do, yyyy')}
      </p>
    </div>
  );
};

export default Header;
