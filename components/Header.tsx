import Image from 'next/image';
import Link from 'next/link';

function Header() {
  return (
    <header className="flex p-5 justify-between sticky top-0 bg-white z-50 shadow-md">
      <div className="flex space-x-2 items-center">
        <Image
          src="https://links.papareact.com/4t3"
          width={30}
          height={30}
          alt="logo"
        />
        <div>
          <h1 className="font-bold">
            Image <span className="text-violet-500">AI</span> Genarator
          </h1>
          <h2 className="text-xs">
            Powered by DALL-E 2, ChatGPT & Microsoft Azure!
          </h2>
        </div>
      </div>

      <div className="flex items-center text-xs md:text-base divide-x">
        <Link
          target="_blank"
          href="https://tazkir-furqan.vercel.app/"
          className="px-2 font-light text-right"
        >
          Portfolio
        </Link>
        <Link
          href="https://github.com/Tazkir/dall-e-clone"
          target="_blank"
          className="px-2 font-light text-right"
        >
          Github Repo
        </Link>
      </div>
    </header>
  );
}

export default Header;
