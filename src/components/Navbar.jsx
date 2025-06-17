import crushLogo from '../assets/logo/crush-guitars-logo.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
          <nav className="flex justify-between items-center px-6 md:px-20 py-6 border-b border-[#F3E9D6]/20 text-sm uppercase tracking-wide">
           <div className="flex items-center gap-2">
    <img src={crushLogo} className="w-20 md:w-25" alt="Crush Logo" />
    <div className="text-xl font-bold">Crush</div>
  </div>
        <ul className="flex gap-6 md:gap-10">
          
          <Link to="/guitars"><li className="hover:underline cursor-pointer">Guitars</li></Link>
          <li className="hover:underline cursor-pointer">Limited Release</li>
          <li className="hover:underline cursor-pointer">About</li>
          <li className="hover:underline cursor-pointer">Contact</li>
          <li className="hover:underline cursor-pointer">Account</li>
          <li className="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835L5.812 6.75M6 6.75h14.25l-1.5 9H6.75m0 0L5.25 3.75m1.5 3h11.25M6.75 15.75a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm9 0a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z" />
            </svg>
          </li>
        </ul>
      </nav>
    );
  }