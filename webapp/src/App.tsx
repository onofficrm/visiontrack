import React, { useState } from 'react';
import {
  PageId,
  StoryCase,
  RehabSubTab,
  BankruptcySubTab,
  DiagnosisAnswers,
  ConsultationFormData,
} from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { QuickCounselModal } from './components/QuickCounselModal';
import { QuickFloatingBar } from './components/QuickFloatingBar';
import { HomeView } from './views/HomeView';
import { RehabView } from './views/RehabView';
import { BankruptcyView } from './views/BankruptcyView';
import { StoryView } from './views/StoryView';
import { NewsView } from './views/NewsView';
import { DiagnosisView } from './views/DiagnosisView';
import { ConsultationView } from './views/ConsultationView';
import { DesignSystemView } from './views/DesignSystemView';
import { SitemapUxView } from './views/SitemapUxView';
import { CursorGuideView } from './views/CursorGuideView';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [quickCounselOpen, setQuickCounselOpen] = useState<boolean>(false);
  const [selectedStory, setSelectedStory] = useState<StoryCase | null>(null);
  const [currentRehabTab, setCurrentRehabTab] = useState<RehabSubTab>('overview');
  const [currentBankruptcyTab, setCurrentBankruptcyTab] = useState<BankruptcySubTab>('overview');
  const [consultationPrefill, setConsultationPrefill] = useState<Partial<ConsultationFormData> | undefined>(undefined);

  const handleNavigate = (page: PageId, subTab?: string) => {
    if (page === 'rehab' && subTab) {
      setCurrentRehabTab(subTab as RehabSubTab);
    } else if (page === 'rehab' && !subTab) {
      setCurrentRehabTab('overview');
    }

    if (page === 'bankruptcy' && subTab) {
      setCurrentBankruptcyTab(subTab as BankruptcySubTab);
    } else if (page === 'bankruptcy' && !subTab) {
      setCurrentBankruptcyTab('overview');
    }

    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDiagnosisApply = (diagnosis: DiagnosisAnswers) => {
    setConsultationPrefill({
      incomeType: diagnosis.hasRegularIncome === '예' ? '정기 소득 있음 (급여/사업/아르바이트)' : '현재 소득 없음 (구직/질병/가사)',
      overdueStatus: diagnosis.overdueStatus || '연체 전 (정상 상환 중이나 버거움)',
      counselWish: diagnosis.priorityGoal || '월 변제금 낮추기',
      notes: `[자가진단 결과 연동]\n• 상환 곤란도: ${diagnosis.repaymentDifficulty}\n• 재산 대비 부채: ${diagnosis.debtVsAsset}\n• 우선 목표: ${diagnosis.priorityGoal}`,
    });
    setCurrentPage('consultation');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectStory = (story: StoryCase | null) => {
    setSelectedStory(story);
    if (story && currentPage !== 'story') {
      setCurrentPage('story');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F17] text-[#222222]">
      <div className="w-full bg-[#F7F8FA] min-h-screen">
        <Header
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onOpenQuickCounsel={() => setQuickCounselOpen(true)}
          deviceMode="desktop"
          onChangeDeviceMode={() => {}}
        />

        <main className="min-h-[600px] pb-24 lg:pb-0">
          {currentPage === 'home' && (
            <HomeView
              onNavigate={handleNavigate}
              onOpenQuickCounsel={() => setQuickCounselOpen(true)}
              onSelectStory={handleSelectStory}
            />
          )}

          {currentPage === 'rehab' && (
            <RehabView
              onNavigate={handleNavigate}
              onOpenQuickCounsel={() => setQuickCounselOpen(true)}
              initialTab={currentRehabTab}
            />
          )}

          {currentPage === 'bankruptcy' && (
            <BankruptcyView
              onNavigate={handleNavigate}
              onOpenQuickCounsel={() => setQuickCounselOpen(true)}
              initialTab={currentBankruptcyTab}
            />
          )}

          {currentPage === 'story' && (
            <StoryView
              onNavigate={handleNavigate}
              onOpenQuickCounsel={() => setQuickCounselOpen(true)}
              selectedStory={selectedStory}
              onSelectStory={handleSelectStory}
            />
          )}

          {currentPage === 'news' && (
            <NewsView
              onNavigate={handleNavigate}
              onOpenQuickCounsel={() => setQuickCounselOpen(true)}
            />
          )}

          {currentPage === 'diagnosis' && (
            <DiagnosisView
              onNavigate={handleNavigate}
              onApplyWithDiagnosis={handleDiagnosisApply}
            />
          )}

          {currentPage === 'consultation' && (
            <ConsultationView
              onNavigate={handleNavigate}
              prefillData={consultationPrefill}
            />
          )}

          {currentPage === 'design-system' && <DesignSystemView />}

          {currentPage === 'sitemap-ux' && <SitemapUxView onNavigate={handleNavigate} />}

          {currentPage === 'cursor-guide' && <CursorGuideView />}
        </main>

        <Footer
          onNavigate={handleNavigate}
          onOpenQuickCounsel={() => setQuickCounselOpen(true)}
        />

        <QuickFloatingBar
          onOpenQuickCounsel={() => setQuickCounselOpen(true)}
          onNavigate={handleNavigate}
        />
      </div>

      <QuickCounselModal
        isOpen={quickCounselOpen}
        onClose={() => setQuickCounselOpen(false)}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
