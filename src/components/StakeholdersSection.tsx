import React from 'react';
import { School, Building2, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { STAKEHOLDERS_DATA } from '../data/mockData';

interface StakeholdersSectionProps {
  onOpenInquiry?: () => void;
}

export const StakeholdersSection: React.FC<StakeholdersSectionProps> = () => {
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
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed break-keep">
            학교, 유니세프아동친화도시, 유니세프 한국위원회가 연계하여<br />
            아동친화적인 거버넌스를 만들어갑니다.
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
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-black text-slate-900 flex items-center gap-2">
                      {stakeholder.role}
                    </h3>

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
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
