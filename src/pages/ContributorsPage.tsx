import React from 'react';
import { useTermGroups } from '../hooks/useTermGroups';
import { ExportButton } from '../components/ExportButton';
import { exportToCSV } from '../utils/csvExport';
import { VideoCard } from '../components/VideoCard';
import { Lightbulb, Heart, Share2, Github, Instagram, Mail } from 'lucide-react';

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
      {/* 創作理念區塊 */}
      <div className="bg-gradient-to-br from-yellow-50 to-white rounded-lg shadow-md p-8 mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">創作理念</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-4">
            <div className="bg-yellow-100 p-3 rounded-full mb-4">
              <Lightbulb className="text-yellow-600" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">集體智慧</h3>
            <p className="text-gray-600">
              透過群眾的力量，收集並整理不同視角下的詞彙定義，豐富我們對語言的理解。
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-4">
            <div className="bg-yellow-100 p-3 rounded-full mb-4">
              <Heart className="text-yellow-600" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">開放共享</h3>
            <p className="text-gray-600">
              採用創用 CC 授權，讓知識自由流動，促進社群間的交流與理解。
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-4">
            <div className="bg-yellow-100 p-3 rounded-full mb-4">
              <Share2 className="text-yellow-600" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">協作共創</h3>
            <p className="text-gray-600">
              鼓勵每個人都能參與貢獻，記錄並分享生活中遇到的有趣詞彙定義。
            </p>
          </div>
        </div>

        <div className="mt-8 p-6 bg-white rounded-lg border border-yellow-100">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">專案願景</h3>
          <p className="text-gray-600 leading-relaxed">
            共享定義小幫手致力於建立一個開放、友善的平台，讓每個人都能分享自己對詞彙的理解和詮釋。
            我們相信，語言是活的，每個人都可能對同一個詞彙有不同的理解和詮釋。
            透過收集這些不同的視角，我們不僅能夠更全面地理解語言的豐富性，
            也能夠促進社群之間的理解與交流。
          </p>
        </div>

        {/* 專案介紹影片 */}
        <div className="mt-8">
          <VideoCard
            thumbnailUrl="https://i.ytimg.com/vi/5xA-SBlVk4Q/maxresdefault.jpg"
            videoUrl="https://www.youtube.com/watch?v=5xA-SBlVk4Q"
            title="專案介紹影片"
            description="想了解更多關於定義小幫手的故事嗎？讓我來為你介紹這個專案的緣起和願景。"
          />
        </div>

        {/* 創作者簡介 */}
        <div className="mt-6">
          <div className="bg-white w-full px-6 py-4 rounded-lg shadow-sm border border-yellow-100">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-medium text-gray-900">Tofus</span>
                <span className="text-sm text-gray-500">
                  本專案坑主、
                  <a 
                    href="https://www.gapyear.tw/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-yellow-600 hover:text-yellow-700 transition-colors"
                  >
                    休學仔
                  </a>
                  、愛設計小東西
                </span>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/Tofuswang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  title="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.instagram.com/0xtofus/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pink-600 transition-colors"
                  title="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="mailto:terry.f.wang@gmail.com"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  title="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">記錄者</th>
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