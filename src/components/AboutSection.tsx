import React from 'react';
import { 
  Heart, 
  School, 
  Building2, 
  Award, 
  ArrowLeftRight, 
  CheckCircle2, 
  Globe2, 
  Sparkles,
  Users,
  Compass,
  FileCheck
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#009EDB] font-bold text-xs tracking-widest uppercase mb-3 block">
            PROJECT OVERVIEW
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            City to School 프로젝트 소개
          </h2>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
            아동의 교실과 도시의 행정을 잇는 다리,<br className="hidden sm:inline" />
            유니세프 한국위원회가 제안하는 새로운 차원의 아동친화도시 실천 모델입니다.
          </p>
        </div>

        {/* 1. City to School이란? */}
        <div className="mb-20 bg-[#F8FBFF] rounded-[32px] p-8 sm:p-12 border border-slate-100 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#009EDB]/5 rounded-full -mr-12 -mt-12 pointer-events-none" />
          
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-xs font-bold text-[#009EDB] border border-slate-100 mb-4 shadow-2xs">
              <Compass className="w-3.5 h-3.5" />
              프로젝트 정의 & 비전
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug mb-6">
              City to School이란?
            </h3>
            
            <div className="text-slate-600 text-base sm:text-lg leading-relaxed space-y-4 font-normal">
              <p className="font-semibold text-slate-900 text-lg sm:text-xl border-l-4 border-[#009EDB] pl-4 py-1">
                City to School은 학교와 유니세프아동친화도시를 연결하여 학교에서 시작된 아동의 목소리가 지역사회의 실제 변화로 이어질 수 있도록 지원하는 프로젝트입니다.
              </p>
              <p className="text-slate-500">
                그동안 아동권리교육은 교실 안의 지식 습득에 머무르거나, 지자체의 아동참여위원회는 일부 선발된 소수 아동의 형식적 의견 수렴에 그치는 한계가 있었습니다. 
                City to School은 모든 아동이 생활하는 <strong className="text-slate-800 font-semibold">초등학교 정규 교육과정</strong>과 <strong className="text-slate-800 font-semibold">지방자치단체의 행정 시스템</strong>을 정면으로 연결합니다.
              </p>
              <p className="text-slate-500">
                아이들이 직접 등굣길, 놀이터, 공공시설 등 일상 공간을 관찰하며 문제를 발굴하고 정책 제안서를 작성하면, 지자체는 이를 정식 검토하여 예산과 정책에 반영하고, 그 결과를 다시 아이들에게 설명해 주는 진정한 의미의 '참여권의 선순환'을 구축합니다.
              </p>
            </div>
          </div>
        </div>

        {/* 2. 왜 City to School인가요? (3 관점) */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
              왜 City to School인가요?
            </h3>
            <p className="text-slate-500 text-sm sm:text-base">
              아동, 학교, 지역사회 모두에게 실질적인 가치와 성장의 기회를 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 아동에게 */}
            <div className="bg-white rounded-[28px] p-7 sm:p-8 border border-slate-100 shadow-sm hover:border-[#009EDB]/30 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5 font-black text-xl shadow-2xs">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">
                FOR CHILDREN
              </span>
              <h4 className="text-xl font-extrabold text-slate-900 mt-1 mb-3">
                아동에게
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                자신의 권리를 이해하고 학교와 지역사회의 문제에 의견을 표현하는 경험을 제공합니다.
              </p>
              <ul className="space-y-2 text-xs text-slate-500 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  스스로 삶의 주체로서 효능감 증진
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  민주시민으로서의 비판적 사고 및 표현력 향상
                </li>
              </ul>
            </div>

            {/* 학교에게 */}
            <div className="bg-white rounded-[28px] p-7 sm:p-8 border border-slate-100 shadow-sm hover:border-[#009EDB]/30 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#009EDB] flex items-center justify-center mb-5 font-black text-xl shadow-2xs">
                <School className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-[#009EDB] tracking-wider uppercase">
                FOR SCHOOLS
              </span>
              <h4 className="text-xl font-extrabold text-slate-900 mt-1 mb-3">
                학교에게
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                아동권리교육과 아동참여를 학교 교육과정과 일상 속에서 실천할 수 있도록 지원합니다.
              </p>
              <ul className="space-y-2 text-xs text-slate-500 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#009EDB] shrink-0" />
                  교사 학습공동체 중심의 살아있는 수업 실천
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#009EDB] shrink-0" />
                  학교 밖 지자체 자원과 긴밀한 교육 연계
                </li>
              </ul>
            </div>

            {/* 지역사회에게 */}
            <div className="bg-white rounded-[28px] p-7 sm:p-8 border border-slate-100 shadow-sm hover:border-[#009EDB]/30 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 font-black text-xl shadow-2xs">
                <Building2 className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-emerald-600 tracking-wider uppercase">
                FOR COMMUNITY
              </span>
              <h4 className="text-xl font-extrabold text-slate-900 mt-1 mb-3">
                지역사회에게
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                아동의 의견을 정책과 지역사회의 변화에 연결하여 아동이 실질적인 지역사회의 구성원으로 참여할 수 있도록 합니다.
              </p>
              <ul className="space-y-2 text-xs text-slate-500 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  수요자 체감도 높은 아동친화 행정 실현
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  유니세프아동친화도시 상위 인증 핵심 성과 축적
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3. 프로젝트 운영 체계 (학교 ↔ 지자체 ↔ 유니세프 한국위원회 다이어그램) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
              프로젝트 운영 체계
            </h3>
            <p className="text-slate-500 text-sm sm:text-base">
              학교, 지자체, 유니세프 한국위원회가 유기적인 삼각 협력 체계를 구축하여 지속가능한 운영을 지원합니다.
            </p>
          </div>

          {/* Triangular Architecture Diagram */}
          <div className="bg-[#F8FBFF] rounded-[32px] p-6 sm:p-10 border border-slate-100 max-w-5xl mx-auto relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              
              {/* Box 1: 학교 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between hover:border-[#009EDB]/30 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-full bg-blue-50 text-[#009EDB] flex items-center justify-center font-bold text-sm">
                      A
                    </span>
                    <School className="w-6 h-6 text-[#009EDB]" />
                  </div>
                  <h4 className="text-lg font-extrabold text-slate-900 mb-2">
                    학교 (초등학교)
                  </h4>
                  <p className="text-xs text-slate-400 mb-4 font-medium">
                    현장 교육 및 아동 참여 실천
                  </p>
                  <ul className="text-xs text-slate-600 space-y-2">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#009EDB]" />
                      교사 학습공동체 운영
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#009EDB]" />
                      아동권리 교육과정 재구성
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#009EDB]" />
                      마을 탐험 및 의견 제안서 발굴
                    </li>
                  </ul>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] text-[#009EDB] font-bold bg-blue-50/70 px-3 py-1.5 rounded-full text-center">
                  지자체로 ➔ 정책 제안서 전달
                </div>
              </div>

              {/* Box 2: 지자체 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between hover:border-[#009EDB]/30 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-full bg-blue-50 text-[#009EDB] flex items-center justify-center font-bold text-sm">
                      B
                    </span>
                    <Building2 className="w-6 h-6 text-[#009EDB]" />
                  </div>
                  <h4 className="text-lg font-extrabold text-slate-900 mb-2">
                    지자체 (아동친화도시)
                  </h4>
                  <p className="text-xs text-slate-400 mb-4 font-medium">
                    정책 검토 및 실질적 환경 변화
                  </p>
                  <ul className="text-xs text-slate-600 space-y-2">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#009EDB]" />
                      참여 학교 모집 및 예산 지원
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#009EDB]" />
                      관련 부서 합동 제안 검토
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#009EDB]" />
                      아동 눈높이 환류(피드백) 전달
                    </li>
                  </ul>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] text-[#009EDB] font-bold bg-blue-50/70 px-3 py-1.5 rounded-full text-center">
                  학교로 ➔ 환류 리포트 전달
                </div>
              </div>

              {/* Box 3: 유니세프 한국위원회 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between hover:border-[#009EDB]/30 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-full bg-blue-50 text-[#009EDB] flex items-center justify-center font-bold text-sm">
                      C
                    </span>
                    <Globe2 className="w-6 h-6 text-[#009EDB]" />
                  </div>
                  <h4 className="text-lg font-extrabold text-slate-900 mb-2">
                    유니세프 한국위원회
                  </h4>
                  <p className="text-xs text-slate-400 mb-4 font-medium">
                    플랫폼 운영 및 표준 가이드
                  </p>
                  <ul className="text-xs text-slate-600 space-y-2">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#009EDB]" />
                      운영 매뉴얼 & 워크북 보급
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#009EDB]" />
                      교사 직무연수 및 컨설팅 지원
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#009EDB]" />
                      성과 모니터링 및 전국 확산
                    </li>
                  </ul>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] text-[#009EDB] font-bold bg-blue-50/70 px-3 py-1.5 rounded-full text-center">
                  전체 ➔ 신뢰성 보증 & 인증 연계
                </div>
              </div>

            </div>

            {/* Interaction Cycle Bar */}
            <div className="mt-8 bg-white rounded-2xl p-4 border border-slate-100 shadow-xs text-center flex flex-wrap items-center justify-around gap-4 text-xs font-medium text-slate-600">
              <span className="flex items-center gap-1.5">
                <span className="font-bold text-[#009EDB]">①</span> 학교 ➔ 아동의 제안 발굴
              </span>
              <span className="text-slate-200">|</span>
              <span className="flex items-center gap-1.5">
                <span className="font-bold text-[#009EDB]">②</span> 지자체 ➔ 정책 타당성 검토 & 예산 반영
              </span>
              <span className="text-slate-200">|</span>
              <span className="flex items-center gap-1.5">
                <span className="font-bold text-[#009EDB]">③</span> 유니세프 ➔ 질적 관리 & 컨설팅 지원
              </span>
              <span className="text-slate-200">|</span>
              <span className="flex items-center gap-1.5">
                <span className="font-bold text-[#009EDB]">④</span> 아동과 지역사회에 환류
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
