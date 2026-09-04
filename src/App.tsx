import React, { useState } from 'react';
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
import { Toast } from './components/Toast';
import { Home, ArrowLeft } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<NavigationSection>('home');
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleNavigate = (section: NavigationSection) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = (message: string) => {
    setToastMessage(message);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FBFF] text-slate-800 font-sans selection:bg-[#009EDB] selection:text-white">
      {/* Sticky Header */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenInquiry={() => setIsInquiryModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeSection === 'home' ? (
          /* Full Continuous Storytelling Home Page */
          <>
            {/* 1. Hero Section with Copy & Connection Flow Graphic */}
            <HeroSection
              onNavigate={handleNavigate}
              onOpenInquiry={() => setIsInquiryModalOpen(true)}
            />

            {/* 2. Core Architecture: 배우고 → 발견하고 → 제안하고 → 함께 바꿉니다 */}
            <CoreConceptSection />

            {/* 3. Participating Stakeholders: 학교, 지자체, 유니세프 한국위원회 */}
            <StakeholdersSection onOpenInquiry={() => setIsInquiryModalOpen(true)} />

            {/* 4. Project About Overview */}
            <AboutSection />

            {/* 5. Progress Roadmap: 7-Step Interactive Timeline */}
            <RoadmapSection onNavigateToResources={() => handleNavigate('resources')} />

            {/* 6. Recent News & Notice (3 Featured items with '전체보기' button) */}
            <NewsSection
              isHomeViewOnly={true}
              onNavigateToAllNews={() => handleNavigate('news')}
              onSelectArticle={(item) => setSelectedArticle(item)}
            />

            {/* 7. Key Resources (3~4 recent materials with '자료실 바로가기' button) */}
            <ResourcesSection
              isHomeViewOnly={true}
              onNavigateToAllResources={() => handleNavigate('resources')}
              onNotify={showToast}
            />

            {/* 8. FAQ Accordion */}
            <FaqSection onOpenInquiry={() => setIsInquiryModalOpen(true)} />
          </>
        ) : (
          /* Dedicated Sub-Pages with Full Controls, Filters & Breadcrumbs */
          <div className="py-8">
            {/* Breadcrumb / Back to Home navigation */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
              <button
                id="back-to-home-btn"
                onClick={() => handleNavigate('home')}
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-[#00AEEF] transition-colors p-1 rounded"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>메인 페이지로 돌아가기</span>
              </button>
            </div>

            {/* Render Specific Section in full detailed mode */}
            {activeSection === 'about' && (
              <>
                <AboutSection />
                <StakeholdersSection onOpenInquiry={() => setIsInquiryModalOpen(true)} />
              </>
            )}

            {activeSection === 'roadmap' && (
              <RoadmapSection onNavigateToResources={() => handleNavigate('resources')} />
            )}

            {activeSection === 'news' && (
              <NewsSection
                isHomeViewOnly={false}
                onSelectArticle={(item) => setSelectedArticle(item)}
              />
            )}

            {activeSection === 'resources' && (
              <ResourcesSection
                isHomeViewOnly={false}
                onNotify={showToast}
              />
            )}

            {activeSection === 'faq' && (
              <FaqSection onOpenInquiry={() => setIsInquiryModalOpen(true)} />
            )}
          </div>
        )}
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

      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
