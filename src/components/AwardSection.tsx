function AwardListItem({ award }: { award: Award }) {
  return (
    <div className="border-b-2 pb-8 mb-10">
      <div className="text-2xl lg:text-3xl bold">{award.title}</div>
      <div className="mt-2 text-lg lg:text-xl">
        {award.date.getFullYear()} - {award.event}
      </div>
    </div>
  );
}

export default function AwardSection({ awards }: { awards: Award[] }) {
  return (
    <div className="py-20 md:mx-0 mx-10" id="awards">
      <div className="lg:grid grid-cols-5 xl:grid-cols-3">
        <div className="col-span-2 xl:col-span-1 text-5xl md:text-6xl lg:text-7xl">
          Awards & Recognition
        </div>
        <div className="col-span-3 xl:col-span-2 mt-10 lg:mt-0">
          <div className="">
            {awards
              .sort((a, b) => b.date - a.date)
              .map((award, index) => (
                <AwardListItem award={award} key={index} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
