export default function Testimonials() {
  const testimonials = [
    {
      name: "Fahimullah Dawar",
      role: "Product Manager",
      review:
        "TaskFlow completely transformed the way our team manages projects and deadlines.",
    },
    {
      name: "Ishaq Afridi",
      role: "Startup Founder",
      review:
        "The clean interface and powerful features helped us improve productivity immediately.",
    },
    {
      name: "Hammad Khan",
      role: "Team Lead",
      review:
        "We've tried many tools, but TaskFlow is by far the easiest and most effective.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold">
          Loved by Teams Worldwide
        </h2>

        <p className="mt-4 text-slate-400">
          Thousands of professionals trust TaskFlow every day.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8"
          >
            <div className="text-yellow-400 text-xl mb-4">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="text-slate-300">
              "{testimonial.review}"
            </p>

            <div className="mt-6">
              <h3 className="font-semibold">
                {testimonial.name}
              </h3>

              <p className="text-slate-400 text-sm">
                {testimonial.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}