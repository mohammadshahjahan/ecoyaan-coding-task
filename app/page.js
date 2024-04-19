import Image from "next/image";
import img from "@/public/comnumity.png";
import img2 from "@/public/pr.png";
import img3 from "@/public/buisiness.png";

export default function Home() {
  return (
    <div className="bg-slate-100">
      <div className="grid md:grid-cols-2 gap-4 sm:grid-cols-1 bg-slate-100 p-10 rounded-2xl">
        <div>
          <h1 className="text-green-950 text-5xl mb-4">
            Join our community in creating a more sustainable future for
            everyone
          </h1>
          <div className="mt-3 mb-3">
            At Ecoyaan, we are more than just a platform. Our vision is to build
            an eco-conscious community for people and products.
          </div>
          <div>
            Consider us your partner for all things sustainable. To keep you
            motivated on the journey, we will provide you with engaging
            information about climate change, the latest updates on climate
            policies and lifestyle tips that you can adopt to reduce your impact
            on the environment.
          </div>
        </div>
        <div>
          <div className="text-center flex items-center justify-center">
            <Image src={img} alt="image" height={400} />
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4 sm:grid-cols-1 bg-slate-100 p-10 rounded-2xl">
        <div>
          <h1 className="text-green-950 text-5xl mb-4">
            Carefully curated Eco-friendly products
          </h1>
          <div className="mt-3 mb-3">
            We believe that every purchase you make can have a positive impact
            on the planet and the future.
          </div>
          <div>
            Soon, we will be connecting you with eco-friendly and sustainable
            products that are carefully selected based on their environmental
            and social benefits.
          </div>
        </div>
        <div>
          <div className="text-center flex items-center justify-center">
            <Image src={img2} alt="image" height={400} />
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4 sm:grid-cols-1 bg-slate-100 p-10 rounded-2xl">
        <div>
          <h1 className="text-green-950 text-5xl mb-4">
            For businesses that care deeply about sustainability
          </h1>
          <div className="mt-3 mb-3">
            Do you run a business that is committed to sustainability in every
            aspect of your work?
          </div>
          <div className="mt-3 mb-3">
            Do you want to showcase your products to an incredible audience of
            eco-conscious consumers who care?
          </div>
          <div>
            If yes, then you are the perfect fit for our platform. Our community
            appreciates and supports businesses that are transparent, ethical,
            and innovative in their approach to sustainability. Contact us
            today:
          </div>
        </div>
        <div>
          <div className="text-center flex items-center justify-center">
            <Image src={img3} alt="image" height={400} />
          </div>
        </div>
      </div>
      <div className="pl-11 pb-11">
        <button className="bg-green-600 text-white h-14 w-28">
          Contact Us
        </button>
      </div>
    </div>
  );
}
