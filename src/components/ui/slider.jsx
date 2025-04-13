import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from "../../lib/utils";

const slides = [
  {
    url: "https://indiachalk.com/wp-content/uploads/2021/11/Untitled-design-85.jpg",
    title: "Traditional Tribal Paintings",
  },
  {
    url: "https://www.giftedartisan.com/product_images/uploaded_images/crystalline-group-shot-1250-x-745.jpg",
    title: "Handcrafted Pottery",
  },
  {
    url: "https://thumbs.dreamstime.com/b/closeup-traditional-maasai-tribal-dress-featuring-bright-red-fabric-beaded-jewelry-342981016.jpg",
    title: "Tribal Jewelry",
  },
  {
    url: "https://w0.peakpx.com/wallpaper/1009/703/HD-wallpaper-fabric-abstract-pattern-fabric-textures-geometric-ornaments-fabric-patterns-fabric-backgrounds.jpg",
    title: "Textile Arts",
  },
];

export function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="relative h-[600px] w-full group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-500 relative"
      >
        <div className="absolute inset-0 bg-black/30">
          <div className="absolute bottom-10 left-10 text-white">
            <h2 className="text-4xl font-bold">{slides[currentIndex].title}</h2>
          </div>
        </div>
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ChevronLeft onClick={prevSlide} size={30} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ChevronRight onClick={nextSlide} size={30} />
      </div>
    </div>
  );
}