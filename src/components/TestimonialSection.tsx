import Image from "next/image";

export default function TestimonialSection({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  return (
    <div className="min-h-screen py-20 md:mx-10 mx-5" id="testimonials">
      <div className="lg:grid lg:grid-cols-2">
        <div className="mb-10 lg:mb-0 col-span-1 text-5xl md:text-6xl lg:text-7xl">
          Let&apos;s see what my clients say
        </div>
        <div className="col-span-1">
          <div className="">
            {testimonials.map((testimonial) => (
              <div className="border-b-2 pb-8 mb-8" key={testimonial.name}>
                <div className="italic text-lg">
                  &quot;{testimonial.review}&quot;
                </div>
                <div className="flex gap-7 mt-8">
                  <div className="relative w-20 h-20">
                    <Image
                      fill
                      src={testimonial.image.asset.url}
                      className="rounded-full w-20 h-20"
                      alt={testimonial.name}
                    />
                  </div>
                  <div className="my-auto">
                    <div className="text-xl">{testimonial.name}</div>
                    <div className="">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
