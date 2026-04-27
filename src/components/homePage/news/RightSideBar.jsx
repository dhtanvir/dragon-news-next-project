"use client";

import { authClient } from "@/lib/auth-client";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSideBarPage = () => {
  const handleGoogleSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  const handleGithubSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-bold">Login With</h2>
      <button
        className="btn btn-outline text-blue-500"
        onClick={handleGoogleSignin}
      >
        <FaGoogle /> login with Google
      </button>
      <button className="btn btn-outline " onClick={handleGithubSignin}>
        <FaGithub /> login with Github
      </button>
    </div>
  );
};

export default RightSideBarPage;
