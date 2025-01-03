import React from 'react';
import { useTermGroups } from '../hooks/useTermGroups';
import { ExportButton } from '../components/ExportButton';
import { exportToCSV } from '../utils/csvExport';
import { VideoCard } from '../components/VideoCard';
import { Lightbulb, Heart, Share2, Github, Instagram, Mail, HelpCircle } from 'lucide-react';

export function ContributorsPage() {
  const { termGroups } = useTermGroups();

  const contributions = termGroups.flatMap(group =>
    group.definitions.map(def => ({
      term: group.term,
      author: def.author,
      recorder: def.recorder,
      createdAt: def.createdAt,
      votes: def.votes,
    }))
  ).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  const handleExport = () => {
    const csvData = contributions.map(contribution => ({
      詞彙: contribution.term,
      作者: contribution.author,
      記錄者: contribution.recorder || '',
      時間: new Date(contribution.createdAt).toLocaleString('zh-TW'),
      讚同數: contribution.votes
    }));
    exportToCSV(csvData, '貢獻紀錄');
  };

  return (
    <div className="py-8">
      {/* Previous sections remain unchanged */}
      
      {/* 貢獻紀錄區塊 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">貢獻紀錄</h2>
          <ExportButton onClick={handleExport} />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">作者</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                  <div className="flex items-center gap-1 group relative">
                    記錄者
                    <HelpCircle size={16} className="text-gray-400" />
                    <div className="absolute left-0 top-6 bg-gray-800 text-white text-xs rounded px-2 py-1 w-48 invisible group-hover:visible z-10">
                      根據原著進行摘錄的二手資訊提供者
                    </div>
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">詞彙</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">時間</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">讚同數</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {contributions.map((contribution, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">{contribution.author}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{contribution.recorder || '-'}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{contribution.term}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {new Date(contribution.createdAt).toLocaleString('zh-TW')}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{contribution.votes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}