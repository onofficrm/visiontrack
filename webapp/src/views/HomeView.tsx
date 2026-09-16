import React from 'react';
import { PageId, StoryCase } from '../types';
import { HomeHeroSection } from '../components/home/HomeHeroSection';
import { HomeProblemSolvingSection } from '../components/home/HomeProblemSolvingSection';
import { HomeCoreInfoSection } from '../components/home/HomeCoreInfoSection';
import { HomeProcedureTimeline } from '../components/home/HomeProcedureTimeline';
import { HomeDiagnosisCtaSection } from '../components/home/HomeDiagnosisCtaSection';
import { HomeCounselMidCtaSection } from '../components/home/HomeCounselMidCtaSection';
import { HomeStoriesSection } from '../components/home/HomeStoriesSection';
import { HomeNewsSection } from '../components/home/HomeNewsSection';
import { HomeFaqSection } from '../components/home/HomeFaqSection';
import { HomeFinalCtaSection } from '../components/home/HomeFinalCtaSection';

interface HomeViewProps {
  onNavigate: (page: PageId, subTab?: string) => void;
  onOpenQuickCounsel: () => void;
  onSelectStory: (story: StoryCase) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenQuickCounsel,
  onSelectStory,
}) => {
  return (
    <div className="space-y-4 sm:space-y-6 pb-16 sm:pb-20">
      {/* [1] Hero Section: 공감형 헤드카피, 듀얼 CTA, 1:1 상담 사진 */}
      <HomeHeroSection
        onNavigate={onNavigate}
        onOpenQuickCounsel={onOpenQuickCounsel}
      />

      {/* [2] 핵심 문제 해결 영역: 5대 채무 고민 상황별 카드 및 해당 세부페이지 연결 */}
      <HomeProblemSolvingSection onNavigate={onNavigate} />

      {/* [3] 개인회생 핵심 정보 4가지 카드: 정의, 자격, 절차, 준비서류 */}
      <HomeCoreInfoSection onNavigate={onNavigate} />

      {/* [4] 개인회생 진행 과정: 7단계 타임라인 */}
      <HomeProcedureTimeline />

      {/* [5] 자가진단 CTA 영역: "내 상황도 개인회생이 가능할까요?" + 간단하게 확인하기 */}
      <HomeDiagnosisCtaSection onNavigate={onNavigate} />

      {/* [6] 중간 상담 CTA 영역: "현재 상황을 정확하게 확인하고 싶다면 상담을 받아보세요" */}
      <HomeCounselMidCtaSection onOpenQuickCounsel={onOpenQuickCounsel} />

      {/* [7] 신용회복 경험담: /story 그누보드 게시판 최신글 4개 카드 */}
      <HomeStoriesSection
        onNavigate={onNavigate}
        onSelectStory={onSelectStory}
      />

      {/* [8] 뉴스/정보: /news 그누보드 게시판 최신글 4개 카드 */}
      <HomeNewsSection onNavigate={onNavigate} />

      {/* [9] 자주 묻는 질문: FAQ 아코디언 */}
      <HomeFaqSection onOpenQuickCounsel={onOpenQuickCounsel} />

      {/* [10] Final CTA: "혼자 판단하기 어려운 상황이라면..." + 상담 신청 */}
      <HomeFinalCtaSection onOpenQuickCounsel={onOpenQuickCounsel} />
    </div>
  );
};
