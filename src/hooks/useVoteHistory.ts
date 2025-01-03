import { useState, useEffect } from 'react';

export function useVoteHistory() {
  const [votedDefinitions, setVotedDefinitions] = useState<Set<string>>(new Set());

  // 初始化時從 localStorage 讀取投票記錄
  useEffect(() => {
    const savedVotes = localStorage.getItem('votedDefinitions');
    if (savedVotes) {
      setVotedDefinitions(new Set(JSON.parse(savedVotes)));
    }
  }, []);

  // 記錄新的投票
  const recordVote = (definitionId: string) => {
    const newVotes = new Set(votedDefinitions);
    if (newVotes.has(definitionId)) {
      newVotes.delete(definitionId);
    } else {
      newVotes.add(definitionId);
    }
    setVotedDefinitions(newVotes);
    localStorage.setItem('votedDefinitions', JSON.stringify(Array.from(newVotes)));
  };

  // 檢查是否已經投票
  const hasVoted = (definitionId: string) => {
    return votedDefinitions.has(definitionId);
  };

  return {
    hasVoted,
    recordVote
  };
}