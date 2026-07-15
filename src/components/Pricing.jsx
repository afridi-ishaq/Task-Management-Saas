export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for individuals starting out.",
      features: [
        "Up to 3 Projects",
        "50 Tasks",
        "Basic Analytics",
        "Email Support",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: "$12",
      description: "Best for freelancers and small teams.",
      features: [
        "Unlimited Projects",
        "Unlimited Tasks",
        "Advanced Analytics",
        "Priority Support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$49",
      description: "For growing businesses and organizations.",
      features: [
        "Unlimited Everything",
        "Team Management",
        "Custom Integrations",
        "Dedicated Support",
      ],
      popular: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold">
          Simple Pricing
        </h2>

        <p className="text-slate-400 mt-4">
          Choose the plan that fits your needs.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-3xl border p-8 ${
              plan.popular
                ? "border-blue-500 bg-slate-900"
                : "border-slate-800 bg-slate-900"
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            )}

            <h3 className="text-2xl font-bold">
              {plan.name}
            </h3>

            <p className="text-slate-400 mt-2">
              {plan.description}
            </p>

            <div className=" mt-6">
              <span className="text-5xl font-bold">
                {plan.price}
              </span>
              <span className="text-slate-400">
                /month
              </span>
            </div>

            <ul className="mt-8 space-y-4">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className="text-slate-300"
                >
                  ✓ {feature}
                </li>
              ))}
            </ul>

            <button className="w-full mt-8 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}