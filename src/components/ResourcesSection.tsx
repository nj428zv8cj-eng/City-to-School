import React, { useState, useMemo } from 'react';
import { 
  Download, 
  Search, 
  FileText, 
  FileSpreadsheet, 
  FileCode, 
  ArrowRight, 
  CheckCircle2, 
  Filter, 
  Layers,
  LayoutGrid,
  List
} from 'lucide-react';
import { RESOURCES_DATA } from '../data/mockData';
import { ResourceCategory, ResourceItem } from '../types';
import { triggerResourceDownload } from '../utils/fileDownloader';

interface ResourcesSectionProps {
  isHomeViewOnly?: boolean;
  onNavigateToAllResources?: () => void;
  onNotify: (msg: string) => void;
}

export const ResourcesSection: React.FC<ResourcesSectionProps> = ({
  isHomeViewOnly = false,
  onNavigateToAllResources,
  onNotify
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ResourceCategory>('전체');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');

  const categories: ResourceCategory[] = [
    '전체',
    '사업 안내',
    '아동권리교육',
    '아동참여활동',
    '운영 양식',
    '홍보자료'
  ];

  const filteredResources = useMemo(() => {
    let list = RESOURCES_DATA;

    if (selectedCategory !== '전체') {
      list = list.filter((item) => item.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q)
      );
    }

    return list;
  }, [selectedCategory, searchQuery]);

  const displayList = isHomeViewOnly ? filteredResources.slice(0, 4) : filteredResources;

  const getFormatBadge = (fileType: string) => {
    switch (fileType) {
      case 'PDF':
        return 'bg-red-50 text-red-600 border-transparent';
      case 'PPTX':
        return 'bg-orange-50 text-orange-600 border-transparent';
      case 'HWP':
        return 'bg-blue-50 text-[#009EDB] border-transparent';
      case 'DOCX':
        return 'bg-blue-50 text-blue-700 border-transparent';
      default:
        return 'bg-slate-50 text-slate-600 border-transparent';
    }
  };

  const handleDownload = (res: ResourceItem) => {
    triggerResourceDownload(res, onNotify);
  };

  return (
    <section id="resources" className="py-16 sm:py-20 bg-[#F8FBFF] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-[#009EDB] font-bold text-xs tracking-widest uppercase mb-3 block">
              DOCUMENT DOWNLOAD CENTER
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {isHomeViewOnly ? '주요 사업 자료' : 'City to School 자료실'}
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              사업 안내서, 교육 워크북, 정책 제안서 표준 양식 등 운영에 필요한 공식 문서를 제공합니다.
            </p>
          </div>

          {isHomeViewOnly && onNavigateToAllResources && (
            <button
              id="resources-view-all-btn"
              onClick={onNavigateToAllResources}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-white bg-[#009EDB] hover:bg-[#0089bd] transition-colors self-start md:self-auto shadow-xs cursor-pointer"
            >
              <span>자료실 바로가기</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Search & Category Filter (Full view only) */}
        {!isHomeViewOnly && (
          <div className="space-y-4 mb-8">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              
              {/* Category pills */}
              <div className="flex items-center overflow-x-auto gap-1 p-1 bg-white border border-slate-100 rounded-full shadow-2xs">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    id={`res-cat-${cat}`}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                      selectedCategory === cat
                        ? 'bg-[#009EDB] text-white shadow-2xs'
                        : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* View toggle & Search */}
              <div className="flex items-center gap-2">
                <div className="relative flex-1 sm:w-64">
                  <input
                    type="text"
                    id="resource-search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="문서명, 내용 검색"
                    className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-slate-100 rounded-full focus:outline-none focus:ring-2 focus:ring-[#009EDB] shadow-2xs"
                  />
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                </div>

                <div className="flex items-center border border-slate-100 rounded-full p-1 bg-white shadow-2xs">
                  <button
                    onClick={() => setViewMode('cards')}
                    className={`p-1.5 rounded-full ${viewMode === 'cards' ? 'bg-blue-50 text-[#009EDB]' : 'text-slate-400'}`}
                    title="카드 보기"
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('table')}
                    className={`p-1.5 rounded-full ${viewMode === 'table' ? 'bg-blue-50 text-[#009EDB]' : 'text-slate-400'}`}
                    title="목록 보기"
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredResources.length === 0 && (
          <div className="text-center py-16 bg-white rounded-[24px] border border-dashed border-slate-200">
            <FileText className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <p className="text-slate-600 font-semibold text-sm">해당 조건에 맞는 자료가 없습니다.</p>
            <p className="text-slate-400 text-xs mt-1">다른 검색어를 입력해 보세요.</p>
          </div>
        )}

        {/* Grid/Card View */}
        {viewMode === 'cards' || isHomeViewOnly ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayList.map((res) => (
              <div
                key={res.id}
                id={`resource-card-${res.id}`}
                className="bg-white rounded-[24px] p-6 border border-slate-100 hover:border-[#009EDB]/30 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100/70 text-slate-600">
                      {res.category}
                    </span>
                    <span className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full ${getFormatBadge(res.fileType)}`}>
                      {res.fileType}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#009EDB] transition-colors leading-snug mb-2 line-clamp-2">
                    {res.title}
                  </h3>

                  {/* Desc */}
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 mb-4 font-normal">
                    {res.description}
                  </p>
                </div>

                {/* Bottom Meta & Download Button */}
                <div className="pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-3">
                    <span>{res.date}</span>
                    <span>{res.fileSize}</span>
                  </div>

                  <button
                    id={`res-download-btn-${res.id}`}
                    onClick={() => handleDownload(res)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full text-xs font-bold text-slate-700 hover:text-white bg-[#F8FBFF] hover:bg-[#009EDB] border border-slate-100 hover:border-transparent transition-all cursor-pointer shadow-2xs group-hover:shadow"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>다운로드</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Table / List View */
          <div className="bg-white rounded-[24px] border border-slate-100 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-600">
                <thead className="bg-[#F8FBFF] border-b border-slate-100 font-bold text-slate-700">
                  <tr>
                    <th className="px-5 py-3.5">구분</th>
                    <th className="px-5 py-3.5">자료명 / 설명</th>
                    <th className="px-5 py-3.5">포맷</th>
                    <th className="px-5 py-3.5">용량</th>
                    <th className="px-5 py-3.5">등록일</th>
                    <th className="px-5 py-3.5 text-right">다운로드</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {displayList.map((res) => (
                    <tr key={res.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-5 py-4 whitespace-nowrap">
                        <span className="font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-[11px]">
                          {res.category}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <div className="font-bold text-slate-900 text-sm mb-0.5">{res.title}</div>
                        <div className="text-slate-400 line-clamp-1 max-w-lg">{res.description}</div>
                      </td>
                      <td className="px-5 py-4 whitespace-nowrap">
                        <span className={`px-2.5 py-0.5 rounded-full font-mono font-bold text-[11px] ${getFormatBadge(res.fileType)}`}>
                          {res.fileType}
                        </span>
                      </td>
                      <td className="px-5 py-4 whitespace-nowrap text-slate-400">
                        {res.fileSize}
                      </td>
                      <td className="px-5 py-4 whitespace-nowrap text-slate-400">
                        {res.date}
                      </td>
                      <td className="px-5 py-4 text-right whitespace-nowrap">
                        <button
                          id={`table-download-btn-${res.id}`}
                          onClick={() => handleDownload(res)}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#009EDB] bg-blue-50 hover:bg-[#009EDB] hover:text-white transition-colors cursor-pointer"
                        >
                          <Download className="w-3.5 h-3.5" />
                          다운로드
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
