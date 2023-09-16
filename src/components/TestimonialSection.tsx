export default function TestimonialSection({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  return (
    <div className="min-h-screen py-20 md:mx-0 mx-10" id="testimonials">
      <div className="lg:grid lg:grid-cols-2">
        <div className="mb-10 lg:mb-0 col-span-1 text-5xl md:text-6xl lg:text-7xl">
          Let's see what my clients say
        </div>
        <div className="col-span-1">
          <div className="">
            {testimonials.map((testimonial) => (
              <div className="border-b-2 pb-8 mb-8" key={testimonial.name}>
                <div className="italic text-lg">"{testimonial.review}"</div>
                <div className="flex gap-7 mt-8">
                  <img
                    src={testimonial.image.asset.url}
                    className="rounded-full w-20 h-20"
                    alt={testimonial.name}
                  />
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
