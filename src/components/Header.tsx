import React, { useState, useEffect } from 'react';
import { Menu, X, Download, LogIn, LogOut, User, Lock } from 'lucide-react';
import { NavigationSection } from '../types';
import { UserSession } from './LoginModal';

interface HeaderProps {
  activeSection: NavigationSection;
  onNavigate: (section: NavigationSection) => void;
  onOpenInquiry: () => void;
  onOpenLogin: () => void;
  user?: UserSession | null;
  onLogout?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  onOpenInquiry,
  onOpenLogin,
  user,
  onLogout
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

  const navItems: { id: NavigationSection; label: string; requiresAuth?: boolean }[] = [
    { id: 'about', label: '프로젝트 소개' },
    { id: 'roadmap', label: '진행 로드맵' },
    { id: 'news', label: '공지사항 및 소식', requiresAuth: true },
    { id: 'resources', label: '자료실', requiresAuth: true },
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
              유니세프아동친화도시와 함께하는 학교 프로젝트
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
                type="button"
                id={`nav-link-${item.id}`}
                onClick={() => handleItemClick(item.id)}
                className={`py-1.5 text-[14px] font-medium transition-colors relative cursor-pointer inline-flex items-center gap-1.5 ${
                  isActive
                    ? 'text-[#009EDB] font-bold'
                    : 'text-slate-600 hover:text-[#009EDB]'
                }`}
              >
                <span>{item.label}</span>
                {!user && item.requiresAuth && (
                  <Lock className="w-3 h-3 text-slate-400 -mt-0.5" aria-label="로그인 필요" />
                )}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#009EDB] rounded-full animate-in fade-in zoom-in-95 duration-150" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden lg:flex items-center gap-2.5">
          <button
            id="header-resources-quick-btn"
            onClick={onOpenInquiry}
            className="flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold text-white bg-[#009EDB] hover:bg-[#007fb1] active:bg-[#00709c] rounded-full shadow-sm shadow-[#009EDB]/25 hover:shadow transition-all cursor-pointer"
          >
            사업 참여 문의
          </button>

          {user ? (
            <div className="flex items-center gap-2 pl-1">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50/80 border border-blue-100 rounded-full text-xs font-semibold text-slate-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[#009EDB] font-bold">{user.name}</span>
                <span className="text-[11px] text-slate-400">({user.role})</span>
              </div>
              <button
                id="header-logout-btn"
                onClick={onLogout}
                className="p-1.5 text-slate-400 hover:text-rose-500 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
                title="로그아웃"
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <button
              id="header-login-btn"
              onClick={onOpenLogin}
              className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-[#009EDB] bg-white hover:bg-slate-50 border border-slate-200/90 rounded-full transition-all cursor-pointer shadow-2xs hover:border-[#009EDB]/40"
            >
              <LogIn className="w-3.5 h-3.5 text-slate-500" />
              로그인
            </button>
          )}
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
                type="button"
                id={`mobile-nav-${item.id}`}
                onClick={() => handleItemClick(item.id)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  activeSection === item.id
                    ? 'bg-blue-50 text-[#009EDB] font-bold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{item.label}</span>
                {!user && item.requiresAuth && (
                  <Lock className="w-3.5 h-3.5 text-slate-400" aria-label="로그인 필요" />
                )}
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
                지자체·학교 사업 참여 문의
              </button>

              {user ? (
                <div className="flex items-center justify-between p-3 bg-blue-50/70 rounded-xl border border-blue-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <div>
                      <p className="text-xs font-bold text-slate-800">{user.name}</p>
                      <p className="text-[11px] text-slate-500">{user.organization} · {user.role}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      if (onLogout) onLogout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-xs font-semibold text-rose-500 hover:underline"
                  >
                    로그아웃
                  </button>
                </div>
              ) : (
                <button
                  id="mobile-nav-login-btn"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenLogin();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full text-sm font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200"
                >
                  <LogIn className="w-4 h-4 text-slate-500" />
                  포털 로그인
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
