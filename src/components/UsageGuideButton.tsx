import React from 'react';
import { HelpCircle } from 'lucide-react';

interface UsageGuideButtonProps {
  onClick: () => void;
  className?: string;
}

export function UsageGuideButton({ onClick, className = '' }: UsageGuideButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 bg-yellow-50 border border-yellow-600 text-yellow-600 rounded-lg hover:bg-white transition-colors ${className}`}
    >
      <HelpCircle size={18} />
      <span>使用說明</span>
    </button>
  );
}