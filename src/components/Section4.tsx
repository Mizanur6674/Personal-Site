import React from "react";
import Image from "next/image";
import Link from "next/link";
import Author from "./_child/Author";
import fetcher from "../../lib/fetcher";
import Spinner from "./_child/Spinner";
import Error from "./_child/Error";
import { PostProps } from "../types/PostProps";

function Section4() {
  const { data, isLoading, isError } = fetcher<PostProps[]>("api/posts");
  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <Error></Error>;
  return (
    data && (
      <div>
        <section className="container mx-auto md:px-20 py-10">
          <div className="grid lg:grid-cols-2 gap-4">
            <div className="business">
              <h1 className="text-gray-900 text-3xl font-bold pb-6 px-2">Business</h1>
              <div className="travel flex flex-col gap-6">
                {data[0] ? <Cat data={data[0]}></Cat> : <></>}
                {data[2] ? <Cat data={data[2]}></Cat> : <></>}
                {data[3] ? <Cat data={data[3]}></Cat> : <></>}
              </div>
            </div>
            <div className="travel">
              <h1 className="text-gray-900 text-3xl font-bold pb-6 px-2">Travel</h1>
              <div className="travel flex flex-col gap-6">
                {data[4] ? <Cat data={data[4]}></Cat> : <></>}
                {data[5] ? <Cat data={data[5]}></Cat> : <></>}
                {data[1] ? <Cat data={data[1]}></Cat> : <></>}
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  );
}

export default Section4;
const Cat: React.FC<{ data: PostProps }> = ({ data: { id, title, category, img, published, author, subtitle } }) => {
  return (
    <div className="flex gap-5 px-2 items-center sm:items-start">
      <div className="image">
        <Link href={`/posts/${id}`}>
          <Image src={img} className="rounded" width={300} height={250} alt="category-image" />
        </Link>
      </div>
      <div className="flex flex-col">
        {/* for category */}
        <div>
          <Link href={`/posts/${id}`}>
            <span className="text-orange-600 hover:text-orange-800 text-xs sm:text-sm">{category}</span>
          </Link>
          <Link href={`/posts/${id}`}>
            <span className="text-gray-800 hover:text-gray-600 text-xs sm:text-sm">-{published}</span>
          </Link>
        </div>

        {/* for title */}
        <div>
          <Link href={`/posts/${id}`}>
            <span className="text-xs sm:text-xl text-gray-800 hover:text-gray-500 font-bold ">{title}</span>
          </Link>
        </div>
        {author.img ? <Author author={author}></Author> : <></>}
      </div>
    </div>
  );
};
