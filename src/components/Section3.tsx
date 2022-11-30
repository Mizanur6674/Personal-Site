import React from "react";
import Link from "next/link";
import Image from "next/image";
import Author from "./_child/Author";
import { Swiper, SwiperSlide } from "swiper/react";
import fetcher from "../../lib/fetcher";
import Spinner from "./_child/Spinner";
import Error from "./_child/Error";
import { PostProps } from "../types/PostProps";

function Section3() {
  const { data, isLoading, isError } = fetcher<PostProps[]>("api/popular");
  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <Error></Error>;
  return (
    <div>
      <section className=" container mx-auto md:px-20 py-10">
        <h1 className="text-3xl font-bold text-center text-gray-900 py-12">Most Popular</h1>
        {/* for swiper */}
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
        >
          {data &&
            data.map((value: any, index: any) => (
              <SwiperSlide key={index}>
                <Most data={value}></Most>{" "}
              </SwiperSlide>
            ))}
        </Swiper>
      </section>
    </div>
  );
}

export default Section3;
const Most: React.FC<{ data: PostProps }> = ({ data: { id, title, category, img, published, author, subtitle } }) => {
  return (
    <div className=" grid px-2">
      <div className="images">
        <Link href={"/"}>
          <Image src={img} width={600} height={400} alt="first images" />
        </Link>
      </div>
      <div className="flex flex-col justify-center py-4">
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
        <p className="py-3 text-gray-500">{subtitle}</p>

        {author.img ? <Author author={author}></Author> : <></>}
      </div>
    </div>
  );
};
