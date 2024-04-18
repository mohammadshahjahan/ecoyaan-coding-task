import React from "react";
import img5 from "@/public/abhishek.png";
import img6 from "@/public/sarwan.png";
import Image from "next/image";
import Link from "next/link";

const Story = () => {
  return (
    <div className="bg-slate-100 rounded-lg">
      <h1 className="text-green-950 text-3xl p-6">Our Story</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="flex justify-center items-center">
          <Image src={img5} alt="image" height={180} />
        </div>

        <div className="col-span-3">
          <div className="p-3">
            We started Ecoyaan after watching an episode of “Our Planet II”,
            where we saw the devastating impact of plastic pollution and climate
            change on the albatross birds. That moment ignited our mission.
          </div>

          <div className="p-3">
            Our research suggests that many Indians understand global warming,
            yet access to sustainable practices and products remains limited. We
            also noticed that there is a lack of support for eco-friendly
            businesses.
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image src={img6} alt="image" height={180} />
        </div>

        <div className="col-span-3">
          <div className="p-3">
            We created Ecoyaan to connect consumers, businesses, and
            sustainability experts. We want to make it easy and convenient for
            people to access eco-friendly products and services, learn and share
            best practices, and support sustainability initiatives.
          </div>

          <div className="p-3">
            As founders, we are not perfect, but we are passionate. We believe
            that every small step matters. Join us and be a part of the Ecoyaan
            community — together, we’ll make a difference.
          </div>
        </div>
      </div>
      <div className="text-center pb-4">
        <span className="mr-3">
          Connect with the founders on LinkedIn here:
        </span>

        <Link
          href="https://www.linkedin.com/in/abhishek-rao-k"
          className="underline text-blue-900 mr-3"
        >
          Abhishek Rao
        </Link>
        <Link
          href="https://www.linkedin.com/in/abhishek-rao-k"
          className="underline text-blue-900"
        >
          Sarwanjeet Singh
        </Link>
      </div>
    </div>
  );
};

export default Story;
