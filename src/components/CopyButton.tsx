import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyButtonProps {
  textToCopy: string;
  label?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'icon';
}

export const CopyButton: React.FC<CopyButtonProps> = ({
  textToCopy,
  label = 'Sao chép',
  className = '',
  variant = 'secondary'
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = textToCopy;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (variant === 'icon') {
    return (
      <button
        onClick={handleCopy}
        title={copied ? 'Đã sao chép!' : 'Sao chép nội dung'}
        aria-label="Sao chép"
        className={`p-1.5 rounded-lg transition-all duration-150 inline-flex items-center justify-center ${
          copied
            ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300'
            : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100 bg-white border border-slate-200 shadow-xs'
        } ${className}`}
      >
        {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
      </button>
    );
  }

  const baseStyles = 'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 shadow-xs active:scale-95 cursor-pointer';
  
  const variantStyles = {
    primary: copied
      ? 'bg-emerald-600 text-white hover:bg-emerald-700'
      : 'bg-indigo-600 text-white hover:bg-indigo-700',
    secondary: copied
      ? 'bg-emerald-50 text-emerald-700 border border-emerald-300'
      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200',
    outline: copied
      ? 'border border-emerald-500 text-emerald-600 bg-emerald-50/50'
      : 'border border-slate-300 text-slate-700 hover:bg-slate-50 bg-white'
  }[variant];

  return (
    <button
      onClick={handleCopy}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-emerald-600" />
          <span>Đã sao chép!</span>
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5" />
          <span>{label}</span>
        </>
      )}
    </button>
  );
};
