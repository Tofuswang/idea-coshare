import React from 'react';
import { Play } from 'lucide-react';

interface VideoCardProps {
  thumbnailUrl: string;
  videoUrl: string;
  title: string;
  description: string;
}

export function VideoCard({ thumbnailUrl, videoUrl, title, description }: VideoCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <a 
        href={videoUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block relative group"
      >
        <div className="aspect-video relative">
          <img 
            src={thumbnailUrl} 
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-50 transition-all">
            <div className="w-16 h-16 rounded-full bg-white bg-opacity-90 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play size={32} className="text-yellow-600 ml-1" />
            </div>
          </div>
        </div>
      </a>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}