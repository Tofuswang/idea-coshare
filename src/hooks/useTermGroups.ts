import { useMemo } from 'react';
import type { TermGroup } from '../types';
import { useDefinitions } from './useDefinitions';

export function useTermGroups() {
  const { definitions, loading, error, addDefinition, toggleVote } = useDefinitions();

  const termGroups = useMemo(() => {
    const groups = new Map<string, TermGroup>();
    
    definitions.forEach(def => {
      const existing = groups.get(def.term);
      if (existing) {
        existing.definitions.push(def);
        existing.definitions.sort((a, b) => b.votes - a.votes);
      } else {
        groups.set(def.term, {
          term: def.term,
          definitions: [def],
        });
      }
    });

    return Array.from(groups.values());
  }, [definitions]);

  return {
    termGroups,
    loading,
    error,
    addDefinition,
    toggleVote,
  };
}