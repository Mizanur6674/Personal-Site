import React from "react";

function Newslatter() {
  return (
    <div>
      <div className=" container mx-auto md:px-20 py-12 text-center">
        <h1 className="text-gray-900 text-3xl font-bold">Subscribe Newslatter</h1>
        <div className="py-4">
          <input type="text" className=" px-3 py-3 border rounded shadow w-9/12 focus:outline-none focus:shadow-outline" />
        </div>
        <button className="px-20 py-2 shadow bg-orange-400 text-white rounded-full">Subscribe</button>
      </div>
    </div>
  );
}

export default Newslatter;
