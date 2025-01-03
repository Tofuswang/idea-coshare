import React from 'react';
import { X } from 'lucide-react';

interface UsageGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function UsageGuideModal({ isOpen, onClose }: UsageGuideModalProps) {
  return (
    <div 
      className={`fixed inset-0 bg-black transition-opacity duration-300 z-50 ${
        isOpen ? 'bg-opacity-50 pointer-events-auto' : 'bg-opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex items-center justify-center min-h-screen p-4">
        <div 
          className={`bg-white rounded-lg w-full max-w-2xl relative transform transition-all duration-300 max-h-[90vh] ${
            isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
          
          <div className="p-6 overflow-y-auto h-full max-h-[calc(90vh-2rem)] hover:overflow-y-scroll">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">使用說明</h2>
            
            <div className="space-y-6">
              <section>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">新增定義</h3>
                <div className="text-gray-600 space-y-2">
                  <p>1. 在頁面上方的表單中輸入詞彙和定義</p>
                  <p>2. 可選擇填寫作者名稱（預設為匿名）</p>
                  <p>3. 如果是記錄他人的定義，請勾選「這不是我分享的定義」</p>
                  <p>4. 可以添加來源連結和分類標籤</p>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">瀏覽與搜尋</h3>
                <div className="text-gray-600 space-y-2">
                  <p>1. 使用搜尋欄位尋找特定詞彙</p>
                  <p>2. 可以依據詞彙、內容或分類進行搜尋</p>
                  <p>3. 點擊讚同按鈕表示認同該定義</p>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">匯出資料</h3>
                <div className="text-gray-600 space-y-2">
                  <p>1. 點擊右上角的「導出 CSV」按鈕</p>
                  <p>2. 可以下載所有定義的完整資料</p>
                  <p>3. 在「貢獻者列表」頁面也可以匯出貢獻紀錄</p>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">注意事項</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>請遵守使用條款，不要發布不當內容</li>
                  <li>引用他人定義時請標註來源</li>
                  <li>分享的定義將以創用 CC-BY 4.0 方式進行開放授權</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}