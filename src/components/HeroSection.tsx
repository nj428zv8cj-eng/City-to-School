import React, { useState } from 'react';
import { 
  ArrowRight, 
  Download, 
  School, 
  Users, 
  Building2, 
  Sparkles, 
  HeartHandshake, 
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Award
} from 'lucide-react';
import { NavigationSection } from '../types';

interface HeroSectionProps {
  onNavigate: (section: NavigationSection) => void;
  onOpenInquiry: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onOpenInquiry }) => {
  const [activeFlowStep, setActiveFlowStep] = useState<number>(1);

  const flowSteps = [
    {
      id: 1,
      title: '학교',
      sub: '아동권리 배움터',
      desc: '교실에서 아동권리를 배우고 교사 학습공동체와 함께 주체적 활동을 시작합니다.',
      icon: School,
      tag: 'START'
    },
    {
      id: 2,
      title: '아동의 참여',
      sub: '동네 탐험 & 의견 발굴',
      desc: '통학로와 마을을 관찰하고 안전·놀 권리 문제를 찾아 정책 제안서를 작성합니다.',
      icon: Users,
      tag: 'VOICE'
    },
    {
      id: 3,
      title: '지자체',
      sub: '검토 & 행정 연계',
      desc: '아동의 제안을 관련 부서에서 심층 검토하고 타당성과 예산을 반영합니다.',
      icon: Building2,
      tag: 'ACTION'
    },
    {
      id: 4,
      title: '지역사회 변화',
      sub: '살기 좋은 아동친화도시',
      desc: '교통안전, 쉼터, 조례 등 실제 변화가 일어나고 그 결과를 아동에게 피드백합니다.',
      icon: Sparkles,
      tag: 'IMPACT'
    }
  ];

  return (
    <section 
      id="hero-section" 
      className="relative overflow-hidden bg-[#F8FBFF] pt-8 pb-16 lg:pt-12 lg:pb-20 border-b border-slate-100"
    >
      {/* Background Soft Accent Tint */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#009EDB]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Hero Card Container */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="bg-white p-8 sm:p-10 rounded-[32px] shadow-sm border border-slate-100 flex-1 flex flex-col justify-center relative overflow-hidden">
              {/* Subtle decorative circle in top right corner */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#009EDB]/5 rounded-full -mr-12 -mt-12 pointer-events-none" />
              
              <div className="relative z-10">
                {/* Clean Kicker */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[#009EDB] font-bold text-xs sm:text-sm tracking-widest uppercase">
                    UNICEF PROJECT
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#009EDB]" />
                  <span className="text-xs font-semibold text-slate-400">
                    아동친화도시 공식 협력사업
                  </span>
                </div>

                {/* Main Headline */}
                <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-[1.22] tracking-tight mb-4 text-slate-900">
                  학교에서 시작된 아동의 목소리,<br />
                  <span className="text-[#009EDB]">우리 지역의 변화</span>로 이어집니다.
                </h1>

                {/* Sub Copy */}
                <p className="text-slate-500 text-base sm:text-lg mb-8 max-w-xl leading-relaxed font-normal">
                  City to School은 학교와 유니세프아동친화도시가 함께 아동의 권리를 배우고, 
                  아이들의 의견을 지역사회의 실질적인 정책으로 연결하는 파트너십 프로젝트입니다.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                  <button
                    id="hero-cta-about-btn"
                    onClick={() => onNavigate('about')}
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-base text-white bg-[#009EDB] hover:bg-[#007fb1] active:bg-[#00709c] shadow-lg shadow-blue-200/60 hover:-translate-y-0.5 transition-all cursor-pointer group"
                  >
                    <span>프로젝트 알아보기</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    id="hero-cta-resources-btn"
                    onClick={() => onNavigate('resources')}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-base text-slate-600 bg-white hover:bg-slate-50 hover:text-[#009EDB] border-2 border-slate-100 shadow-2xs hover:border-slate-200 transition-all cursor-pointer"
                  >
                    <Download className="w-4 h-4 text-[#009EDB]" />
                    <span>자료실 바로가기</span>
                  </button>
                </div>
              </div>
            </div>

            {/* 4 Core Quick Cards (배우고, 발견하고, 제안하고, 함께 바꿈) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div className="bg-white p-4 rounded-2xl text-center border border-slate-100 shadow-xs hover:border-[#009EDB]/30 transition-all">
                <div className="text-2xl mb-1">📖</div>
                <div className="font-bold text-sm text-slate-800">배우고</div>
                <div className="text-[11px] text-slate-400 mt-0.5">아동권리 교육</div>
              </div>
              <div className="bg-white p-4 rounded-2xl text-center border border-slate-100 shadow-xs hover:border-[#009EDB]/30 transition-all">
                <div className="text-2xl mb-1">🔎</div>
                <div className="font-bold text-sm text-slate-800">발견하고</div>
                <div className="text-[11px] text-slate-400 mt-0.5">마을 모니터링</div>
              </div>
              <div className="bg-white p-4 rounded-2xl text-center border border-slate-100 shadow-xs hover:border-[#009EDB]/30 transition-all">
                <div className="text-2xl mb-1">💡</div>
                <div className="font-bold text-sm text-slate-800">제안하고</div>
                <div className="text-[11px] text-slate-400 mt-0.5">정책 제안서</div>
              </div>
              <div className="bg-[#009EDB] p-4 rounded-2xl text-center text-white shadow-md shadow-blue-200/50">
                <div className="text-2xl mb-1">🤝</div>
                <div className="font-bold text-sm">함께 바꿈</div>
                <div className="text-[11px] text-sky-100 mt-0.5">정책 반영·환류</div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Minimalism Connection Graphic */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="bg-white rounded-[32px] p-6 sm:p-7 shadow-sm border border-slate-100 relative h-full flex flex-col justify-between">
              
              <div>
                {/* Box Title */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#009EDB] animate-pulse" />
                    <span className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                      City to School 선순환 프로세스
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-[#009EDB] bg-blue-50 px-2.5 py-0.5 rounded-full">
                    인터랙티브 4단계
                  </span>
                </div>

                {/* 4 Connected Nodes */}
                <div className="flex flex-col gap-3 relative">
                  {flowSteps.map((step, idx) => {
                    const Icon = step.icon;
                    const isSelected = activeFlowStep === step.id;

                    return (
                      <div key={step.id} className="relative">
                        {/* Interactive Step Card */}
                        <div
                          id={`hero-flow-step-${step.id}`}
                          onClick={() => setActiveFlowStep(step.id)}
                          className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 text-left ${
                            isSelected
                              ? 'bg-blue-50/40 border-[#009EDB] shadow-xs'
                              : 'bg-white hover:bg-slate-50/70 border-slate-100 hover:border-slate-200'
                          }`}
                        >
                          {/* Icon Badge */}
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                              isSelected
                                ? 'bg-[#009EDB] text-white shadow-xs'
                                : 'bg-slate-100/80 text-slate-500'
                            }`}
                          >
                            <Icon className="w-5 h-5" />
                          </div>

                          {/* Text */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-0.5">
                              <div className="flex items-center gap-1.5">
                                <span className={`text-sm font-bold ${isSelected ? 'text-[#009EDB]' : 'text-slate-900'}`}>
                                  {step.title}
                                </span>
                                <span className="text-[11px] font-medium text-slate-400">
                                  · {step.sub}
                                </span>
                              </div>
                              <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-600">
                                {step.tag}
                              </span>
                            </div>
                            <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                              {step.desc}
                            </p>
                          </div>
                        </div>

                        {/* Connection Indicator line between steps */}
                        {idx < flowSteps.length - 1 && (
                          <div className="flex justify-center my-0.5">
                            <div className="w-0.5 h-2.5 bg-slate-200" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Summary Callout */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <span className="flex items-center gap-1.5 text-slate-600 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#009EDB] shrink-0" />
                  아동의 목소리가 멈추지 않고 정책으로
                </span>
                <button
                  id="hero-view-roadmap-link"
                  onClick={() => onNavigate('roadmap')}
                  className="font-bold text-[#009EDB] hover:text-[#007fb1] flex items-center gap-0.5 transition-colors cursor-pointer"
                >
                  전체 로드맵 보기 <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
