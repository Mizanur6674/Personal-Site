import React from "react";
import Image from "next/image";
import Link from "next/link";
import Author from "./_child/Author";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
import fetcher from "../../lib/fetcher";
import Spinner from "./_child/Spinner";
import Error from "./_child/Error";
import { PostProps } from "../types/PostProps";

function Section1() {
  const { data, isLoading, isError } = fetcher<PostProps[]>("api/trending");
  if (isLoading || !data) return <Spinner></Spinner>;
  if (isError) return <Error></Error>;

  SwiperCore.use([Autoplay]);

  const bgImg = {
    background: "url('/images/banner.png') no-repeat",
    backgroundPosition: "right",
  };

  return (
    <div>
      <section className="py-16" style={bgImg}>
        <div className="container mx-auto md:px-20">
          <h1 className=" text-gray-900 font-bold text-center pb-12 text-3xl">Trending</h1>
          {/* for sliding use swiper */}
          <Swiper
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2000,
            }}
          >
            {data.map((value: any, index: any) => (
              <SwiperSlide key={index}>
                <Slide data={value}></Slide>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
}

export default Section1;

const Slide: React.FC<{ data: PostProps }> = ({ data: { id, title, category, img, published, author, subtitle } }) => {
  return (
    <div className="grid md:grid-cols-2 gap-4 px-2">
      <div className="images">
        <Link href={`/posts/${id}`}>
          <Image src={img} className="" width={600} height={600} alt="first images" />
        </Link>
      </div>
      <div className="flex flex-col justify-center">
        {/* for category */}
        <div>
          <Link href={`/posts/${id}`}>
            <span className="text-orange-600 hover:text-orange-800">{category}</span>
          </Link>
          <Link href={`/posts/${id}`}>
            <span className="text-gray-800 hover:text-gray-600">-{published}</span>
          </Link>
        </div>

        {/* for title */}
        <div>
          <Link href={`/posts/${id}`}>
            <span className="text-3xl md:text-4xl text-gray-800 hover:text-gray-500 font-bold">{title}</span>
          </Link>
        </div>
        <p className="py-3 text-gray-800 lg:text-gray-500">{subtitle}</p>

        {author.img ? <Author author={author}></Author> : <></>}
      </div>
    </div>
  );
};
