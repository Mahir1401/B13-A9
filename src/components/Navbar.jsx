'use client';
import { Home, Moon, PawPrint, Search, Sun } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export default function Navbar({ user, onLogout }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Sync state with HTML dark class element
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    /* Added mx-auto to center container and px-4 for padding on smaller screen sizes */
    <div className="container mx-auto px-4 flex justify-between items-center h-[4.5rem]">
      <Link href="/" className="flex items-center gap-[0.6rem]">
        <PawPrint className="text-purple-600 dark:text-purple-400" />
        <span className="font-[Fraunces] text-[1.35rem] font-bold text-zinc-900 dark:text-zinc-50 tracking-[-0.02em]">
          Paws & Homes
        </span>
      </Link>
      
      <div className="flex items-center space-x-6 text-sm font-medium">
        <Link 
          href="/" 
          className="flex gap-1.5 justify-center items-center px-3 py-1.5 rounded-full text-zinc-900 dark:text-zinc-100 hover:text-purple-600 transition-colors"
        >
          <Home className="w-4 h-4" /> Home
        </Link>
        <Link 
          href="/pets" 
          className="text-zinc-500 dark:text-zinc-400 hover:text-purple-600 transition-colors flex items-center gap-1"
        >
          <Search className="w-4 h-4" /> All Pets
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-2 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
          title="Toggle Theme"
        >
          {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>

        {user ? (
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-2 focus:outline-none group"
            >
              <Image
                src={user.avatarUrl || '/image_pgdFnZ.png'}
                alt="User Profile"
                className="w-8 h-8 rounded-full border border-purple-500 object-cover"
                height={32}
                width={32}
              />
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white">
                {user.name}
              </span>
              <svg 
                className={`w-4 h-4 text-zinc-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-[#161b22] border border-zinc-200 dark:border-gray-800 rounded-md shadow-lg py-1 z-50">
                <Link href="/profile" className="block px-4 py-2 text-sm text-zinc-700 dark:text-gray-300 hover:bg-zinc-100 dark:hover:bg-gray-800 hover:text-zinc-900 dark:hover:text-white">
                  Your Profile
                </Link>
                <Link href="/settings" className="block px-4 py-2 text-sm text-zinc-700 dark:text-gray-300 hover:bg-zinc-100 dark:hover:bg-gray-800 hover:text-zinc-900 dark:hover:text-white">
                  Settings
                </Link>
                <hr className="border-zinc-200 dark:border-gray-800 my-1" />
                <button
                  onClick={() => {
                    setIsDropdownOpen(false);
                    onLogout();
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-zinc-100 dark:hover:bg-gray-800"
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center space-x-3">
            <Link href="/login" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-purple-600 transition-colors">
              Log In
            </Link>
            
            <Link href="/signup" className="px-4 py-1.5 text-sm font-medium bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
