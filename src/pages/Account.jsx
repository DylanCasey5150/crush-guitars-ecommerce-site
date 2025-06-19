export default function Account() {
    return (
       <div className="bg-black text-[#F3E9D6] font-serif min-h-screen px-6 md:px-20 py-16 flex flex-col items-center">
      
      {/* Title */}
      <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center">Your Account</h1>

      {/* Sections */}
      <div className="w-full max-w-2xl space-y-10">

        {/* Profile Section */}
        <section className="bg-[#1c1c1e] rounded-lg p-6 space-y-4 shadow-md">
          <h2 className="text-2xl font-bold">Profile Information</h2>
          <p>Name: Dylan Casey</p>
          <p>Email: dylan.casey.john@gmail.com</p>
          <button className="mt-2 px-4 py-2 bg-[#F3E9D6] text-black rounded-full uppercase text-sm hover:bg-[#ddd]">
            Edit Profile
          </button>
        </section>

        {/* Order History */}
        <section className="bg-[#1c1c1e] rounded-lg p-6 space-y-4 shadow-md">
          <h2 className="text-2xl font-bold">Order History</h2>
          <ul className="text-sm space-y-2">
            <li>Order #1742 — Blade (Shipped)</li>
            <li>Order #1620 — Leaf (Delivered)</li>
          </ul>
          <button className="mt-2 px-4 py-2 bg-[#F3E9D6] text-black rounded-full uppercase text-sm hover:bg-[#ddd]">
            View All Orders
          </button>
        </section>

        {/* Settings */}
        <section className="bg-[#1c1c1e] rounded-lg p-6 space-y-4 shadow-md">
          <h2 className="text-2xl font-bold">Settings</h2>
          <button className="px-4 py-2 bg-[#F3E9D6] text-black rounded-full uppercase text-sm hover:bg-[#ddd]">
            Change Password
          </button>
          <button className="ml-4 px-4 py-2 border border-[#F3E9D6] text-[#F3E9D6] rounded-full uppercase text-sm hover:bg-[#333]">
            Log Out
          </button>
        </section>

      </div>
    </div>
    );
  }