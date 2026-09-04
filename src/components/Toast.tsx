import React, { useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div
      id="toast-notification"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-slate-900/95 text-white px-5 py-3 rounded-full shadow-xl border border-slate-800 text-xs sm:text-sm animate-in fade-in slide-in-from-bottom-5 duration-300 backdrop-blur-xs"
      role="alert"
    >
      <div className="w-5 h-5 rounded-full bg-[#009EDB] flex items-center justify-center text-white shrink-0">
        <CheckCircle className="w-3.5 h-3.5" />
      </div>
      <p className="font-medium text-slate-100">{message}</p>
      <button
        id="toast-close-btn"
        onClick={onClose}
        className="text-slate-400 hover:text-white ml-2 p-1 rounded-full transition-colors cursor-pointer"
        aria-label="닫기"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
