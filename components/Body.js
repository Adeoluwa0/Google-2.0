import { SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Body() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <div className="flex flex-col flex-grow">
      <form className="flex flex-col items-center mt-[42px]">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          width={300}
          height={100}
        />
        <div
          className="flex w-full mt-5 hover:shadow-lg
        focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center
        sm:max-w-xl lg:max-w-2xl"
        >
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow focus:outline-none"
          />
        </div>
        <div
          className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0
        sm:flex-row sm:space-x-4"
        >
          <button onClick={search} className="btn">
            Google Search
          </button>
          <Link href="https://perfects.engineering">
            <button className="btn">I'm Feeling Lucky</button>
          </Link>
        </div>
        <div className="flex flex-wrap space-x-3 mt-8 justify-center ">
          <p className="">Google offered in:</p>
          <p className="link text-[#1a0dab]">Hausa</p>
          <p className="link text-[#1a0dab]">Igbo</p>
          <p className="link text-[#1a0dab]">Èdè Yorùbá</p>
          <p className="link text-[#1a0dab]">Nigerian Pidgin</p>
        </div>
      </form>
    </div>
  );
}

export default Body;
