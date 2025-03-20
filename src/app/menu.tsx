import Image from 'next/image';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 border-b">
        <div className="flex space-x-6">
          <a href="#" className="underline">Shop</a>
          <a href="#">Lookbook</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <h1 className="text-xl font-semibold">Alameda</h1>
        <div className="flex space-x-4 items-center">
          <FaInstagram />
          <FaTwitter />
          <div className="relative">
            <FiShoppingCart className="text-xl" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">0</span>
          </div>
        </div>
      </nav>

      {/* Categories */}
      <div className="text-center py-6 space-x-6">
        <a href="#" className="text-gray-700">Tops</a>
        <span className="text-gray-400">|</span>
        <a href="#" className="text-gray-700">Bottoms</a>
        <span className="text-gray-400">|</span>
        <a href="#" className="text-gray-700">Sale</a>
      </div>


    </div>
  );
}

