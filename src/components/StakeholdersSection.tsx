import React from 'react';
import { School, Building2, HeartHandshake, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { STAKEHOLDERS_DATA } from '../data/mockData';

interface StakeholdersSectionProps {
  onOpenInquiry: () => void;
}

export const StakeholdersSection: React.FC<StakeholdersSectionProps> = ({ onOpenInquiry }) => {
  const icons = [School, Building2, HeartHandshake];

  return (
    <section id="stakeholders-section" className="py-16 sm:py-20 bg-[#F8FBFF] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[#009EDB] font-bold text-xs tracking-widest uppercase mb-3 block">
            PARTICIPATING ENTITIES
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
            City to School 참여 주체와 역할
          </h2>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
            학교, 유니세프아동친화도시(지자체), 유니세프 한국위원회가 긴밀히 협력하여
            단단한 아동 참여 안전망을 만들어갑니다.
          </p>
        </div>

        {/* 3 Stakeholder Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {STAKEHOLDERS_DATA.map((stakeholder, index) => {
            const Icon = icons[index];

            return (
              <div
                key={stakeholder.role}
                id={`stakeholder-card-${index + 1}`}
                className="bg-white rounded-[28px] p-7 sm:p-8 border border-slate-100 shadow-sm hover:border-[#009EDB]/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Role Badge & Icon */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-2 bg-blue-50 text-[#009EDB]">
                        {stakeholder.badge}
                      </span>
                      <h3 className="text-2xl font-black text-slate-900 flex items-center gap-2">
                        {stakeholder.role}
                      </h3>
                      <p className="text-xs font-medium text-slate-400 mt-1">
                        {stakeholder.target}
                      </p>
                    </div>

                    <div className="w-12 h-12 rounded-2xl bg-blue-50/60 group-hover:bg-[#009EDB] text-[#009EDB] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-2xs">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="w-full h-px bg-slate-100 mb-6" />

                  {/* Duties Bullet list */}
                  <div className="space-y-3.5">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      주요 역할 및 활동
                    </p>
                    {stakeholder.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#009EDB]" />
                        </div>
                        <span className="text-sm text-slate-600 leading-snug font-medium">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Action */}
                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-normal text-slate-400">
                    상호 신뢰 기반 파트너십
                  </span>
                  <button
                    id={`stakeholder-inquiry-btn-${index + 1}`}
                    onClick={onOpenInquiry}
                    className="text-xs font-bold text-[#009EDB] hover:text-[#007fb1] flex items-center gap-1 group-hover:underline cursor-pointer transition-colors"
                  >
                    참여 상담 신청 <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
