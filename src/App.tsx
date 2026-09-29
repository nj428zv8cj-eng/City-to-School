import React, { useState, useEffect } from 'react';
import { NavigationSection, NewsItem } from './types';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CoreConceptSection } from './components/CoreConceptSection';
import { StakeholdersSection } from './components/StakeholdersSection';
import { AboutSection } from './components/AboutSection';
import { RoadmapSection } from './components/RoadmapSection';
import { NewsSection } from './components/NewsSection';
import { ResourcesSection } from './components/ResourcesSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ArticleModal } from './components/ArticleModal';
import { InquiryModal } from './components/InquiryModal';
import { LoginModal, UserSession } from './components/LoginModal';
import { Toast } from './components/Toast';

const DEFAULT_PREVIEW_USER: UserSession = {
  name: '유니세프 관리자',
  role: '유니세프 관리자',
  organization: '유니세프 한국위원회'
};

export default function App() {
  const [activeNavSection, setActiveNavSection] = useState<NavigationSection>('home');
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<UserSession | null>(() => {
    // 1. 저장된 세션이 있는 경우
    const saved = localStorage.getItem('c2s_user_session');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        // invalid session json
      }
    }
    // 기본적으로 비로그인 상태 (공지사항/자료실 로그인 필수 접근 제어)
    return null;
  });

  // 다른 페이지에서 접속할 때 비로그인 상태이면 가장 먼저 로그인 모달이 뜨도록 설정
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(() => {
    const saved = localStorage.getItem('c2s_user_session');
    return !saved;
  });
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // 다른 페이지/외부 링크에서 이 페이지로 진입 시 비로그인 상태이면 로그인 창을 가장 먼저 노출
  useEffect(() => {
    const saved = localStorage.getItem('c2s_user_session');
    if (!saved) {
      setIsLoginModalOpen(true);
    }
    // URL 해시 #login 또는 파라미터 ?login=true 지원
    if (window.location.hash === '#login' || new URLSearchParams(window.location.search).get('login') === 'true') {
      setIsLoginModalOpen(true);
    }
  }, []);

  // Scrollspy: 사용자가 화면을 스크롤할 때 현재 보이는 영역의 상단 탭에 파란 밑줄 표시
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
          const windowHeight = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight;

          // 1. 페이지 맨 하단(FAQ 영역) 도달 시
          if (scrollY + windowHeight >= documentHeight - 60) {
            setActiveNavSection('faq');
            ticking = false;
            return;
          }

          // 2. 최상단 히어로 배너 영역
          if (scrollY < 200) {
            setActiveNavSection('home');
            ticking = false;
            return;
          }

          // 3. 각 섹션 위치 감지 (고정 헤더 높이 70px + 여유값 고려)
          const sectionIds: NavigationSection[] = ['about', 'roadmap', 'news', 'resources', 'faq'];
          let currentSection: NavigationSection = 'home';

          for (const id of sectionIds) {
            const el = document.getElementById(id);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= 140) {
                currentSection = id;
              }
            }
          }

          setActiveNavSection(currentSection);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // 초기 로드 시 감지

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 상단 바 또는 각종 바로가기 클릭 시: 별도 페이지 전환 없이 메인 화면 내 해당 위치로 부드럽게 스크롤
  const handleNavigate = (section: NavigationSection) => {
    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveNavSection('home');
      return;
    }

    const el = document.getElementById(section);
    if (el) {
      const headerOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const currentScroll = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      const offsetPosition = Math.max(0, elementPosition + currentScroll - headerOffset);

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveNavSection(section);
    }
  };

  const showToast = (message: string) => {
    setToastMessage(message);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FBFF] text-slate-800 font-sans selection:bg-[#009EDB] selection:text-white">
      {/* Sticky Header - 스크롤 위치에 따라 activeSection에 파란 밑줄 표시 */}
      <Header
        activeSection={activeNavSection}
        onNavigate={handleNavigate}
        onOpenInquiry={() => setIsInquiryModalOpen(true)}
        onOpenLogin={() => setIsLoginModalOpen(true)}
        user={currentUser}
        onLogout={() => {
          setCurrentUser(null);
          sessionStorage.setItem('c2s_explicitly_logged_out', 'true');
          localStorage.removeItem('c2s_user_session');
          showToast('로그아웃되었습니다.');
        }}
      />

      {/* Main Content Area: 영역별 페이지 분리 없이 순서대로 메인 화면에 연속 배치 */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Core Architecture: 배우고 → 발견하고 → 제안하고 → 함께 바꿉니다 */}
        <CoreConceptSection />

        {/* 3. 프로젝트 소개 & 주체별 역할 */}
        <AboutSection />
        <StakeholdersSection onOpenInquiry={() => setIsInquiryModalOpen(true)} />

        {/* 4. 진행 로드맵 (7단계 타임라인) */}
        <RoadmapSection onNavigateToResources={() => handleNavigate('resources')} />

        {/* 5. 공지사항 및 최근 소식 (로그인 전용) */}
        <NewsSection
          isHomeViewOnly={false}
          onSelectArticle={(item) => setSelectedArticle(item)}
          user={currentUser}
          onOpenLogin={() => setIsLoginModalOpen(true)}
        />

        {/* 6. 사업 자료실 (로그인 전용) */}
        <ResourcesSection
          isHomeViewOnly={false}
          onNotify={showToast}
          user={currentUser}
          onOpenLogin={() => setIsLoginModalOpen(true)}
        />

        {/* 7. FAQ (자주 묻는 질문) */}
        <FaqSection onOpenInquiry={() => setIsInquiryModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenInquiry={() => setIsInquiryModalOpen(true)}
      />

      {/* Modals & Toasts */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onNotify={showToast}
      />

      <InquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        onSubmitSuccess={showToast}
      />

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={(user) => {
          setCurrentUser(user);
          sessionStorage.removeItem('c2s_explicitly_logged_out');
          localStorage.setItem('c2s_user_session', JSON.stringify(user));
          showToast(`${user.organization} ${user.name}님, 환영합니다.`);
        }}
      />

      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
