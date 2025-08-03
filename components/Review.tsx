"use client";
// import React from 'react'
import Image from "next/image";
import Container from "@/components/ui/container";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// import  Container  from "@component/"

interface Images {
  src: string;
  url: string | null;
  name: string;
}
const images: Images[] = [
  {
    src: "/home-page/marquee/jahannuma.png",
    url: "https://jahan-numa.org",
    name: "Jahan Numa",
  },
  {
    src: "/home-page/marquee/asklive.jpg",
    url: "https://www.instagram.com/_asklive/",
    name: "ASK Live",
  },
  {
    src: "/home-page/marquee/kmwf.png",
    url: "http://kmwf.in",
    name: "Khadim-e-Millat Welfare Foundation",
  },
  {
    src: "/home-page/marquee/hqmeds.jpg",
    url: "https://www.hqmedsindia.com/",
    name: "HQ Meds",
  },
  {
    src: "/home-page/marquee/mankindmedicare.jpg",
    url: "https://www.mankindmedicare.com",
    name: "ManKind Medicare",
  },
  {
    src: "/home-page/marquee/alibaba.png",
    url: "https://alibaba.com",
    name: "Ali Baba",
  },
  {
    src: "/home-page/marquee/facebook.png",
    url: "https://facebook.com",
    name: "Facebook",
  },
  {
    src: "/home-page/marquee/fareye.webp",
    url: "https://fareye.com",
    name: "Far Eye",
  },
  {
    src: "/home-page/marquee/kaartech.webp",
    url: "https://www.kaartech.com/",
    name: "Kaar Tech",
  },
  {
    src: "/home-page/marquee/meta.png",
    url: "https://www.meta.com",
    name: "Meta",
  },
];

const Review = () => {
  return (
    <section className="py-12">
      <Container>
        <Swiper
          navigation
          pagination={{ type: "fraction" }}
          modules={[Navigation, Pagination]}
          className="h-[200PX] flex w-full rounded-lg"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex h-full w-full items-center justify-center">
                <Image
                  src={image.src}
                  alt={image.name}
                  width={200}
                  height={200}
                  className="block h-full w-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Review;
