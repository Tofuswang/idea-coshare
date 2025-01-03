import React from 'react';
import { ThumbsUp, Link as LinkIcon, Calendar, User } from 'lucide-react';
import type { Definition } from '../types';

interface DefinitionCardProps {
  definition: Definition;
  onVote: (id: string) => void;
  hasVoted: boolean;
  showTerm?: boolean;
}

export function DefinitionCard({ definition, onVote, hasVoted, showTerm = true }: DefinitionCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {showTerm && (
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{definition.term}</h3>
      )}
      <p className="text-gray-600 mb-4">{definition.content}</p>
      
      <div className="flex items-center text-sm text-gray-500 mb-4">
        <User size={16} className="mr-1" />
        <span className="mr-4">{definition.author}</span>
        <Calendar size={16} className="mr-1" />
        <span>{new Date(definition.createdAt).toLocaleDateString('zh-TW')}</span>
      </div>

      {definition.source && (
        <div className="flex items-center text-sm text-yellow-600 mb-4">
          <LinkIcon size={16} className="mr-1" />
          <a href={definition.source} target="_blank" rel="noopener noreferrer" 
             className="hover:underline">
            來源連結
          </a>
        </div>
      )}

      {definition.category && (
        <div className="flex flex-wrap gap-2 mb-4">
          {definition.category.map((cat) => (
            <span key={cat} className="px-2 py-1 bg-yellow-50 rounded-full text-sm text-gray-600">
              {cat}
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center">
        <button
          onClick={() => onVote(definition.id)}
          className={`flex items-center gap-1 px-2 py-1 rounded transition-colors ${
            hasVoted 
              ? 'bg-yellow-100 text-yellow-600' 
              : 'text-gray-600 hover:text-yellow-600'
          }`}
        >
          <ThumbsUp size={18} className={hasVoted ? 'fill-yellow-600' : ''} />
          <span>{definition.votes}</span>
        </button>
      </div>
    </div>
  );
}