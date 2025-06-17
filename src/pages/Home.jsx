import guitarImage from '../assets/images/guitar-hero.jpg';

export default function Home() {
    return (
 <div className="min-h-screen pt-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center text-ivory bg-black font-serif">
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-2">Crush</h1>
      <h2 className="text-2xl sm:text-3xl md:text-4xl mb-6">Guitars</h2>
      <p className="text-base sm:text-lg md:text-xl max-w-xs sm:max-w-md md:max-w-xl mb-8">
        Explore our collection of handcrafted electric guitars built for power and precision.
      </p>
      <button className="bg-ivory text-black px-6 py-3 rounded-2xl text-base sm:text-lg hover:bg-white transition-all duration-300">
        Shop Now
      </button>
      <img
        src={guitarImage}
        alt="Guitars"
        className="mt-10 w-full max-w-xs sm:max-w-2xl md:max-w-4xl"
      />
    </div>
    );
  }