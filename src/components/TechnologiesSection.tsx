import Image from "next/image";

export default function TechnologiesSection({
  technologies,
}: {
  technologies: Technology[];
}) {
  return (
    <div className="min-h-screen relative md:mx-10 mx-5" id="techstack">
      <div className="absolute translate-y-[-50%] top-[50%]">
        <div className="lg:text-6xl text-5xl mb-20 text-center">
          My Techstack
        </div>
        <div className="flex flex-wrap gap-10">
          {technologies.map((technology) => (
            <div className="mx-auto lg:h-16 md:h-14 h-12" key={technology.name}>
              <Image
                layout="fill"
                src={technology.logo.asset.url}
                className="grayscale backdrop-grayscale  !relative"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
