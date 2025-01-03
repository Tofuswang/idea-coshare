import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import type { Definition } from '../types';

export function useDefinitions() {
  const [definitions, setDefinitions] = useState<Definition[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function fetchDefinitions() {
    try {
      const { data, error } = await supabase
        .from('definitions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      setDefinitions(data.map(item => ({
        id: item.id,
        term: item.term,
        content: item.content,
        author: item.author,
        recorder: item.recorder || undefined,
        source: item.source || undefined,
        createdAt: new Date(item.created_at),
        votes: item.votes,
        category: item.category || undefined,
      })));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchDefinitions();
  }, []);

  async function addDefinition(newDef: Omit<Definition, 'id' | 'createdAt' | 'votes'>) {
    try {
      const { data, error } = await supabase
        .from('definitions')
        .insert([{
          term: newDef.term,
          content: newDef.content,
          author: newDef.author,
          recorder: newDef.recorder,
          source: newDef.source,
          category: newDef.category,
        }])
        .select()
        .single();

      if (error) throw error;

      setDefinitions(prev => [{
        id: data.id,
        term: data.term,
        content: data.content,
        author: data.author,
        recorder: data.recorder || undefined,
        source: data.source || undefined,
        createdAt: new Date(data.created_at),
        votes: data.votes,
        category: data.category || undefined,
      }, ...prev]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    }
  }

  async function toggleVote(id: string, isVoting: boolean) {
    try {
      const { error } = await supabase
        .rpc(isVoting ? 'increment_votes' : 'decrement_votes', { row_id: id });

      if (error) throw error;

      // 重新獲取最新資料以確保同步
      await fetchDefinitions();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    }
  }

  return {
    definitions,
    loading,
    error,
    addDefinition,
    toggleVote,
  };
}