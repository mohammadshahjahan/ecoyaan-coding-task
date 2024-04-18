import img1 from "@/public/trustImage.jpeg";
import img2 from "@/public/Authenticity.png";
import img3 from "@/public/ImpactIMg.jpg";
import img4 from "@/public/FunAndEngaging.png";
import Image from "next/image";

const Values = () => {
  return (
    <div className="p-4">
      <div>
        <h1 className="text-green-950 text-3xl mb-4">Our Values</h1>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="text-center flex items-center justify-center m-4">
          <Image src={img1} alt="image" height={150} />
        </div>
        <div className="text-center flex items-center justify-center m-4">
          <Image src={img2} alt="image" height={150} />
        </div>
        <div className="text-center flex items-center justify-center m-4">
          <Image src={img3} alt="image" height={150} />
        </div>
        <div className="text-center flex items-center justify-center m-4">
          <Image src={img4} alt="image" height={150} />
        </div>
      </div>
    </div>
  );
};

export default Values;
