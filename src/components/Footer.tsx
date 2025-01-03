import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500 flex flex-col items-center md:items-start">
            <div>
              2025 共享定義小幫手. Designed by Tofus. Powered by{' '}
              <a 
                href="https://g0v.tw/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-yellow-600 hover:text-yellow-700 transition-colors"
              >
                g0v Community
              </a>
            </div>
            <div>Shared in CC-BY 4.0</div>
          </div>
          <div className="flex gap-6">
            <Link 
              to="/terms" 
              className="text-sm text-gray-600 hover:text-yellow-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              使用條款
            </Link>
            <Link 
              to="/privacy" 
              className="text-sm text-gray-600 hover:text-yellow-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              隱私權協議
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}