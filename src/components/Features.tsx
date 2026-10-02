const features = [
  {
    title: "Decentralized Identity",
    description: "Create and manage your on-chain identity across the Starknet ecosystem.",
  },
  {
    title: "Human-Friendly Domains",
    description: "Get a unique .stark domain that represents your identity.",
  },
  {
    title: "Cross-Chain Compatible",
    description: "Your identity works seamlessly across multiple blockchains.",
  },
];

export function Features() {
  return (
    <section className="py-20 bg-whiteGreen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Why Starknet.ID?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white shadow-lg border border-primary/10 hover:border-primary/30 transition-colors"
            >
              <h3 className="text-xl font-semibold text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
