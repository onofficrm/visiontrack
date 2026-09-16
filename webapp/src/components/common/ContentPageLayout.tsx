import React, { useState } from 'react';
import { PageId } from '../../types';
import {
  ChevronRight,
  Home,
  CheckCircle2,
  Lock,
  ArrowRight,
  PhoneCall,
  HelpCircle,
  ChevronDown,
  ExternalLink,
  ShieldCheck,
  AlertCircle,
} from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  pageId?: PageId;
  subTab?: string;
}

export interface RelatedCard {
  title: string;
  desc: string;
  tag: string;
  pageId: PageId;
  subTab?: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface SubTabItem {
  id: string;
  label: string;
}

interface ContentPageLayoutProps {
  // Breadcrumb
  breadcrumbs: BreadcrumbItem[];
  
  // Page Hero & SEO Heading
  badgeText: string;
  title: string;
  intro: string;
  
  // Tabs Navigation
  tabs: SubTabItem[];
  activeTab: string;
  onTabChange: (tabId: string) => void;

  // Main Content Children
  children: React.ReactNode;

  // 6. 핵심 내용 요약
  keyTakeaways: string[];

  // 7. 관련 정보 카드
  relatedCards: RelatedCard[];

  // 8. 상담 CTA 커스텀 문구
  ctaTitle?: string;
  ctaDescription?: string;

  // 9. FAQ
  faqs: FaqItem[];

  // Navigation callbacks
  onNavigate: (page: PageId, subTab?: string) => void;
  onOpenQuickCounsel: () => void;
}

export const ContentPageLayout: React.FC<ContentPageLayoutProps> = ({
  breadcrumbs,
  badgeText,
  title,
  intro,
  tabs,
  activeTab,
  onTabChange,
  children,
  keyTakeaways,
  relatedCards,
  ctaTitle = '내 상황에 맞는 방법이 궁금하다면',
  ctaDescription = '채무 규모, 재산 상황, 소득 형태에 따라 가장 적합한 법적 절차가 다릅니다. 비공개 법률 상담을 통해 현재 처한 조건에서의 실질적인 해결 가능성을 객관적으로 확인해보세요.',
  faqs,
  onNavigate,
  onOpenQuickCounsel,
}) => {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  return (
    <div className="space-y-10 sm:space-y-14 pb-20">
      {/* 1. Breadcrumb Bar */}
      <nav aria-label="Breadcrumb" className="bg-[#F7F8FA] border-b border-[#E5E7EB] py-3 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-1.5 text-xs text-gray-500 overflow-x-auto whitespace-nowrap">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-1 hover:text-[#151C2C] transition-colors cursor-pointer"
          >
            <Home className="w-3.5 h-3.5 text-gray-400" />
            <span>홈</span>
          </button>

          {breadcrumbs.map((item, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3 h-3 text-gray-400 shrink-0" />
              {idx === breadcrumbs.length - 1 ? (
                <span className="font-bold text-[#151C2C]">{item.label}</span>
              ) : (
                <button
                  onClick={() => item.pageId && onNavigate(item.pageId, item.subTab)}
                  className="hover:text-[#151C2C] transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              )}
            </React.Fragment>
          ))}
        </div>
      </nav>

      {/* 2 & 3 & 4. Page Hero + H1 + Intro */}
      <header className="bg-[#151C2C] text-white py-12 sm:py-16 px-4 sm:px-6 border-b border-[#253046]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E293B] border border-[#D7AE66]/40 text-[#D7AE66] text-xs font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{badgeText}</span>
            </div>

            {/* H1 Semantic Title for SEO */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {title}
            </h1>

            {/* 4. Short Intro */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              {intro}
            </p>
          </div>
        </div>
      </header>

      {/* Navigation Subtabs Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex border-b border-gray-200 overflow-x-auto gap-2 text-xs sm:text-sm font-bold no-scrollbar">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`pb-3 px-3 sm:px-4 border-b-2 whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? 'border-[#D7AE66] text-[#151C2C]'
                    : 'border-transparent text-gray-500 hover:text-gray-900'
                }`}
              >
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 5. Main Body Content (Children) */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6">
        {children}
      </main>

      {/* 6. 핵심 내용 요약 (Key Takeaways Highlight Box) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-[#151C2C] text-[#D7AE66] flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <h3 className="text-lg font-bold text-[#151C2C]">
              핵심 내용 요약
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
            {keyTakeaways.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200/80 rounded-xl p-3.5 flex items-start gap-3 shadow-2xs"
              >
                <div className="w-5 h-5 rounded-full bg-amber-50 text-[#D7AE66] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-[#D7AE66]/30">
                  {idx + 1}
                </div>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. 관련 정보 카드 (Related Links) */}
      {relatedCards.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-4">
            <h3 className="text-base sm:text-lg font-bold text-[#151C2C]">
              함께 확인하면 도움되는 정보
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedCards.map((card, idx) => (
              <div
                key={idx}
                onClick={() => onNavigate(card.pageId, card.subTab)}
                className="bg-white border border-gray-200 rounded-xl p-5 hover:border-[#D7AE66] hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-gray-100 text-gray-600 mb-2 inline-block">
                    {card.tag}
                  </span>
                  <h4 className="text-sm font-bold text-[#151C2C] group-hover:text-[#D7AE66] transition-colors mb-1.5">
                    {card.title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                    {card.desc}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#151C2C] group-hover:text-[#D7AE66]">
                  <span>자세히 확인하기</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 8. 상담 CTA (과도한 확신 배제, 신뢰 중심 설계) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#151C2C] text-white rounded-3xl p-6 sm:p-10 border border-[#2D3C5A] shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D7AE66]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1E293B] text-[#D7AE66] text-xs font-bold border border-[#D7AE66]/30">
                <Lock className="w-3.5 h-3.5" />
                <span>100% 비공개 안심 법률상담</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
                {ctaTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                {ctaDescription}
              </p>
              <div className="text-[11px] text-slate-400 pt-1 flex items-center justify-center lg:justify-start gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-[#D7AE66]" />
                <span>법원 인가 및 면책 결정은 법원의 고유 권한이며, 상황에 따라 결과와 기간이 달라질 수 있습니다.</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
              <a
                href="tel:050369821000"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border border-slate-700 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-[#D7AE66]" />
                <span>전화상담 0503-6982-1000</span>
              </a>

              <button
                onClick={onOpenQuickCounsel}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D7AE66] to-[#C59C53] hover:from-[#e4c281] hover:to-[#D7AE66] text-[#151C2C] font-black text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer hover:-translate-y-0.5"
              >
                <Lock className="w-4 h-4" />
                <span>상담 신청하기</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 9. 주제별 FAQ Accordion */}
      {faqs.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-8 space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#151C2C] text-[#D7AE66] text-xs font-bold">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>FAQ</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#151C2C]">
              해당 주제 관련 자주 묻는 질문
            </h3>
            <p className="text-xs text-gray-500">
              궁금하신 점을 빠르게 확인해보세요.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={idx}
                  className={`bg-white border rounded-2xl overflow-hidden transition-all shadow-2xs ${
                    isOpen ? 'border-[#D7AE66] ring-1 ring-[#D7AE66]/30' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-[#151C2C] hover:bg-gray-50/70 transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={`w-6 h-6 rounded-full text-xs flex items-center justify-center font-black shrink-0 ${
                          isOpen ? 'bg-[#D7AE66] text-[#151C2C]' : 'bg-[#151C2C] text-[#D7AE66]'
                        }`}
                      >
                        Q
                      </span>
                      <span>{faq.q}</span>
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#D7AE66]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs text-gray-600 leading-relaxed border-t border-gray-100 bg-[#F7F8FA]/50 animate-fadeIn">
                      <div className="pl-9">
                        <p>{faq.a}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
};
