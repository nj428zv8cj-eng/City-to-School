import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Calendar, 
  Users2, 
  FileText, 
  Lightbulb, 
  CheckCircle,
  ExternalLink,
  Layers,
  ArrowRight
} from 'lucide-react';
import { ROADMAP_STEPS } from '../data/mockData';
import { NavigationSection } from '../types';

interface RoadmapSectionProps {
  onNavigateToResources?: () => void;
}

export const RoadmapSection: React.FC<RoadmapSectionProps> = ({ onNavigateToResources }) => {
  // Store expanded steps (default STEP 1 is open)
  const [expandedSteps, setExpandedSteps] = useState<number[]>([1]);
  const [selectedTab, setSelectedTab] = useState<number>(1);

  const toggleStep = (id: number) => {
    setExpandedSteps((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const expandAll = () => {
    setExpandedSteps([1, 2, 3, 4, 5, 6, 7]);
  };

  const collapseAll = () => {
    setExpandedSteps([]);
  };

  const handleStepSelect = (id: number) => {
    setSelectedTab(id);
    if (!expandedSteps.includes(id)) {
      setExpandedSteps((prev) => [...prev, id]);
    }
    const element = document.getElementById(`step-card-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section id="roadmap" className="py-16 sm:py-24 bg-[#F8FBFF] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#009EDB] font-bold text-xs tracking-widest uppercase mb-3 block">
            STEP-BY-STEP ROADMAP
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            City to School 진행 로드맵
          </h2>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
            준비부터 성과 확인까지, 연간 7단계 인터랙티브 로드맵입니다.<br />
            각 단계를 클릭하여 구체적인 실행 계획과 산출물, 현장 팁을 확인하세요.
          </p>
        </div>

        {/* Global Expand/Collapse & Step Tabs */}
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Quick Step Bar */}
          <div className="flex items-center overflow-x-auto w-full md:w-auto p-1.5 bg-white border border-slate-100 rounded-full shadow-2xs scrollbar-none gap-1">
            {ROADMAP_STEPS.map((s) => (
              <button
                key={s.id}
                id={`roadmap-tab-${s.id}`}
                onClick={() => handleStepSelect(s.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  selectedTab === s.id
                    ? 'bg-[#009EDB] text-white shadow-2xs'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {s.stepNumber}
              </button>
            ))}
          </div>

          {/* Expand/Collapse buttons */}
          <div className="flex items-center gap-2 self-end md:self-auto text-xs">
            <button
              id="roadmap-expand-all-btn"
              onClick={expandAll}
              className="px-3.5 py-1.5 rounded-full bg-white border border-slate-100 text-slate-600 hover:text-[#009EDB] font-semibold transition-colors shadow-2xs"
            >
              모든 단계 펼치기
            </button>
            <button
              id="roadmap-collapse-all-btn"
              onClick={collapseAll}
              className="px-3.5 py-1.5 rounded-full bg-white border border-slate-100 text-slate-600 hover:text-slate-900 font-semibold transition-colors shadow-2xs"
            >
              모두 접기
            </button>
          </div>
        </div>

        {/* Interactive Vertical Timeline */}
        <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-8 md:ml-12 space-y-6">
          {ROADMAP_STEPS.map((step) => {
            const isExpanded = expandedSteps.includes(step.id);
            const isSelected = selectedTab === step.id;

            return (
              <div
                key={step.id}
                id={`step-card-${step.id}`}
                className="relative pl-6 sm:pl-8 md:pl-10"
              >
                {/* Node circle on timeline */}
                <div
                  className={`absolute -left-[17px] top-4 w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 ${
                    isSelected || isExpanded
                      ? 'bg-[#009EDB] text-white ring-4 ring-blue-50 shadow-sm'
                      : 'bg-white text-slate-400 border-2 border-slate-200'
                  }`}
                >
                  {step.id}
                </div>

                {/* Step Card Container */}
                <div
                  className={`rounded-[28px] border transition-all duration-300 bg-white ${
                    isSelected
                      ? 'border-[#009EDB] shadow-md shadow-blue-50/50'
                      : 'border-slate-100 shadow-sm hover:border-slate-200'
                  }`}
                >
                  {/* Card Header (Click to toggle) */}
                  <button
                    id={`step-toggle-${step.id}`}
                    onClick={() => toggleStep(step.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-50 text-[#009EDB] font-mono">
                          {step.stepNumber}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-slate-400 font-medium">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          {step.duration}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-1">
                        {step.title}
                      </h3>
                      
                      <p className="text-sm text-slate-500 leading-relaxed font-normal">
                        {step.shortDesc}
                      </p>
                    </div>

                    {/* Expand/Collapse Icon */}
                    <div className="w-9 h-9 rounded-full bg-slate-50 text-slate-400 group-hover:text-slate-700 flex items-center justify-center shrink-0 border border-slate-100">
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-[#009EDB]" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </div>
                  </button>

                  {/* Expandable Details Body */}
                  {isExpanded && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-7 pt-2 border-t border-slate-100 animate-in fade-in duration-200">
                      
                      {/* Full description */}
                      <div className="bg-[#F8FBFF] p-4 rounded-2xl border border-slate-100 text-sm text-slate-600 leading-relaxed mb-5 font-normal">
                        {step.fullDesc}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                        {/* Key Actors */}
                        <div className="bg-slate-50/60 p-4 rounded-2xl border border-slate-100">
                          <div className="flex items-center gap-2 text-xs font-bold text-slate-700 mb-2.5">
                            <Users2 className="w-4 h-4 text-[#009EDB]" />
                            주요 참여 주체
                          </div>
                          <ul className="space-y-1.5 text-xs text-slate-500 font-medium">
                            {step.keyActors.map((actor, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#009EDB]" />
                                {actor}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Deliverables */}
                        <div className="bg-slate-50/60 p-4 rounded-2xl border border-slate-100">
                          <div className="flex items-center gap-2 text-xs font-bold text-slate-700 mb-2.5">
                            <FileText className="w-4 h-4 text-emerald-600" />
                            핵심 산출물 및 문서
                          </div>
                          <ul className="space-y-1.5 text-xs text-slate-500 font-medium">
                            {step.deliverables.map((item, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Checklist */}
                      <div className="mb-5 bg-white p-4 rounded-2xl border border-slate-100 shadow-2xs">
                        <p className="text-xs font-bold text-slate-700 mb-2.5 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-[#009EDB]" />
                          담당자 필수 체크리스트
                        </p>
                        <div className="space-y-2 text-xs text-slate-600">
                          {step.checklist.map((check, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <input
                                type="checkbox"
                                defaultChecked={idx === 0}
                                className="mt-0.5 rounded text-[#009EDB] focus:ring-[#009EDB]"
                                id={`check-${step.id}-${idx}`}
                              />
                              <label htmlFor={`check-${step.id}-${idx}`} className="cursor-pointer font-normal text-slate-600">
                                {check}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Operating Tips Callout */}
                      <div className="flex items-start gap-3 bg-amber-50/50 border border-amber-100 p-4 rounded-2xl text-xs text-amber-900 leading-relaxed">
                        <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="font-bold">운영 노하우 & TIP: </strong>
                          {step.tips}
                        </div>
                      </div>

                      {/* Bottom Shortcut to Resources */}
                      {onNavigateToResources && (
                        <div className="mt-4 pt-3 border-t border-slate-100 flex justify-end">
                          <button
                            onClick={onNavigateToResources}
                            className="text-xs font-bold text-[#009EDB] hover:underline flex items-center gap-1 cursor-pointer transition-colors"
                          >
                            이 단계에 필요한 서식 자료실에서 찾기 <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}

                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
