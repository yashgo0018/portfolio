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
        <div className="lg:grid lg:grid-cols-3 gap-6">
          <div className="flex lg:col-span-1 pb-10 mb-3 lg:mb-0">
            <div className="flex-1"></div>
            <img
              src={image?.asset.url}
              className="h-80 lg:h-full aspect-square rounded-2xl"
              alt="Yash Goyal"
            />
            <div className="flex-1"></div>
          </div>
          <div className="col-span-2 text-xl md:text-2xl">
            {longDescription}
          </div>
        </div>
      </div>
    </div>
  );
}
