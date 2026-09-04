import React from 'react';
import { BookOpen, Search, MessageSquarePlus, RefreshCw, ArrowRight } from 'lucide-react';
import { CORE_STEPS } from '../data/mockData';

export const CoreConceptSection: React.FC = () => {
  const stepIcons = [BookOpen, Search, MessageSquarePlus, RefreshCw];

  return (
    <section id="core-concept-section" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[#009EDB] font-bold text-xs tracking-widest uppercase mb-3 block">
            CORE ARCHITECTURE
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
            City to School 핵심 운영 구조
          </h2>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
            아동의 배움에서 출발하여 지역사회의 제도와 환경이 변화하기까지,<br className="hidden sm:inline" />
            4단계의 선순환 프로세스를 통해 실질적인 참여권을 보장합니다.
          </p>
        </div>

        {/* 4 Core Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {CORE_STEPS.map((item, index) => {
            const Icon = stepIcons[index % stepIcons.length];
            return (
              <div
                key={item.step}
                id={`core-step-card-${item.step}`}
                className="relative bg-white rounded-2xl p-6 sm:p-7 border border-slate-100 hover:border-[#009EDB]/40 hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
              >
                {/* Top Badge & Number */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-[#009EDB] transition-colors">
                      STAGE {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-blue-50/60 group-hover:bg-[#009EDB] group-hover:text-white text-[#009EDB] flex items-center justify-center transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-[#009EDB] transition-colors mb-1.5 flex items-center gap-2">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-400 mb-3">
                    {item.subtitle}
                  </p>

                  {/* One-line Description */}
                  <p className="text-sm text-slate-500 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Visual Arrow for Desktop */}
                {index < 3 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-6 h-6 rounded-full bg-white border border-slate-100 shadow-xs flex items-center justify-center text-slate-400">
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Catchphrase Banner */}
        <div className="mt-12 bg-[#F8FBFF] border border-slate-100 rounded-2xl p-5 text-center flex flex-col sm:flex-row items-center justify-center gap-3 text-slate-700 font-medium text-sm">
          <span className="w-2 h-2 rounded-full bg-[#009EDB]" />
          <span>
            배우고, 발견하고, 제안하고, 함께 바꿉니다 — 아동과 도시가 함께 성장하는 가장 확실한 방법입니다.
          </span>
        </div>

      </div>
    </section>
  );
};
