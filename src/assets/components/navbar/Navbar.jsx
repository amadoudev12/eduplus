import React, { useState } from 'react'
import { Link } from "react-router-dom";
import logo from '../../image/logo.png'
import { FiMenu } from "react-icons/fi"

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => setShowMenu(!showMenu)

    return (
        <nav className="bg-white shadow-md">
        <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center">
            {logo && <img src={logo} alt="logo" width="60" height="60" className="mr-4" />}
            <span className="text-2xl font-bold text-blue-600">Eduplus</span>
            </div>
            {/* Desktop menu */}
            <ul className="hidden md:flex space-x-8">
            <li>
                <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Accueil</Link>
            </li>
            <li>
                <Link to="/about" href="#" className="text-gray-700 hover:text-blue-600 transition">À propos</Link>
            </li>
            <li>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition">Fiches</a>
            </li>
            <li>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
            </li>
            </ul>
            <div className="hidden md:flex space-x-4">
            <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Déposer</a>
            <Link to="/inscription" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">S'inscrire</Link>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
            <FiMenu className="text-2xl cursor-pointer" onClick={toggleMenu} />
            </div>
        </div>
        {/* Mobile menu */}
        {showMenu && (
            <div className="md:hidden bg-white shadow-md rounded-b-xl z-10 py-6 px-6">
            <ul className="flex flex-col gap-4 mb-4">
                <li>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition">Accueil</a>
                </li>
                <li>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition">À propos</a>
                </li>
                <li>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition">Fiches</a>
                </li>
                <li>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
                </li>
            </ul>
            <div className="flex flex-col gap-2">
                <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-center">Déposer</a>
                <Link to="/inscription" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition text-center">S'inscrire</Link>
            </div>
            </div>
        )}
        </nav>
    )
}

export default Navbar