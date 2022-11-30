import React from "react";
import Author from "../../components/_child/Author";
import Image from "next/image";
import PageRelated from "../../components/_child/PageRelated";
import getPost from "../../../lib/helper";
import { PostProps } from "../../types/PostProps";

const page: React.FC<PostProps> = ({ title, img, description, author, subtitle }) => {
  // return <div>Hello</div>;
  return (
    <div>
      <section className=" container mx-auto px-2 py-16 w-full md:w-11/12">
        <div className=" flex justify-center">
          {author ? <Author author={author} /> : null}
        </div>
        <div className="py-10">
          <h1 className="text-4xl text-gray-800 font-bold text-center">{title}</h1>

          <p className="py-3 text-gray-500 text-center">{subtitle}</p>
          <div className="py-10 relative">
            <Image src={img} className="mx-auto" width={900} height={600} alt="content image" />
          </div>
          <div className="content text-gray-500 text-lg flex flex-col gap-4">
            <p>{description}</p>
          </div>
        </div>
        <PageRelated></PageRelated>
      </section>
    </div>
  );
};

export default page;

export async function getStaticProps({ params }: any) {
  const posts = await getPost(params.postId);
  return {
    props: posts,
  };
}

export async function getStaticPaths() {
  const posts = await getPost();
  const paths = posts.map((value: any) => {
    return {
      params: {
        postId: value.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
