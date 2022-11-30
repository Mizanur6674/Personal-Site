import Image from "next/image";

function Error() {
  return (
    <div>
      <div className=" text-center py-10">
        <h1 className="text-3xl font-bold text-orange-600 py-10">Something Went Wrong</h1>
        <Image className="mx-auto" src={"/images/not_found.png"} height={400} width={400} alt="error" />
      </div>
    </div>
  );
}

export default Error;
