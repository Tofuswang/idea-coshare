import React from 'react';
import { DefinitionForm } from './components/DefinitionForm';
import { Header } from './components/Header';
import { EmptyState } from './components/EmptyState';
import { TermGroup } from './components/TermGroup';
import { SearchBar } from './components/SearchBar';
import { useTermGroups } from './hooks/useTermGroups';
import { useSearch } from './hooks/useSearch';

function App() {
  const { termGroups, addDefinition, voteDefinition } = useTermGroups();
  const { searchQuery, setSearchQuery, filteredGroups } = useSearch(termGroups);

  const handleComment = (id: string) => {
    console.log('Comment clicked for definition:', id);
  };

  return (
    <div className="min-h-screen bg-yellow-50">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
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
                onVote={voteDefinition}
                onComment={handleComment}
              />
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default App;