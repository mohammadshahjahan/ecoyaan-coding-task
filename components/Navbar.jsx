"use client";

import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="flex justify-between p-3  shadow-md">
      <div
        className="text-green-500 text-xl md:text-2xl cursor-pointer"
        onClick={() => router.push("/")}
      >
        Ecoyaan
      </div>
      <div className="flex space-x-3 align-bottom">
        <div className="cursor-pointer" onClick={() => router.push("/")}>
          Home
        </div>
        <div className="cursor-pointer" onClick={() => router.push("/aboutus")}>
          About Us
        </div>
      </div>
    </div>
  );
};

export default Navbar;
