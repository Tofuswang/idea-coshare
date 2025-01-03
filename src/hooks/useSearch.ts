import { useState, useMemo } from 'react';
import type { TermGroup } from '../types';

export function useSearch(termGroups: TermGroup[]) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGroups = useMemo(() => {
    if (!searchQuery.trim()) return termGroups;
    
    const query = searchQuery.toLowerCase().trim();
    return termGroups.filter(group => 
      group.term.toLowerCase().includes(query) ||
      group.definitions.some(def => 
        def.content.toLowerCase().includes(query) ||
        def.category?.some(cat => cat.toLowerCase().includes(query))
      )
    );
  }, [termGroups, searchQuery]);

  return {
    searchQuery,
    setSearchQuery,
    filteredGroups
  };
}