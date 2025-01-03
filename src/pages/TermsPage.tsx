import React from 'react';

export function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">使用條款</h1>
        
        <div className="prose prose-yellow max-w-none">
          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">1. 服務說明</h2>
          <p className="text-gray-600 mb-4">
            共享定義小幫手是一個開放的詞彙定義分享平台，讓使用者可以分享、查看並討論各種詞彙的定義。
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">2. 使用規範</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>使用者分享的內容必須遵守相關法律法規</li>
            <li>禁止發布違法、暴力、色情等不當內容</li>
            <li>尊重他人智慧財產權，適當標註引用來源</li>
            <li>禁止惡意攻擊或騷擾其他使用者</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">3. 內容授權</h2>
          <p className="text-gray-600 mb-4">
            使用者同意將發布的內容以創用CC授權方式分享，允許他人在標示來源的情況下轉載使用。
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">4. 免責聲明</h2>
          <p className="text-gray-600 mb-4">
            平台不對使用者發布的內容真實性負責，使用者應自行判斷內容的可信度。
          </p>
        </div>
      </div>
    </main>
  );
}