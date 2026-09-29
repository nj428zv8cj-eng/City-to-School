import React, { useState } from 'react';
import { Phone, Mail, MapPin, ExternalLink, Shield, Info, ArrowUp } from 'lucide-react';
import { NavigationSection } from '../types';

interface FooterProps {
  onNavigate: (section: NavigationSection) => void;
  onOpenInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenInquiry }) => {
  const [modalPolicy, setModalPolicy] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-white text-slate-600 pt-16 pb-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-100">
          
          {/* Brand & Slogan (7 cols) */}
          <div className="lg:col-span-7">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3.5 mb-5">
              <div className="h-10 sm:h-11 flex items-center shrink-0">
                <img
                  src="/cfci-logo.svg"
                  alt="유니세프 아동친화도시 로고 (Child Friendly Cities Initiative)"
                  className="h-10 sm:h-11 w-auto object-contain rounded-lg shadow-2xs"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="sm:border-l sm:border-slate-200 sm:pl-3.5">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-slate-900 block leading-tight">
                  City to School
                </span>
                <span className="block text-xs font-semibold text-[#009EDB] mt-0.5">
                  유니세프아동친화도시와 함께하는 학교 프로젝트
                </span>
              </div>
            </div>

            <p className="text-sm font-semibold text-slate-800 leading-relaxed mb-3">
              학교에서 시작된 아동의 목소리를 아동친화도시의 변화로 연결합니다.
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-xl mb-6">
              City to School은 학교와 유니세프아동친화도시가 함께 아동의 권리를 배우고,<br className="hidden sm:inline" />
              아동의 의견을 지역사회의 실질적인 정책 및 환경 변화로 연결하는 아동친화적인 거버넌스 구축 프로젝트입니다.
            </p>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F8FBFF] hover:bg-slate-100 border border-slate-100 text-xs text-slate-600 transition-colors cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              맨 위로 이동
            </button>
          </div>

          {/* Operating Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-start text-xs text-slate-500 pt-2 lg:pt-1.5">
            <div className="space-y-2">
              <h4 className="font-bold text-slate-800 text-sm">
                유니세프 한국위원회
              </h4>
              
              {/* 길게 연결된 주소 및 연락처 정보 */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  서울특별시 마포구 서강로 60 (창전동)
                </span>
                <span className="hidden sm:inline text-slate-300">|</span>
                <span className="inline-flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <a href="tel:02-724-8565" className="hover:text-[#009EDB] transition-colors">02-724-8565</a>
                </span>
                <span className="hidden sm:inline text-slate-300">|</span>
                <span className="inline-flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <a href="mailto:cfc@unicef.or.kr" className="hover:text-[#009EDB] transition-colors">cfc@unicef.or.kr</a>
                </span>
              </div>

              <div className="pt-2">
                <a
                  href="https://www.unicef.or.kr"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F8FBFF] hover:bg-slate-100 border border-slate-100 text-xs text-slate-600 transition-colors cursor-pointer"
                >
                  <span>유니세프 한국위원회 공식 웹사이트</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Policy Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Korean Committee for UNICEF. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setModalPolicy('privacy')}
              className="hover:text-slate-800 transition-colors underline underline-offset-4 cursor-pointer"
            >
              개인정보처리방침
            </button>
            <span>|</span>
            <button
              onClick={() => setModalPolicy('terms')}
              className="hover:text-slate-800 transition-colors underline underline-offset-4 cursor-pointer"
            >
              이용약관
            </button>
            <span>|</span>
            <button
              onClick={() => setModalPolicy('privacy')}
              className="hover:text-slate-800 transition-colors cursor-pointer"
            >
              저작권 안내
            </button>
          </div>
        </div>

      </div>

      {/* Legal Modal Popup */}
      {modalPolicy && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setModalPolicy(null)}
        >
          <div
            className="bg-white text-slate-800 rounded-[24px] max-w-xl w-full p-6 max-h-[80vh] overflow-y-auto shadow-2xl border border-slate-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <h3 className="text-lg font-bold text-slate-900">
                {modalPolicy === 'privacy' ? '개인정보처리방침' : '이용약관 및 정책'}
              </h3>
              <button
                onClick={() => setModalPolicy(null)}
                className="text-slate-400 hover:text-slate-700 p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>
            <div className="text-xs leading-relaxed text-slate-600 space-y-3">
              <p className="font-semibold text-slate-800">
                유니세프 한국위원회 City to School 공식 웹사이트는 관련 법령에 따라 이용자의 개인정보를 소중히 보호합니다.
              </p>
              <p>
                1. 수집 항목: 문의하기 신청 시 입력되는 성명, 기관명, 직책, 연락처, 이메일 주소.<br />
                2. 수집 목적: City to School 프로젝트 참여 안내, 연수 일정 통보 및 행정 지원 상담.<br />
                3. 보유 기간: 사업 종료 시 또는 문의 처리 완료 후 1년간 보관 후 지체 없이 파기합니다.<br />
                4. 자료의 저작권: 본 홈페이지에 게시된 가이드북, 워크북 및 활동 양식은 유니세프아동친화도시 참여 기관 및 학교의 비영리 교육 목적으로 자유롭게 활용 가능합니다.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setModalPolicy(null)}
                className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-full text-xs font-bold cursor-pointer transition-colors"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
