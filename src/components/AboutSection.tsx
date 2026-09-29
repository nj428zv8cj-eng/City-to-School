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
    <section id="about" className="py-16 sm:py-24 bg-white border-t border-slate-100 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#009EDB] font-bold text-xs tracking-widest uppercase mb-3 block">
            PROJECT OVERVIEW
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            City to School 프로젝트 소개
          </h2>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed break-keep">
            학교와 아동친화도시를 잇는 다리,
            <br />
            유니세프 한국위원회가 제안하는 새로운 프로젝트입니다.
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
                City to School은 학교와 아동친화도시를 연결하여, 학교에서 시작된 아동의 목소리가 지역사회의 실제 변화로 이어질 수 있도록 지원하는 프로젝트입니다.
              </p>
              <p className="text-slate-600">
                아동권리 교육과 아동참여가 <strong className="text-slate-900 font-semibold">모든 아동의 일상 속에서 이루어질 수 있도록 학교의 정규 교육과정과 지방자치단체의 행정 체계를 연결합니다.</strong> 이를 통해 아동이 자신의 권리를 배우는 데서 나아가, 자신이 살아가는 학교와 지역사회의 문제를 발견하고 변화에 참여할 수 있는 기회를 마련합니다.
              </p>
              <p className="text-slate-600">
                아동들은 학교와 동네를 직접 살펴보며 권리와 관련된 문제를 발견하고, 이를 해결하기 위한 의견을 제안합니다. 지자체는 아동의 의견을 검토하여 정책과 사업에 반영하고, 그 결과와 이유를 다시 아동에게 알려줍니다. <strong className="text-slate-900 font-semibold">City to School은 이러한 과정을 통해 아동의 목소리가 지역사회의 변화로 이어지는 지속가능한 참여의 선순환을 만들어갑니다.</strong>
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
              아동의 성장을 돕고, 학교의 아동권리 교육을 지원하며, 지역사회의 변화를 만듭니다.
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
                자신과 타인의 권리를 이해하고, 학교와 지역사회의 문제에 직접 목소리를 내며 변화를 만들어가는 경험을 제공합니다.
              </p>
              <ul className="space-y-2 text-xs text-slate-500 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  삶의 주체로서 효능감 증진
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  민주 시민으로서의 비판적 사고와 표현력 향상
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
                아동권리 교육과 아동참여를 학교 교육과정과 일상 속에서 지속적으로 실천할 수 있도록 지원합니다.
              </p>
              <ul className="space-y-2 text-xs text-slate-500 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#009EDB] shrink-0" />
                  전문적학습공동체를 중심으로 한 아동권리 교육 실천
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#009EDB] shrink-0" />
                  지자체 지원(예산, 행정 등)을 통한 지역사회 참여로의 확장
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
                아동의 의견을 지역사회와 학교의 변화에 연결하여 아동의 참여가 실질적인 변화로 이어지는 구조를 만들 수 있도록 지원합니다.
              </p>
              <ul className="space-y-2 text-xs text-slate-500 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  아동의 목소리가 반영되는 아동친화적 행정 실현
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  유니세프아동친화도시의 핵심 가치인 아동참여 강화
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3. 프로젝트 운영 체계 (원형 3자 삼각 협력체계 인포그래픽) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              프로젝트 운영 체계
            </h3>
          </div>

          {/* Circular Cooperation Canvas (참고 이미지 디자인 스타일) */}
          <div className="bg-white rounded-[32px] p-4 sm:p-8 lg:p-12 border border-slate-200/80 max-w-5xl mx-auto relative overflow-hidden shadow-sm">
            
            {/* SVG Interactive Circular Diagram */}
            <div className="w-full max-w-[760px] mx-auto relative">
              <svg 
                viewBox="0 0 840 760" 
                className="w-full h-auto select-none drop-shadow-xs"
                style={{ maxHeight: '680px' }}
              >
                <defs>
                  {/* Subtle shadows for nodes */}
                  <filter id="nodeShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.12" />
                  </filter>
                  <filter id="centerShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="2" stdDeviation="8" floodOpacity="0.06" />
                  </filter>

                  {/* Arcs for TextPaths (호 형태 경로) - Exact Curvatures around (420, 415) */}
                  {/* 1. Top-Left: Outer & Inner */}
                  <path 
                    id="arc-tl-outer" 
                    d="M 143 516 A 295 295 0 0 0 295 148" 
                    fill="none" 
                  />
                  <path 
                    id="arc-tl-inner" 
                    d="M 216 510 A 225 225 0 0 0 308 220" 
                    fill="none" 
                  />

                  {/* 2. Top-Right: Outer & Inner */}
                  <path 
                    id="arc-tr-outer" 
                    d="M 545 148 A 295 295 0 0 0 697 516" 
                    fill="none" 
                  />
                  <path 
                    id="arc-tr-inner" 
                    d="M 533 220 A 225 225 0 0 0 624 510" 
                    fill="none" 
                  />

                  {/* 3. Bottom: Inner & Outer */}
                  <path 
                    id="arc-bottom-inner" 
                    d="M 248 560 A 225 225 0 0 1 592 560" 
                    fill="none" 
                  />
                  <path 
                    id="arc-bottom-outer" 
                    d="M 194 605 A 295 295 0 0 1 646 605" 
                    fill="none" 
                  />
                </defs>

                {/* Outer Dotted Orbit Circle */}
                <circle 
                  cx="420" 
                  cy="415" 
                  r="262" 
                  fill="none" 
                  stroke="#CBD5E1" 
                  strokeWidth="2" 
                  strokeDasharray="5 5"
                />

                {/* --- Curved Text Flows Along the Orbit --- */}
                {/* 1. Top-Left: 유니세프 ⟷ 학교 */}
                <text className="text-[12.5px] sm:text-[13.5px] font-semibold" fill="#007D88">
                  <textPath href="#arc-tl-outer" startOffset="50%" textAnchor="middle">
                    ◀ 아동권리 교육 및 교육 자료, 컨설팅 지원
                  </textPath>
                </text>
                <text className="text-[12.5px] sm:text-[13.5px] font-semibold" fill="#007D88">
                  <textPath href="#arc-tl-inner" startOffset="50%" textAnchor="middle">
                    프로젝트 운영 성과 및 사례 공유 ▶
                  </textPath>
                </text>

                {/* 2. Top-Right: 유니세프 ⟷ 지자체 */}
                <text className="text-[12.5px] sm:text-[13.5px] font-semibold" fill="#1B449C">
                  <textPath href="#arc-tr-outer" startOffset="50%" textAnchor="middle">
                    ▲ 운영 성과 및 정책 반영 사례 공유
                  </textPath>
                </text>
                <text className="text-[12.5px] sm:text-[13.5px] font-semibold" fill="#1B449C">
                  <textPath href="#arc-tr-inner" startOffset="50%" textAnchor="middle">
                    아동권리 교육 및 사업 설명회, 컨설팅 지원 ▶
                  </textPath>
                </text>

                {/* 3. Bottom: 학교 ⟷ 지자체 */}
                <text className="text-[12.5px] sm:text-[13.5px] font-semibold" fill="#007D88">
                  <textPath href="#arc-bottom-inner" startOffset="50%" textAnchor="middle">
                    아동 의견 및 정책 제안 전달 ▶
                  </textPath>
                </text>
                <text className="text-[12px] sm:text-[13px] font-semibold" fill="#1B449C">
                  <textPath href="#arc-bottom-outer" startOffset="50%" textAnchor="middle">
                    ▼ 예산 지원 및 정책 검토 결과와 반영 내용 환류
                  </textPath>
                </text>

                {/* --- CENTER CIRCLE: City to School 운영 체계 --- */}
                {/* Center base circle */}
                <circle 
                  cx="420" 
                  cy="415" 
                  r="126" 
                  fill="#FFFFFF" 
                  filter="url(#centerShadow)"
                />
                {/* Concentric border ring 1 (outer) */}
                <circle 
                  cx="420" 
                  cy="415" 
                  r="124" 
                  fill="none" 
                  stroke="#BAE6FD" 
                  strokeWidth="2" 
                />
                {/* Concentric border ring 2 (inner) */}
                <circle 
                  cx="420" 
                  cy="415" 
                  r="115" 
                  fill="none" 
                  stroke="#E0F2FE" 
                  strokeWidth="2" 
                />

                <text 
                  x="420" 
                  y="405" 
                  textAnchor="middle" 
                  fill="#009EDB" 
                  className="text-[25px] font-bold tracking-tight"
                >
                  City to School
                </text>
                <text 
                  x="420" 
                  y="444" 
                  textAnchor="middle" 
                  fill="#000000" 
                  className="text-[26px] font-black tracking-tight"
                >
                  운영 체계
                </text>

                {/* --- TOP NODE: 유니세프 한국위원회 (UNICEF 밝은 블루) --- */}
                <g filter="url(#nodeShadow)">
                  <circle 
                    cx="420" 
                    cy="155" 
                    r="86" 
                    fill="#00A3E0" 
                    className="cursor-pointer hover:brightness-105 transition-all"
                  />
                  <circle 
                    cx="420" 
                    cy="155" 
                    r="78" 
                    fill="none" 
                    stroke="#FFFFFF" 
                    strokeWidth="2" 
                    opacity="0.9"
                  />
                  <text 
                    x="420" 
                    y="146" 
                    textAnchor="middle" 
                    fill="#FFFFFF" 
                    className="text-[17px] font-bold"
                  >
                    유니세프 한국위원회
                  </text>
                  <text 
                    x="420" 
                    y="173" 
                    textAnchor="middle" 
                    fill="#FFFFFF" 
                    className="text-[12.5px] font-medium tracking-tight"
                  >
                    사업 운영 및 전문 지원
                  </text>
                </g>

                {/* --- BOTTOM-LEFT NODE: 학교 (딥 티얼 에메랄드) --- */}
                <g filter="url(#nodeShadow)">
                  <circle 
                    cx="195" 
                    cy="545" 
                    r="86" 
                    fill="#00828A" 
                    className="cursor-pointer hover:brightness-105 transition-all"
                  />
                  <circle 
                    cx="195" 
                    cy="545" 
                    r="78" 
                    fill="none" 
                    stroke="#FFFFFF" 
                    strokeWidth="2" 
                    opacity="0.9"
                  />
                  <text 
                    x="195" 
                    y="528" 
                    textAnchor="middle" 
                    fill="#FFFFFF" 
                    className="text-[20px] font-bold"
                  >
                    학교
                  </text>
                  <text 
                    x="195" 
                    y="555" 
                    textAnchor="middle" 
                    fill="#FFFFFF" 
                    className="text-[12.5px] font-medium tracking-tight"
                  >
                    아동권리 교육 및
                  </text>
                  <text 
                    x="195" 
                    y="575" 
                    textAnchor="middle" 
                    fill="#FFFFFF" 
                    className="text-[12.5px] font-medium tracking-tight"
                  >
                    참여활동 운영
                  </text>
                </g>

                {/* --- BOTTOM-RIGHT NODE: 지자체 (코발트 네이비) --- */}
                <g filter="url(#nodeShadow)">
                  <circle 
                    cx="645" 
                    cy="545" 
                    r="86" 
                    fill="#1B449C" 
                    className="cursor-pointer hover:brightness-105 transition-all"
                  />
                  <circle 
                    cx="645" 
                    cy="545" 
                    r="78" 
                    fill="none" 
                    stroke="#FFFFFF" 
                    strokeWidth="2" 
                    opacity="0.9"
                  />
                  <text 
                    x="645" 
                    y="528" 
                    textAnchor="middle" 
                    fill="#FFFFFF" 
                    className="text-[20px] font-bold"
                  >
                    지자체
                  </text>
                  <text 
                    x="645" 
                    y="555" 
                    textAnchor="middle" 
                    fill="#FFFFFF" 
                    className="text-[12.5px] font-medium tracking-tight"
                  >
                    아동 의견 정책 연계
                  </text>
                  <text 
                    x="645" 
                    y="575" 
                    textAnchor="middle" 
                    fill="#FFFFFF" 
                    className="text-[12.5px] font-medium tracking-tight"
                  >
                    및 환류
                  </text>
                </g>
              </svg>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
