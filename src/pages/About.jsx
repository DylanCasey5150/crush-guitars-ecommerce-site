import workbench from '../assets/images/workbench.png';




export default function About() {
    return (
<<<<<<< Updated upstream
      <div className="text-white text-2xl text-center mt-20">
        About Crush Guitars
      </div>
=======
       <div className="bg-black text-[#F3E9D6] font-serif min-h-screen px-6 md:px-20 py-16 space-y-24">

      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold">
          Built for Musicians. Made to Last a Lifetime.
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Elevating sound and design — one handcrafted guitar at a time.
        </p>
      </section>

      {/* Story Section */}
      <section className="flex flex-col md:flex-row items-center gap-10">
        <img
          src={workbench}
          alt="Crafting guitars"
          className="w-full md:w-1/2 rounded-lg object-cover"
        />
        <div className="text-left space-y-4 max-w-xl">
          <h2 className="text-3xl font-semibold">Our Vision</h2>
          <p className="text-base leading-relaxed">
            After 18 years of playing music, I founded Crush Guitars with a simple goal — to create instruments that sound exceptional and feel timeless. Each guitar is more than gear — it's a future heirloom, built to accompany generations of creativity.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {[
          { title: "Artisan Craft", desc: "Every detail is designed with purpose and precision." },
          { title: "Superior Tone", desc: "Premium woods and electronics selected for balance, clarity, and warmth." },
          { title: "Legacy Design", desc: "Made to inspire, last, and be passed down." },
        ].map((val, idx) => (
          <div key={idx} className="bg-[#1c1c1e] p-6 rounded-lg space-y-4 hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold">{val.title}</h3>
            <p className="text-sm">{val.desc}</p>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl">Discover what sets us apart</h2>
        <a
          href="/guitars"
          className="inline-block mt-4 px-6 py-3 bg-[#F3E9D6] text-black uppercase tracking-wider rounded-full hover:bg-[#ddd]"
        >
          Explore Guitars
        </a>
      </section>
    </div>
>>>>>>> Stashed changes
    );
  }
 