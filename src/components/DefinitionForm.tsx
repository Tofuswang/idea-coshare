import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface DefinitionFormProps {
  onSubmit: (definition: {
    term: string;
    content: string;
    author: string;
    recorder?: string;
    source?: string;
    category?: string[];
  }) => void;
}

export function DefinitionForm({ onSubmit }: DefinitionFormProps) {
  const [term, setTerm] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [recorder, setRecorder] = useState('');
  const [source, setSource] = useState('');
  const [category, setCategory] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      term,
      content,
      author: author || '匿名',
      recorder: isRecording ? recorder || '匿名記錄者' : undefined,
      source: source || undefined,
      category: category ? category.split(',').map(c => c.trim()) : undefined,
    });
    setTerm('');
    setContent('');
    setAuthor('');
    setRecorder('');
    setSource('');
    setCategory('');
    setIsRecording(false);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">分享您的定義</h2>
      
      <div className="mb-4">
        <label htmlFor="term" className="block text-sm font-medium text-gray-700 mb-1">
          詞彙
        </label>
        <input
          id="term"
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          placeholder="例如：愛、家人、g0v"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
          定義內容
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          rows={4}
          placeholder="我認為愛是一道溫暖的光，溫暖了在場的所有人"
          required
        />
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-1">
          <label htmlFor="author" className="block text-sm font-medium text-gray-700">
            作者
          </label>
          <label className="flex items-center text-sm text-gray-600">
            <input
              type="checkbox"
              checked={isRecording}
              onChange={(e) => setIsRecording(e.target.checked)}
              className="rounded border-gray-300 text-yellow-600 focus:ring-yellow-500 mr-2"
            />
            這不是我分享的定義
          </label>
        </div>
        <input
          id="author"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="不填寫則顯示為匿名"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>

      {isRecording && (
        <div className="mb-4">
          <label htmlFor="recorder" className="block text-sm font-medium text-gray-700 mb-1">
            記錄者
          </label>
          <input
            id="recorder"
            type="text"
            value={recorder}
            onChange={(e) => setRecorder(e.target.value)}
            placeholder="不填寫則顯示為匿名記錄者"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
      )}

      <div className="mb-4">
        <label htmlFor="source" className="block text-sm font-medium text-gray-700 mb-1">
          來源（選填）
        </label>
        <input
          id="source"
          type="url"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          placeholder="https://"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
          分類（選填，用逗號分隔）
        </label>
        <input
          id="category"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          placeholder="技術、社會、歷史"
        />
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-md transition-colors"
      >
        <Send size={18} />
        提交定義
      </button>
    </form>
  );
}