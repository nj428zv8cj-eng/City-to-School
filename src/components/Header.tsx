import React, { useState, useEffect } from 'react';
import { Menu, X, Download, HelpCircle, Building2, School, HeartHandshake } from 'lucide-react';
import { NavigationSection } from '../types';

interface HeaderProps {
  activeSection: NavigationSection;
  onNavigate: (section: NavigationSection) => void;
  onOpenInquiry: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  onOpenInquiry
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: NavigationSection; label: string }[] = [
    { id: 'about', label: '프로젝트 소개' },
    { id: 'roadmap', label: '진행 로드맵' },
    { id: 'news', label: '공지사항 및 소식' },
    { id: 'resources', label: '자료실' },
    { id: 'faq', label: 'FAQ' },
  ];

  const handleItemClick = (id: NavigationSection) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-xs border-b border-slate-100 py-3'
          : 'bg-white/95 backdrop-blur-md border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand / Logo */}
        <button
          id="header-brand-logo"
          onClick={() => handleItemClick('home')}
          className="flex items-center gap-2.5 text-left group focus:outline-none focus:ring-2 focus:ring-[#009EDB] focus:ring-offset-2 rounded-xl p-1"
        >
          {/* UNICEF CFCI Logo */}
          <div className="h-8 sm:h-9 flex items-center justify-center shrink-0 group-hover:scale-[1.02] transition-transform">
            {/* Compact circular emblem on extra-small screens, full paired logo on sm+ screens */}
            <img
              src="/cfci-emblem.svg"
              alt="유니세프 아동친화도시 로고"
              className="h-8 w-8 sm:hidden object-contain rounded-full shadow-2xs"
              referrerPolicy="no-referrer"
            />
            <img
              src="/cfci-logo.svg"
              alt="유니세프 아동친화도시 로고 (Child Friendly Cities Initiative)"
              className="hidden sm:block h-8 sm:h-9 w-auto object-contain rounded-md shadow-2xs"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-bold text-xl tracking-tight text-[#009EDB] group-hover:text-[#007fb1] transition-colors">
                City to School
              </span>
            </div>
            <span className="text-[11px] text-slate-500 font-normal">
              유니세프아동친화도시와 학교 프로젝트
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden lg:flex items-center gap-7 text-[14px] font-medium" aria-label="메인 메뉴">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleItemClick(item.id)}
                className={`py-1.5 text-[14px] font-medium transition-colors relative cursor-pointer ${
                  isActive
                    ? 'text-[#009EDB] font-bold'
                    : 'text-slate-600 hover:text-[#009EDB]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#009EDB] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            id="header-resources-quick-btn"
            onClick={() => handleItemClick('resources')}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-600 hover:text-[#009EDB] bg-white border border-slate-200/80 hover:border-slate-300 rounded-full transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-[#009EDB]" />
            자료 다운로드
          </button>
          <button
            id="header-inquiry-btn"
            onClick={onOpenInquiry}
            className="flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold text-white bg-[#009EDB] hover:bg-[#007fb1] active:bg-[#00709c] rounded-full shadow-sm shadow-[#009EDB]/25 hover:shadow transition-all cursor-pointer"
          >
            사업 참여 신청
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            id="header-mobile-inquiry-btn"
            onClick={onOpenInquiry}
            className="px-3.5 py-1.5 text-xs font-bold text-white bg-[#009EDB] rounded-full"
          >
            참여 신청
          </button>
          <button
            id="header-mobile-toggle-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
            aria-label="모바일 메뉴 열기"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden border-b border-slate-100 bg-white/98 backdrop-blur-md px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-3 duration-200"
        >
          <div className="flex flex-col gap-1.5">
            <button
              id="mobile-nav-home"
              onClick={() => handleItemClick('home')}
              className={`text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold ${
                activeSection === 'home'
                  ? 'bg-blue-50 text-[#009EDB] font-bold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              홈 메인
            </button>
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleItemClick(item.id)}
                className={`text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  activeSection === item.id
                    ? 'bg-blue-50 text-[#009EDB] font-bold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2">
              <button
                id="mobile-nav-resources-btn"
                onClick={() => handleItemClick('resources')}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full text-sm font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-[#009EDB]"
              >
                <Download className="w-4 h-4 text-[#009EDB]" />
                사업 자료실 바로가기
              </button>
              <button
                id="mobile-nav-inquiry-btn"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full text-sm font-bold bg-[#009EDB] text-white hover:bg-[#007fb1]"
              >
                지자체·학교 사업 참여 신청
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
