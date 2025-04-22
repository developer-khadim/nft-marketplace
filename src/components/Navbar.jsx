import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/Storefront.png";
import { User, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-[#2b2b2b] w-full">
            <div className="w-full px-4 md:px-20 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo and Title */}
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="NFT Marketplace Logo" className="h-8 w-8" />
                        <span className="font-bold text-white text-lg">NFT Marketplace</span>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-14 text-white">
                        <Link className="hover:text-gray-300 transition-colors">Marketplace</Link>
                        <Link className="hover:text-gray-300 transition-colors">Rankings</Link>
                        <Link className="hover:text-gray-300 transition-colors">Connect Wallet</Link>
                        <div className="px-4 py-3 rounded-full bg-[#A259FF] hover:bg-[#8A3FFF] transition-colors flex items-center gap-2 cursor-pointer">
                            <User size={20} />
                            <Link>Sign Up</Link>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4">
                        <div className="flex flex-col gap-4 text-white">
                            <Link className="hover:text-gray-300 transition-colors">Marketplace</Link>
                            <Link className="hover:text-gray-300 transition-colors">Rankings</Link>
                            <Link className="hover:text-gray-300 transition-colors">Connect Wallet</Link>
                            <div className="px-4 py-2 rounded-full bg-[#A259FF] hover:bg-[#8A3FFF] transition-colors flex items-center gap-2 justify-center">
                                <User size={20} />
                                <Link>Sign Up</Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;