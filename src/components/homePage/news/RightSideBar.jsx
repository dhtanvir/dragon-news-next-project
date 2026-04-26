import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSideBarPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-bold">Login With</h2>
      <button className="btn btn-outline text-blue-500">
        <FaGoogle /> login with Google
      </button>
      <button className="btn btn-outline ">
        <FaGithub /> login with Github
      </button>
    </div>
  );
};

export default RightSideBarPage;
