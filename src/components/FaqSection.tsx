import React, { useState, useMemo } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Search, MessageCircleQuestion, ArrowRight } from 'lucide-react';
import { FAQ_DATA } from '../data/mockData';
import { FaqCategory } from '../types';

interface FaqSectionProps {
  onOpenInquiry: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenInquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<FaqCategory>('전체');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);

  const categories: FaqCategory[] = [
    '전체',
    '사업 참여',
    '사업 운영',
    '예산',
    '아동권리교육',
    '아동참여 및 의견제안',
    '기타'
  ];

  const filteredFaqs = useMemo(() => {
    let list = FAQ_DATA;

    if (selectedCategory !== '전체') {
      list = list.filter((item) => item.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (item) =>
          item.question.toLowerCase().includes(q) ||
          item.answer.toLowerCase().includes(q)
      );
    }

    return list;
  }, [selectedCategory, searchQuery]);

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-[#009EDB] font-bold text-xs tracking-widest uppercase mb-3 block">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            자주 묻는 질문 (FAQ)
          </h2>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
            지자체 공무원과 초등학교 교직원이 사업 참여 및 운영 시 가장 궁금해하시는 점을 정리했습니다.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center overflow-x-auto gap-1 p-1 bg-[#F8FBFF] border border-slate-100 rounded-full mb-6 scrollbar-none shadow-2xs">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`faq-cat-${cat}`}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-[#009EDB] text-white shadow-2xs'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Keyword Search */}
        <div className="relative mb-8">
          <input
            type="text"
            id="faq-search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="궁금한 단어나 질문을 검색해 보세요 (예: 예산, 의견전달, 교사 연구회)"
            className="w-full pl-11 pr-4 py-3 text-sm bg-[#F8FBFF] border border-slate-100 rounded-full focus:outline-none focus:ring-2 focus:ring-[#009EDB] focus:bg-white shadow-2xs transition-colors"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className={`rounded-[20px] border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#009EDB]/30 bg-blue-50/20 shadow-xs'
                    : 'border-slate-100 hover:border-slate-200 bg-white'
                }`}
              >
                {/* Question Trigger */}
                <button
                  id={`faq-btn-${faq.id}`}
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3.5">
                    <span className="w-6 h-6 rounded-full bg-blue-50 text-[#009EDB] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      Q
                    </span>
                    <div>
                      <span className="inline-block text-[11px] font-bold text-slate-400 mb-1">
                        {faq.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-slate-50 text-slate-500 flex items-center justify-center shrink-0 mt-0.5">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#009EDB]" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Answer Accordion */}
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-1 border-t border-slate-100 animate-in fade-in duration-200">
                    <div className="flex items-start gap-3.5 pl-0 sm:pl-9">
                      <div className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal bg-white p-4 rounded-[16px] border border-slate-100 shadow-2xs w-full">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 bg-[#F8FBFF] rounded-[24px] p-6 sm:p-8 border border-slate-100 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <MessageCircleQuestion className="w-5 h-5 text-[#009EDB]" />
              찾으시는 답변이 없으신가요?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              지자체 참여 요건, 학교 매칭, 예산 편성 등 세부 사항을 직접 문의해 주시면 친절히 안내해 드립니다.
            </p>
          </div>

          <button
            id="faq-inquiry-cta-btn"
            onClick={onOpenInquiry}
            className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#009EDB] hover:bg-[#0089bd] transition-colors shadow-xs whitespace-nowrap cursor-pointer"
          >
            사업 참여 1:1 문의하기
          </button>
        </div>

      </div>
    </section>
  );
};
