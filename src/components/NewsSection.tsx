import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Calendar, 
  Eye, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  FileText, 
  Sparkles, 
  School 
} from 'lucide-react';
import { NEWS_DATA } from '../data/mockData';
import { NewsCategory, NewsItem, NavigationSection } from '../types';

interface NewsSectionProps {
  isHomeViewOnly?: boolean;
  onNavigateToAllNews?: () => void;
  onSelectArticle: (article: NewsItem) => void;
}

export const NewsSection: React.FC<NewsSectionProps> = ({
  isHomeViewOnly = false,
  onNavigateToAllNews,
  onSelectArticle
}) => {
  const [selectedCategory, setSelectedCategory] = useState<NewsCategory>('전체');
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = isHomeViewOnly ? 3 : 6;

  const categories: NewsCategory[] = [
    '전체',
    '공지사항',
    '프로젝트 소식',
    '참여 지자체·학교 이야기'
  ];

  // Filter items
  const filteredItems = useMemo(() => {
    let result = NEWS_DATA;

    if (selectedCategory !== '전체') {
      result = result.filter((item) => item.category === selectedCategory);
    }

    if (searchKeyword.trim()) {
      const q = searchKeyword.toLowerCase();
      result = result.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.summary.toLowerCase().includes(q) ||
          item.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    return result;
  }, [selectedCategory, searchKeyword]);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage) || 1;
  const paginatedItems = isHomeViewOnly
    ? filteredItems.slice(0, 3)
    : filteredItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const getCategoryBadgeColor = (cat: string) => {
    switch (cat) {
      case '공지사항':
        return 'bg-blue-50 text-[#009EDB] border-transparent';
      case '프로젝트 소식':
        return 'bg-sky-50 text-sky-700 border-transparent';
      case '참여 지자체·학교 이야기':
        return 'bg-emerald-50 text-emerald-700 border-transparent';
      default:
        return 'bg-slate-50 text-slate-600 border-transparent';
    }
  };

  return (
    <section id="news" className="py-16 sm:py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-[#009EDB] font-bold text-xs tracking-widest uppercase mb-3 block">
              NEWS & ANNOUNCEMENTS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {isHomeViewOnly ? '최신 소식 및 공지사항' : '공지사항 및 프로젝트 소식'}
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              City to School 프로젝트의 새로운 공고와 현장 실천 이야기를 전해드립니다.
            </p>
          </div>

          {/* '전체보기' button on home mode */}
          {isHomeViewOnly && onNavigateToAllNews && (
            <button
              id="news-view-all-btn"
              onClick={onNavigateToAllNews}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-[#009EDB] bg-blue-50/70 hover:bg-blue-100 transition-colors self-start md:self-auto cursor-pointer"
            >
              <span>전체보기</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Filter Tabs & Search Bar (Only shown in full view mode) */}
        {!isHomeViewOnly && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-100">
            {/* Category tabs */}
            <div className="flex items-center overflow-x-auto w-full sm:w-auto gap-1 p-1 bg-[#F8FBFF] border border-slate-100 rounded-full">
              {categories.map((cat) => (
                <button
                  key={cat}
                  id={`news-cat-${cat}`}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setCurrentPage(1);
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-white text-slate-900 shadow-2xs'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Keyword Search */}
            <div className="relative w-full sm:w-72">
              <input
                type="text"
                id="news-search-input"
                value={searchKeyword}
                onChange={(e) => {
                  setSearchKeyword(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="제목, 내용, 키워드 검색"
                className="w-full pl-9 pr-4 py-2 text-xs bg-[#F8FBFF] border border-slate-100 rounded-full focus:outline-none focus:ring-2 focus:ring-[#009EDB] focus:bg-white transition-colors"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>
        )}

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-[#F8FBFF] rounded-[24px] border border-dashed border-slate-200">
            <FileText className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <p className="text-slate-600 font-semibold text-sm">검색 결과가 없습니다.</p>
            <p className="text-slate-400 text-xs mt-1">다른 검색어나 카테고리를 선택해 보세요.</p>
          </div>
        )}

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedItems.map((item) => (
            <div
              key={item.id}
              id={`news-card-${item.id}`}
              onClick={() => onSelectArticle(item)}
              className="bg-white rounded-[24px] border border-slate-100 overflow-hidden shadow-sm hover:shadow-md hover:border-[#009EDB]/30 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Thumbnail (if available) */}
                {item.thumbnail ? (
                  <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <span
                      className={`absolute top-3 left-3 text-[11px] font-bold px-3 py-1 rounded-full shadow-2xs ${getCategoryBadgeColor(
                        item.category
                      )}`}
                    >
                      {item.category}
                    </span>
                  </div>
                ) : (
                  <div className="p-5 pb-0 flex items-center justify-between">
                    <span
                      className={`text-[11px] font-bold px-3 py-1 rounded-full ${getCategoryBadgeColor(
                        item.category
                      )}`}
                    >
                      {item.category}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium flex items-center gap-1">
                      <Eye className="w-3 h-3" /> {item.views}
                    </span>
                  </div>
                )}

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#009EDB] transition-colors line-clamp-2 leading-snug mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-4 font-normal">
                    {item.summary}
                  </p>
                </div>
              </div>

              {/* Bottom Meta */}
              <div className="px-5 pb-5 pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1 font-normal">
                  <Calendar className="w-3.5 h-3.5" /> {item.date}
                </span>
                <span className="font-bold text-[#009EDB] group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                  자세히 보기 <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination (Only in full view mode) */}
        {!isHomeViewOnly && totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2">
            <button
              id="news-page-prev"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-full border border-slate-100 text-slate-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50"
              aria-label="이전 페이지"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                id={`news-page-num-${pageNum}`}
                onClick={() => setCurrentPage(pageNum)}
                className={`w-8 h-8 rounded-full text-xs font-bold transition-colors ${
                  currentPage === pageNum
                    ? 'bg-[#009EDB] text-white'
                    : 'border border-slate-100 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {pageNum}
              </button>
            ))}

            <button
              id="news-page-next"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-full border border-slate-100 text-slate-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50"
              aria-label="다음 페이지"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
