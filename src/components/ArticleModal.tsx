import React from 'react';
import { X, Calendar, User, Eye, Tag, Share2, ArrowLeft } from 'lucide-react';
import { NewsItem } from '../types';

interface ArticleModalProps {
  article: NewsItem | null;
  onClose: () => void;
  onNotify: (msg: string) => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose, onNotify }) => {
  if (!article) return null;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      onNotify('게시물 링크가 클립보드에 복사되었습니다.');
    } else {
      onNotify('링크를 복사했습니다.');
    }
  };

  return (
    <div
      id="article-modal-backdrop"
      className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="article-modal-content"
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-[#009EDB]">
              {article.category}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
              title="공유하기"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              id="article-modal-close-btn"
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
              title="닫기"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug mb-4">
            {article.title}
          </h2>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pb-6 mb-6 border-b border-slate-100">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-slate-400" />
              {article.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-slate-400" />
              조회 {article.views}
            </span>
          </div>

          {/* Optional Thumbnail */}
          {article.thumbnail && (
            <div className="mb-6 rounded-[20px] overflow-hidden shadow-sm max-h-80 w-full bg-slate-100">
              <img
                src={article.thumbnail}
                alt={article.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          )}

          {/* Summary Quote Box */}
          <div className="bg-[#F8FBFF] border-l-3 border-[#009EDB] p-4 rounded-r-[16px] mb-6 text-sm sm:text-base font-semibold text-slate-700 leading-relaxed">
            {article.summary}
          </div>

          {/* Content */}
          <div className="text-slate-600 leading-relaxed text-sm sm:text-base whitespace-pre-line space-y-4 font-normal">
            {article.content}
          </div>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2">
              <Tag className="w-3.5 h-3.5 text-slate-400" />
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-50 text-slate-600 border border-slate-100"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Bottom Close */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors cursor-pointer"
            >
              목록으로 돌아가기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
