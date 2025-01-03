import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-yellow-50">
      <Header />
      <div className="flex-grow">
        <div className="max-w-6xl mx-auto px-4">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}