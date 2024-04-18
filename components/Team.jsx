import React from "react";
import Card from "./Card";
import img1 from "@/public/divya.png";
import img2 from "@/public/shruthi.png";
import img3 from "@/public/urmil.png";
import img4 from "@/public/prashanith.png";
import img5 from "@/public/saiabhilash.png";

const Team = () => {
  return (
    <div>
      <h1 className="text-green-950 text-3xl p-6">Meet the team</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card
          imageUrl={img2}
          bio={
            "Shruthi is in charge of our Instagram. She is a practising Vegan and cares deeply about sustainability."
          }
          name={"SHRUTHI"}
          role={"SOCIAL MEDIA"}
        />
        <Card
          imageUrl={img3}
          bio={
            "Urmil creates engaging content for us. She runs her own sustainable apparel store with her sister and advocates for slow fashion."
          }
          name={"URMIL"}
          role={"SOCIAL MEDIA"}
        />
        <Card
          imageUrl={img1}
          bio={
            "Divya creates user-friendly and engaging interfaces for our platform. Check out more of her work on Behance"
          }
          name={"DIVYA"}
          role={"UX DESIGN"}
        />
        <Card
          imageUrl={img4}
          bio={
            "Prashanith is our front-end engineer, who brings the UX designs to life."
          }
          name={"PRASHANITH"}
          role={"ENGINEERING"}
        />
        <Card
          imageUrl={img5}
          bio={
            "Sai Abhilash is our back-end engineer, who manages and optimises the infrastructure and logic of our platform."
          }
          name={"SAI ABHILASH"}
          role={"ENGINEERING"}
        />
      </div>
    </div>
  );
};

export default Team;
