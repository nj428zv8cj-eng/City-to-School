import React, { useState } from 'react';
import { HeartHandshake, Phone, Mail, MapPin, ExternalLink, Shield, Info, ArrowUp } from 'lucide-react';
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
          
          {/* Brand & Slogan (5 cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#009EDB] flex items-center justify-center text-white shadow-xs">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <span className="font-extrabold text-2xl tracking-tight text-slate-900">
                  City to School
                </span>
                <span className="block text-xs font-semibold text-[#009EDB]">
                  유니세프 한국위원회 공식 프로젝트
                </span>
              </div>
            </div>

            <p className="text-sm font-semibold text-slate-800 leading-relaxed max-w-md mb-3">
              학교에서 시작된 아동의 목소리를<br />
              우리 지역의 변화로 연결합니다.
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md mb-6">
              City to School은 학교와 유니세프아동친화도시가 함께 아동의 권리를 배우고, 
              아동의 의견을 지역사회의 실질적인 정책 및 환경 변화로 연결하는 공공 협력 플랫폼입니다.
            </p>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F8FBFF] hover:bg-slate-100 border border-slate-100 text-xs text-slate-600 transition-colors cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              맨 위로 이동
            </button>
          </div>

          {/* Quick Menu (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4">
              바로가기 메뉴
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              <li>
                <button
                  id="footer-link-about"
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#009EDB] transition-colors cursor-pointer"
                >
                  프로젝트 소개
                </button>
              </li>
              <li>
                <button
                  id="footer-link-roadmap"
                  onClick={() => onNavigate('roadmap')}
                  className="hover:text-[#009EDB] transition-colors cursor-pointer"
                >
                  진행 로드맵 (7단계)
                </button>
              </li>
              <li>
                <button
                  id="footer-link-news"
                  onClick={() => onNavigate('news')}
                  className="hover:text-[#009EDB] transition-colors cursor-pointer"
                >
                  공지사항 및 소식
                </button>
              </li>
              <li>
                <button
                  id="footer-link-resources"
                  onClick={() => onNavigate('resources')}
                  className="hover:text-[#009EDB] transition-colors cursor-pointer"
                >
                  사업 자료실 (가이드북 & 서식)
                </button>
              </li>
              <li>
                <button
                  id="footer-link-faq"
                  onClick={() => onNavigate('faq')}
                  className="hover:text-[#009EDB] transition-colors cursor-pointer"
                >
                  자주 묻는 질문 (FAQ)
                </button>
              </li>
              <li className="pt-2">
                <button
                  id="footer-link-inquiry"
                  onClick={onOpenInquiry}
                  className="text-[#009EDB] hover:text-[#0089bd] font-bold cursor-pointer"
                >
                  사업 참여 1:1 상담 신청 ➔
                </button>
              </li>
            </ul>
          </div>

          {/* Operating Info (4 cols) */}
          <div className="lg:col-span-4 text-xs space-y-2.5 text-slate-500">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4">
              운영 주관
            </h4>
            <p className="font-bold text-slate-800 text-sm">
              유니세프 한국위원회 (UNICEF Korean Committee)
            </p>
            <p className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
              <span>서울특별시 마포구 서강로 60 (창전동) 유니세프 한국위원회</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>아동친화도시 사업 문의: 02-735-2315</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>childfriendlycity@unicef.or.kr</span>
            </p>
            <div className="pt-3">
              <a
                href="https://www.unicef.or.kr"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F8FBFF] hover:bg-slate-100 border border-slate-100 text-slate-600 transition-colors cursor-pointer"
              >
                <span>유니세프 한국위원회 공식 웹사이트</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
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
