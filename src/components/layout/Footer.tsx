import React from "react";
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Link from "next/link";
import Newslatter from "../_child/Newslatter";

function Footer() {
  const bg = {
    backgroundImage: "url('/images/footer.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom left",
  };
  return (
    <div>
      <footer className="bg-gray-50" style={bg}>
        <Newslatter />
        <div className=" container mx-auto flex justify-center py-12 px-2">
          <div className="py-5">
            <div className="flex justify-center gap-4">
              <Link href={"/"} legacyBehavior>
                <a>
                  <ImFacebook className=" text-gray-900 md:text-gray-400"/>
                </a>
              </Link>
              <Link href={"/"} legacyBehavior>
                <a>
                  <ImTwitter className=" text-gray-900 md:text-gray-400"/>
                </a>
              </Link>
              <Link href={"/"} legacyBehavior>
                <a>
                  <ImYoutube className=" text-gray-900 md:text-gray-400"/>
                </a>
              </Link>
            </div>
            <p className=" text-gray-900 md:text-gray-400 py-5 flex justify-center items-center text-center">
              Copyright &copy;2022 all rights reserved | This template is made with by Mizanur Rahman
            </p>
            <p className=" text-gray-900 md:text-gray-400 text-center">Terms & Condition</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
