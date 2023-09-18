export default function AboutSection({
  longDescription,
  image,
}: {
  longDescription: string;
  image?: Image;
}) {
  return (
    <div className="h-screen relative md:mx-0 mx-10" id="about">
      <div className="absolute top-[50%] translate-y-[-50%] left-0 right-0">
        <div className="lg:grid lg:grid-cols-3 gap-6 pb-10">
          <div className="flex lg:col-span-1 lg:mb-0 mb-10 lg:mb-0">
            <div className="flex-1"></div>
            <img
              src={image?.asset.url}
              className="h-80 lg:h-full aspect-square rounded-2xl"
              alt="Yash Goyal"
            />
            <div className="flex-1"></div>
          </div>
          <div className="col-span-2 lg:relative text-xl xl:text-2xl text-justify">
            <div className="lg:absolute lg:top-[50%] lg:translate-y-[-50%]">
              {longDescription?.split("\n").map((line) => (
                <div>
                  {line}
                  <br />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
