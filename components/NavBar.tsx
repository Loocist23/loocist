'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react'; // Pour les icônes burger

const Logo = () => (
  <svg width="36" height="36" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="12" fill="none" />
    <path d="M20 16V48H44" stroke="#FBBF24" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M44 48V36" stroke="#FBBF24" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="44" cy="25" r="2" fill="#FBBF24" />
  </svg>
);

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/about' },
    { name: 'Projets', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-zinc-900 text-white py-6 px-4 border-b border-zinc-800">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Logo />
          <span className="font-semibold text-lg">Loocist23</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`transition-colors duration-150 ${pathname === item.href
                ? 'text-yellow-400 font-semibold'
                : 'text-white hover:text-yellow-400'
                }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/CV_Anthony_ZEGNAL.pdf"
            target="_blank"
            className="px-4 py-2 border border-yellow-400 text-yellow-400 rounded hover:bg-yellow-400 hover:text-black transition"
          >
            Mon CV
          </Link>
        </div>

        {/* Mobile Burger */}
        <button onClick={() => setOpen(!open)} className="sm:hidden text-white">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="sm:hidden mt-4 space-y-3 px-2">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block w-full py-2 text-lg ${pathname === item.href
                ? 'text-yellow-400 font-semibold'
                : 'text-white hover:text-yellow-400'
                }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/CV_Anthony_ZEGNAL.pdf"
            target="_blank"
            className="block w-full text-yellow-400 border border-yellow-400 rounded px-4 py-2 text-center mt-2 hover:bg-yellow-400 hover:text-black transition"
          >
            Mon CV
          </Link>
        </div>
      )}
    </header>
  );
}
