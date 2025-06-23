import leafImage from '../assets/images/leaf.png';

const guitars = [
  {
    name: "Leaf",
    description: "A lightweight tonewood body with bright, balanced sound.",
    image: leafImage,
  },
  {
    name: "Blade",
    description: "Designed for sharp articulation and aggressive leads.",
    image: leafImage,
  },
  {
    name: "Midnight Hollow",
    description: "Our elite monthly drop — rich tone and blacked-out finish.",
    image: leafImage,
  },
  {
    name: "Echo",
    description: "Warm, resonant acoustics with a modern aesthetic.",
    image: leafImage,
  },
];

export default function Guitars() {
  return (
    <div className="bg-black text-ivory font-serif min-h-screen  py-16 px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center">Our Guitars</h1>

      {/* Fully centered wrapper */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-5xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guitars.map((guitar, index) => (
              <div
                key={index}
                className="bg-[#1c1c1e] p-6 rounded-xl flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={guitar.image}
                  alt={guitar.name}
                  className="mb-6 w-full max-w-[260px] rounded"
                />
                <h2 className="text-2xl mb-2">{guitar.name}</h2>
                <p className="text-sm md:text-base">{guitar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    );
  }