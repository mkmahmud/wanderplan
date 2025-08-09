
export default function Page() {
  return (
    <div className="w-full    ">
      <section className="bg-primary-light py-20">
        <div className="  mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-primary-dark sm:text-5xl">Plan your perfect trip with WanderPlan</h1>
          <p className="mt-6 text-neutral-600 text-lg   mx-auto">From flights to food — organize every detail of your journey in one place.</p>
          <div className="mt-8 flex justify-center space-x-4">
            <a href="/auth/register" className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition">Get Started</a>
            <a href="#features" className="text-primary font-semibold">See Features</a>
          </div>
        </div>
      </section>
      <section className="  py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-12">How WanderPlan Works</h2>
          <div className="grid md:grid-cols-3 gap-12 text-left">
            <div>
              <h3 className="text-xl font-semibold">1. Search & Add</h3>
              <p className="text-neutral-600 mt-2">Look up cities, add locations, and choose travel dates.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">2. Customize Itinerary</h3>
              <p className="text-neutral-600 mt-2">Drag and drop activities, attach notes, and set reminders.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">3. Share & Go</h3>
              <p className="text-neutral-600 mt-2">Download or share your full plan with others instantly.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-neutral-900 mb-12">Features</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-primary">Smart Itinerary</h3>
              <p className="text-neutral-600 mt-2">Automatically build day-by-day plans with maps, weather, and tips.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary">Collaboration</h3>
              <p className="text-neutral-600 mt-2">Invite friends or family to contribute to your trip plan.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary">Local Discovery</h3>
              <p className="text-neutral-600 mt-2">Find places to stay, eat, and visit near your destinations.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-neutral-900 mb-12">Features</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-primary">Smart Itinerary</h3>
              <p className="text-neutral-600 mt-2">Automatically build day-by-day plans with maps, weather, and tips.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary">Collaboration</h3>
              <p className="text-neutral-600 mt-2">Invite friends or family to contribute to your trip plan.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary">Local Discovery</h3>
              <p className="text-neutral-600 mt-2">Find places to stay, eat, and visit near your destinations.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
