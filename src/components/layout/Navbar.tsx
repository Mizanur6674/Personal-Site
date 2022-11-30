import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Link from "next/link";
function Navbar() {
  return (
    <div>
      <header className="bg-gray-50">
        <div className="xl:container xl:mx-auto flex flex-col items-center justify-center sm:flex-row sm:justify-between text-center py-3 px-4">
          <div className="md:flex-none w-96 order-2 sm:order-1 py-4 sm:py-0">
            <input className=" input-text" type="text" placeholder="Search..." />
          </div>

          <div className=" shirnk w-80 sm:order-2">
            <Link href={"/"} legacyBehavior>
              <a className="text-bold uppercase text-4xl">Design</a>
            </Link>
          </div>

          <div className="flex justify-center gap-6 order-3">
            <Link href={"/"} legacyBehavior>
              <a>
                <ImFacebook color="#888" />
              </a>
            </Link>
            <Link href={"/"} legacyBehavior>
              <a>
                <ImTwitter color="#888" />
              </a>
            </Link>
            <Link href={"/"} legacyBehavior>
              <a>
                <ImYoutube color="#888" />
              </a>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
