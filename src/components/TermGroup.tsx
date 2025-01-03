import React from 'react';
import { Folder } from 'lucide-react';
import type { TermGroup } from '../types';
import { DefinitionCard } from './DefinitionCard';

interface TermGroupProps {
  group: TermGroup;
  onVote: (id: string) => void;
  hasVoted: (id: string) => boolean;
}

export function TermGroup({ group, onVote, hasVoted }: TermGroupProps) {
  return (
    <div className="mb-8">
      <div className="relative">
        {/* Folder tab */}
        <div className="absolute -top-3 left-6 bg-yellow-100 px-4 py-2 rounded-t-lg border-t border-x border-yellow-200">
          <div className="flex items-center gap-2">
            <Folder className="text-yellow-600" size={20} />
            <h2 className="text-xl font-bold text-gray-800">
              {group.term}
            </h2>
            <div className="bg-white px-3 py-1 rounded-full text-sm text-gray-600 shadow-sm border border-gray-100">
              {group.definitions.length} 個定義
            </div>
          </div>
        </div>
        
        {/* Folder content */}
        <div className="bg-yellow-50 rounded-lg border border-yellow-200 pt-8 pb-4 px-4">
          <div className="space-y-4">
            {group.definitions.map(definition => (
              <DefinitionCard
                key={definition.id}
                definition={definition}
                onVote={onVote}
                hasVoted={hasVoted(definition.id)}
                showTerm={false}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}