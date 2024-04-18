import Image from "next/image";
import React from "react";

const Card = ({ imageUrl, name, role, bio }) => {
  return (
    <div className="p-3 pb-5">
      <div className="text-center flex items-center justify-center">
        <Image src={imageUrl} alt="image" height={120} />
      </div>
      <div className="font-bold text-center">{name}</div>
      <div className="text-center text-red-500">{role}</div>
      <div className="text-center">{bio}</div>
    </div>
  );
};

export default Card;
