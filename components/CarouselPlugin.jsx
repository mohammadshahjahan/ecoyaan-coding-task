"use client";

import * as React from "react";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

import img1 from "@/public/carousel-1.png";
import img2 from "@/public/carousel-2.png";
import img3 from "@/public/carousel-3.png";

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 1500, stopOnInteraction: false })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="-ml-1 lg:-mt-72">
        <CarouselItem key={1} className="">
          <div className="p-1">
            <div>
              <div className="flex aspect-square items-center justify-center p-6">
                <Image src={img1} alt="image" />
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem key={2} className="">
          <div className="p-1">
            <div>
              <div className="flex aspect-square items-center justify-center p-6">
                <Image src={img2} alt="image" />
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem key={3} className="">
          <div className="p-1">
            <div>
              <div className="flex aspect-square items-center justify-center p-6">
                <Image src={img3} alt="image" />
              </div>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
