import React from "react";
import Link from "next/link";

const Author: React.FC<{
  author: {
    name: string;
    img: string;
    designation: string;
  };
}> = ({ author }) => {
  return (
    <div>
      <div className="flex gap-6">
        <div className=" w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden">
          <img className="object-cover" src={author.img} alt="my image" />
        </div>

        <div className=" flex flex-col justify-center">
          <Link href={"/"}>
            <span className=" text-sm sm:text-md font-semibold text-gray-700 hover:text-gray-600">{author.name}</span>
          </Link>
          <span className="text-xs sm:text-sm mt-1 text-gray-500">{author.designation}</span>
        </div>
      </div>
    </div>
  );
};

export default Author;
