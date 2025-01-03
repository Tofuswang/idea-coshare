import React from 'react';
import { useTermGroups } from '../hooks/useTermGroups';
import { ExportButton } from '../components/ExportButton';
import { VideoCard } from '../components/VideoCard';
import { exportToCSV } from '../utils/csvExport';
import { Lightbulb, Heart, Share2, Github, Instagram, HelpCircle } from 'lucide-react';

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
    <div className="py-8 space-y-8">
      {/* 專案介紹 */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">關於本專案</h2>
        <div className="prose prose-yellow max-w-none">
          <p className="text-lg text-gray-700 mb-6">
            定義小幫手是一個開放的詞彙定義分享平台，讓每個人都能分享自己對詞彙的理解，
            並看到他人的觀點。透過這個平台，我們希望能夠：
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-4 bg-yellow-50 rounded-lg">
              <Lightbulb className="text-yellow-600 mb-2" size={32} />
              <h3 className="font-semibold text-gray-800 mb-2">促進理解</h3>
              <p className="text-gray-600">
                透過分享不同的定義，幫助人們更全面地理解各種概念
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-yellow-50 rounded-lg">
              <Heart className="text-yellow-600 mb-2" size={32} />
              <h3 className="font-semibold text-gray-800 mb-2">建立連結</h3>
              <p className="text-gray-600">
                連結不同背景的人，創造更多對話與交流的機會
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-yellow-50 rounded-lg">
              <Share2 className="text-yellow-600 mb-2" size={32} />
              <h3 className="font-semibold text-gray-800 mb-2">開放分享</h3>
              <p className="text-gray-600">
                以開放授權方式分享知識，讓知識能自由流通
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 介紹影片 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">專案介紹影片</h2>
        <VideoCard
          thumbnailUrl="https://img.youtube.com/vi/5xA-SBlVk4Q/maxresdefault.jpg"
          videoUrl="https://www.youtube.com/watch?v=5xA-SBlVk4Q"
          title="定義小幫手介紹"
          description="讓我們一起來看看定義小幫手是如何運作的，以及它能如何幫助我們更好地理解這個世界。"
        />
      </section>

      {/* 關於坑坑主 */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">關於本坑坑主</h2>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Tofus</h3>
          <p className="text-gray-600 mb-4">
            g0v 參與者，<a href='https://www.gapyear.tw/'>休學中</a> 。相信透過開放協作，我們可以一起建立更好的知識分享生態系。
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/Tofuswang"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-yellow-600 transition-colors"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.instagram.com/tofuswang"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-yellow-600 transition-colors"
            >
              <Instagram size={20} />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </section>

      {/* 貢獻紀錄區塊 */}
      <section className="bg-white rounded-lg shadow-md overflow-hidden">
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
      </section>
    </div>
  );
}