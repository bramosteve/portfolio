import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center">
    {/* Navbar */}
            <div className="w-full border-b p-4 flex justify-between items-center max-w-6xl">
                <div className="flex space-x-6">
                    <a href="#" className="underline">Shop</a>
                    <a href="#">Lookbook</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>
             
                <div className="flex space-x-4 items-center">
                    <FaInstagram />
                    <FaTwitter />
                    <div className="relative">
                    <FiShoppingCart className="text-xl" />
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">0</span>
                    </div>
                </div>
                </div>

                    {/* Titre principal */}
                    <div className="text-center py-6">
                        <h2 className="text-2xl font-bold">Alameda</h2>
                    </div>

                {/* Catégories */}
                <div className="text-center py-4 space-x-6">
                    <a href="#" className="text-gray-700">Hauts</a>
                    <span className="text-gray-400">|</span>
                    <a href="#" className="text-gray-700">Bas</a>
                    <span className="text-gray-400">|</span>
                    <a href="#" className="text-gray-700">Soldes</a>
                </div>
    </div>
  )
}

