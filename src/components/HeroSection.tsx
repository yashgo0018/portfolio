import { TbExternalLink } from "react-icons/tb";
import { AiOutlineArrowRight } from "react-icons/ai";
import Navbar from "./Navbar";

function SocialLink({ link }: { link: Link }) {
  return (
    <a
      href={link.href}
      target="_blank"
      className="flex gap-1 sm:border-2 text-gray-400 hover:text-black sm:border-gray-400 hover:border-black sm:px-3 md:px-4 sm:py-2 rounded-xl"
    >
      <span className="my-auto hidden sm:block">
        <TbExternalLink />
      </span>
      <span className="sm:block hidden">{link.type}</span>
      <img
        src={link.icon.asset.url}
        className="my-auto w-8 h-8 sm:hidden"
        alt=""
      />
    </a>
  );
}

export default function HeroSection({
  shortDescription,
  links,
}: {
  shortDescription: string;
  links: Link[];
}) {
  return (
    <div className="h-screen relative md:mx-10 mx-5">
      <Navbar />
      <div className="absolute top-[50%] translate-y-[-50%]">
        <div className="text-6xl md:text-7xl xl:text-8xl">
          <div className="text-gray-400">I'm a</div>
          <div className="">
            Blockchain <span className="text-gray-400">&</span> Backend
            developer
          </div>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-3 mt-14 gap-8">
          <hr className="col-span-1 my-auto bg-black border-1 border-black" />
          <div className="col-span-3 md:col-span-2 text-xl md:text-2xl">
            {shortDescription}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <div className="flex gap-4 my-10">
          {links.map((socialLinkObj) => (
            <SocialLink key={socialLinkObj.type} link={socialLinkObj} />
          ))}
          <div className="flex-1"></div>
          <a
            href="/#contact"
            className="cursor-pointer border-2 rounded-3xl px-4 py-2 hover:border-black text-white bg-black hover:bg-transparent hover:text-black flex gap-2"
          >
            Let's Talk
            <span className="my-auto">
              <AiOutlineArrowRight />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
