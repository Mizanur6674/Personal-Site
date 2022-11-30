import Image from "next/image";
import Link from "next/link";
import Author from "./Author";
import fetcher from "../../../lib/fetcher";
import Spinner from "./Spinner";
import Error from "./Error";
import { PostProps } from "../../types/PostProps";

function PageRelated() {
  const { data, isLoading, isError } = fetcher("api/posts");
  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <Error></Error>;
  return (
    <div>
      <section className=" pt-20">
        <h1 className=" text-bold text-gray-900 text-2xl px-2 pb-10">Related</h1>
        <div className="flex flex-col gap-10">
          {data.map((value: any, index: any) => (
            <Post data={value} key={index}></Post>
          ))}
        </div>
      </section>
    </div>
  );
}
export default PageRelated;

const Post: React.FC<{ data: PostProps }> = ({ data: { id, title, author, published, img, category } }) => {
  return (
    <div className="flex gap-5 px-2 items-center sm:items-start">
      <div className="image">
        <Link href={`/posts/${id}`}>
          <Image src={img} className="rounded" width={300} height={200} alt="category-image" />
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
            <span className="text-xs sm:text-xl text-gray-800 hover:text-gray-500 font-bold">{title}</span>
          </Link>
        </div>
        <div>{author ? <Author author={author} /> : <></>}</div>
      </div>
    </div>
  );
};
