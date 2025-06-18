export default function Contact() {
    return (
        <div className="bg-black text-[#F3E9D6] font-serif min-h-screen px-6 md:px-20 py-16 flex flex-col items-center text-center space-y-12">
      
      {/* Heading */}
      <div className="space-y-4 max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold">Get in Touch</h1>
        <p className="text-lg md:text-xl text-[#F3E9D6]/80">
          Whether you have questions about our guitars, custom orders, or just want to say hello — we'd love to hear from you.
        </p>
      </div>

      {/* Contact Form */}
      <form className="w-full max-w-xl bg-[#1c1c1e] p-8 rounded-lg space-y-6 text-left">
        <div>
          <label htmlFor="name" className="block text-sm mb-2">Name</label>
          <input
            id="name"
            type="text"
            className="w-full p-3 rounded bg-black border border-[#F3E9D6]/30 text-[#F3E9D6] focus:outline-none focus:ring-2 focus:ring-[#F3E9D6]"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm mb-2">Email</label>
          <input
            id="email"
            type="email"
            className="w-full p-3 rounded bg-black border border-[#F3E9D6]/30 text-[#F3E9D6] focus:outline-none focus:ring-2 focus:ring-[#F3E9D6]"
            placeholder="youremail@email.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm mb-2">Message</label>
          <textarea
            id="message"
            rows="5"
            className="w-full p-3 rounded bg-black border border-[#F3E9D6]/30 text-[#F3E9D6] focus:outline-none focus:ring-2 focus:ring-[#F3E9D6]"
            placeholder="Tell us what’s on your mind..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-[#F3E9D6] text-black px-6 py-3 rounded-full uppercase tracking-wide hover:bg-[#e2d7bd] transition"
        >
          Send Message
        </button>
      </form>
    </div>
    );
  }