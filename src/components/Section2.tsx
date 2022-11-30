import React from "react";
import Link from "next/link";
import Image from "next/image";
import Author from "./_child/Author";
import fetcher from "../../lib/fetcher";
import Spinner from "./_child/Spinner";
import Error from "./_child/Error";
import { PostProps } from "../types/PostProps";

function Section2() {
  const { data, isLoading, isError } = fetcher<PostProps[]>("api/posts");
  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <Error></Error>;

  return (
    <div>
      <section className="container mx-auto md:px-20 py-10">
        <h1 className="text-3xl font-bold text-center text-gray-900 py-12">Latest Post</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
          {data && data.map((value: any, index: any) => <Post data={value} key={index}></Post>)}
        </div>
      </section>
    </div>
  );
}

export default Section2;

const Post: React.FC<{ data: PostProps }> = ({ data: { id, title, category, img, published, author, subtitle } }) => {
  return (
    <div className="items px-2">
      <div className="images">
        <Link href={`/posts/${id}`}>
          <Image src={img} className="rounded" width={500} height={350} alt="first images" />
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
            <span className="text-xl text-gray-800 hover:text-gray-500 font-bold">{title}</span>
          </Link>
        </div>
        <p className="py-3 text-gray-500">{subtitle}</p>

        {author.img ? <Author author={author}></Author> : <></>}
      </div>
    </div>
  );
};
