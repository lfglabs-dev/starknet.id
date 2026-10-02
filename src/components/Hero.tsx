export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 bg-whiteGreen">
      <div className="text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6">
          Your Identity on Starknet
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Create your decentralized identity on Starknet with Starknet.ID.
          Manage your profile, domains, and connect with the community.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-3 bg-primary text-white rounded-lg text-lg font-medium hover:bg-primary/90 transition-colors">
            Get Started
          </button>
          <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg text-lg font-medium hover:bg-primary/5 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
