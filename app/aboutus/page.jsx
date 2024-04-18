import Story from "@/components/Story";
import Team from "@/components/Team";
import React from "react";
import { LuLeaf } from "react-icons/lu";
import img from "@/public/nature.png";
import Image from "next/image";
import Values from "@/components/Values";

const AboutUsPage = () => {
  return (
    <div className="p-11">
      <div className="grid md:grid-cols-2 gap-4 sm:grid-cols-1 bg-slate-100 p-5 rounded-2xl">
        <div>
          <h1 className="text-green-950 text-3xl mb-4">About Ecoyaan</h1>
          <div>
            At Ecoyaan, we are more than just a platform. Our goal is to build a
            community of eco-conscious people who share a common vision and
            passion for a more sustainable world.
          </div>
          <div>
            We recognize that sustainability is a journey (as the Sanskrit word
            “yaan” suggests). To keep you motivated on this journey, on our
            platform and our social media pages, you can find:
          </div>
          <div>
            <ul>
              <li>
                <div className="flex">
                  <LuLeaf />
                  Tips and tricks to adopt a more eco-friendly and low-waste
                  lifestyle
                </div>
              </li>

              <li>
                <div className="flex">
                  <LuLeaf />
                  Videos, posts, and quizzes on climate change and
                  sustainability
                </div>
              </li>

              <li>
                <div className="flex">
                  <LuLeaf />
                  Events and pledges that invite you to adopt a more sustainable
                  lifestyle
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="text-center flex items-center justify-center">
            <Image src={img} alt="image" height={400} />
          </div>
        </div>
      </div>
      <Values />
      <Story />
      <Team />
    </div>
  );
};

export default AboutUsPage;
