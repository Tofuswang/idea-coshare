import React, { useState } from 'react';
import { DefinitionForm } from '../components/DefinitionForm';
import { EmptyState } from '../components/EmptyState';
import { TermGroup } from '../components/TermGroup';
import { SearchBar } from '../components/SearchBar';
import { ExportButton } from '../components/ExportButton';
import { UsageGuideButton } from '../components/UsageGuideButton';
import { UsageGuideModal } from '../components/UsageGuideModal';
import { useTermGroups } from '../hooks/useTermGroups';
import { useSearch } from '../hooks/useSearch';
import { useVoteHistory } from '../hooks/useVoteHistory';
import { exportToCSV } from '../utils/csvExport';

export function HomePage() {
  const { termGroups, addDefinition, toggleVote } = useTermGroups();
  const { searchQuery, setSearchQuery, filteredGroups } = useSearch(termGroups);
  const { hasVoted, recordVote } = useVoteHistory();
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  const handleVote = async (id: string) => {
    const isVoting = !hasVoted(id);
    await toggleVote(id, isVoting);
    recordVote(id);
  };

  const handleExport = () => {
    const csvData = termGroups.flatMap(group =>
      group.definitions.map(def => ({
        詞彙: group.term,
        定義: def.content,
        作者: def.author,
        記錄者: def.recorder || '',
        來源: def.source || '',
        分類: def.category?.join('、') || '',
        讚同數: def.votes,
        建立時間: new Date(def.createdAt).toLocaleString('zh-TW')
      }))
    );
    exportToCSV(csvData, '詞彙定義列表');
  };

  return (
    <>
      <div className="py-8">
        <div className="flex justify-end gap-4 mb-6">
          <UsageGuideButton onClick={() => setIsGuideOpen(true)} />
          <ExportButton onClick={handleExport} />
        </div>
        <DefinitionForm onSubmit={addDefinition} />
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <div className="space-y-8">
          {filteredGroups.length === 0 ? (
            searchQuery ? (
              <div className="text-center py-12 text-gray-600">
                找不到符合「{searchQuery}」的結果
              </div>
            ) : (
              <EmptyState />
            )
          ) : (
            filteredGroups.map((group) => (
              <TermGroup
                key={group.term}
                group={group}
                onVote={handleVote}
                hasVoted={hasVoted}
              />
            ))
          )}
        </div>
      </div>
      <UsageGuideModal 
        isOpen={isGuideOpen} 
        onClose={() => setIsGuideOpen(false)} 
      />
    </>
  );
}