import Avatar from "./Avatar";
import { ViewGridIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <div className="flex w-full p-5 justify-between text-sm text-gray-700">
      <div className="flex space-x-4 items-center">
        <p className="link"></p>
        <p className="link"></p>
      </div>
      <div className="flex space-x-4 items-center">
        <p className="link">Gmail</p>
        <p className="link">Images</p>

        <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sign in
        </button>
        <Avatar url="https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg" />
      </div>
    </div>
  );
}

export default Header;
