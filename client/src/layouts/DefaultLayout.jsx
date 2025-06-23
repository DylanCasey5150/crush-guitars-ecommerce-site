import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function DefaultLayout() {
  return (
    <>
      <Navbar />
      <main className="bg-black text-[#F3E9D6] font-serif min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}