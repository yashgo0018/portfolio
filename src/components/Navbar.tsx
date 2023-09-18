import { AiOutlineArrowRight } from "react-icons/ai";

export default function Navbar() {
  return (
    <div className="flex py-5">
      <div className="text-2xl md:text-3xl text-gray-400 cursor-pointer my-auto">
        Yash <span className="text-black">Goyal</span>.
      </div>
      <div className="flex-1"></div>
      <div>
        {/* <a
          href="/#about"
          className="cursor-pointer p-2 text-gray-400 hover:text-black"
        >
          About
  </a> */}
        <div className="flex hidden sm:block">
          <a
            href="/#awards"
            className="cursor-pointer p-2 text-gray-400 hover:text-black"
          >
            Awards & Recognition
          </a>
          <a
            href="/#projects"
            className="cursor-pointer p-2 text-gray-400 hover:text-black"
          >
            Projects
          </a>

          <a
            href="/#testimonials"
            className="cursor-pointer p-2 text-gray-400 hover:text-black"
          >
            Testimonials
          </a>
        </div>
        {/*
        <a
          href="/#techstack"
          className="cursor-pointer p-2 text-gray-400 hover:text-black"
        >
          My Techstack
        </a> */}
        <a
          href="/#contact"
          className="sm:hidden cursor-pointer border-2 rounded-3xl px-3 py-2 hover:border-black text-gray-400 border-gray-400 hover:text-black flex gap-2"
        >
          Let's Talk
          <span className="my-auto">
            <AiOutlineArrowRight />
          </span>
        </a>
      </div>
    </div>
  );
}
