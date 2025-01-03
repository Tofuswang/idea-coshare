import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Lightbulb, Users, Book, Menu, X } from 'lucide-react';

export function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  
  const navButtonClass = (path: string) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
      location.pathname === path
        ? 'bg-yellow-100 text-yellow-700'
        : 'text-gray-600 hover:bg-yellow-100 hover:text-yellow-700'
    }`;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-yellow-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Lightbulb className="text-yellow-600" size={32} />
            <h1 className="text-3xl md:text-2xl font-bold text-gray-900">共享定義小幫手</h1>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <Link to="/" className={navButtonClass('/')}>
              <Book size={20} />
              <span>詞條</span>
            </Link>
            <Link to="/contributors" className={navButtonClass('/contributors')}>
              <Users size={20} />
              <span>關於本專案</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-yellow-100 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div
          ref={menuRef}
          className={`md:hidden absolute right-4 mt-2 py-2 w-48 bg-white rounded-lg shadow-lg transition-all duration-200 z-50 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <Link
            to="/"
            className="block px-4 py-2 text-gray-700 hover:bg-yellow-50"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="flex items-center gap-2">
              <Book size={20} />
              <span>詞條</span>
            </div>
          </Link>
          <Link
            to="/contributors"
            className="block px-4 py-2 text-gray-700 hover:bg-yellow-50"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="flex items-center gap-2">
              <Users size={20} />
              <span>關於本專案</span>
            </div>
          </Link>
        </div>

        <p className="mt-2 text-gray-700">分享你的定義，查看别人的定義，匯出所有人的定義！</p>
      </div>
    </header>
  );
}