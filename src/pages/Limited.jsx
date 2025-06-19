import darkRoseLeaf from '../assets/images/guitar-hero.jpg'; // Replace with actual image
import blueBerryEcho from '../assets/images/guitar-hero.jpg'; // Replace with actual image
import midnightReverie from '../assets/images/guitar-hero.jpg'; // Replace with actual image

const limitedModels = [
  {
    name: "Dark Rose Leaf",
    description: "Based off of our iconic leaf guitar, this model features",
    image: darkRoseLeaf,
  },
  {
    name: "Blueberry Echo",
    description: "Based off of our iconic echo guitar, this model features",
    image: blueBerryEcho,
  },
  {
    name: "Midnight Reverie",
    description: "Based off of our iconic Reverie guitar, this model features",
    image: midnightReverie,
  },
];

export default function LimitedReleases() {
  return (
    <div className="bg-black text-[#F3E9D6] font-serif min-h-screen px-6 md:px-20 py-16 space-y-24">
      
      {/*Header */}
      <section className="text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          Limited Releases
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl">
          These are guitars for collectors, performers, and dreamers. Each model is one of a kind.
        </p>
      </section>

      {/* Gallery */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {limitedModels.map((guitar, index) => (
          <div key={index} className="bg-[#1c1c1e] rounded-xl overflow-hidden shadow-lg group hover:scale-105 transition-transform duration-300">
            <img
              src={guitar.image}
              alt={guitar.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 space-y-2 text-center">
              <h2 className="text-2xl font-bold">{guitar.name}</h2>
              <p className="text-sm">{guitar.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Request */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl">Secure Your Legacy</h2>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-[#F3E9D6] text-black uppercase tracking-wider rounded-full hover:bg-[#ddd]"
        >
          Request Availability
        </a>
      </section>
    </div>
    );
  }