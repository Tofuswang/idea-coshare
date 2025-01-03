import React from 'react';

export function PrivacyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">隱私權協議</h1>
        
        <div className="prose prose-yellow max-w-none">
          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">1. 資料收集</h2>
          <p className="text-gray-600 mb-4">
            我們只收集使用者主動提供的資訊，包括：
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>使用者名稱（可選擇匿名）</li>
            <li>分享的詞彙定義內容</li>
            <li>互動資料（如按讚、評論）</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">2. 資料使用</h2>
          <p className="text-gray-600 mb-4">
            收集的資料僅用於：
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>提供平台基本功能</li>
            <li>改善使用者體驗</li>
            <li>產生統計分析報告</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">3. 資料保護</h2>
          <p className="text-gray-600 mb-4">
            我們採取適當的技術措施保護使用者資料，防止未經授權的存取、使用或洩漏。
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">4. 使用者權利</h2>
          <p className="text-gray-600 mb-4">
            使用者可以隨時：
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>查看自己發布的內容</li>
            <li>修改或刪除個人資料</li>
            <li>要求匿名化處理</li>
          </ul>
        </div>
      </div>
    </main>
  );
}