import React from 'react';
import { PageId, StoryCase } from '../../types';
import { STORY_CASES } from '../../data/mockData';
import { ChevronRight, Calendar, CheckCircle2, Building2 } from 'lucide-react';

interface HomeStoriesSectionProps {
  onNavigate: (page: PageId) => void;
  onSelectStory: (story: StoryCase) => void;
}

export const HomeStoriesSection: React.FC<HomeStoriesSectionProps> = ({
  onNavigate,
  onSelectStory,
}) => {
  // Take 4 latest stories from /story
  const latestStories = STORY_CASES.slice(0, 4);

  return (
    <section id="home-stories-section" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
        <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#D7AE66] uppercase tracking-wider mb-1">
              <span>REAL STORIES</span>
            </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#151C2C] tracking-tight">
            신용회복 경험담
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            개인회생을 통해 실제로 과도한 채무를 탕감받고 평범한 일상을 되찾은 의뢰인들의 진솔한 사연입니다.
          </p>
        </div>

        {/* 게시판 전체보기 링크 */}
        <button
          onClick={() => onNavigate('story')}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#151C2C] hover:text-[#D7AE66] transition-colors shrink-0 group cursor-pointer"
        >
          <span>경험담 전체보기</span>
          <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#D7AE66] group-hover:translate-x-0.5 transition-all" />
        </button>
      </div>

      {/* 4 Cards Grid (User requirement: 제목 + 간단한 요약 + 날짜) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {latestStories.map((story) => (
          <article
            key={story.id}
            onClick={() => onSelectStory(story)}
            className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-xs hover:shadow-lg hover:border-[#D7AE66]/70 transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              {/* Category & Badge */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-semibold px-2.5 py-1 bg-[#F7F8FA] text-gray-700 rounded-md border border-gray-100">
                  {story.category}
                </span>
                <span className="text-xs font-bold px-2.5 py-0.5 bg-[#EBFBEE] text-[#2B8A3E] rounded-md flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{story.reliefRate}% 탕감 인가</span>
                </span>
              </div>

              {/* 제목 (wr_subject) */}
              <h3 className="text-base sm:text-lg font-bold text-[#151C2C] group-hover:text-[#D7AE66] transition-colors line-clamp-2 mb-2 leading-snug">
                {story.title}
              </h3>

              {/* 간단한 요약 (wr_content summary) */}
              <p className="text-xs text-gray-600 line-clamp-2 mb-4 leading-relaxed">
                {story.summary}
              </p>
            </div>

            {/* Bottom Meta Row: 날짜 (wr_datetime) & 법원 / 채무 정보 */}
            <div className="pt-4 border-t border-gray-100 space-y-2">
              <div className="grid grid-cols-2 gap-2 bg-[#F7F8FA] p-2.5 rounded-xl text-xs">
                <div>
                  <div className="text-[10px] text-gray-400">기존 채무총액</div>
                  <div className="font-bold text-gray-700 line-through">
                    {(story.originalDebt * 10000).toLocaleString()}원
                  </div>
                </div>
                <div>
                  <div className="text-[10px] text-[#2B8A3E] font-semibold">최종 탕감액</div>
                  <div className="font-black text-[#2B8A3E]">
                    {(story.relievedDebt * 10000).toLocaleString()}원
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-gray-400 pt-1">
                <span className="flex items-center gap-1 text-gray-500">
                  <Building2 className="w-3.5 h-3.5 text-gray-400" />
                  <span>{story.court}</span>
                </span>
                <span className="flex items-center gap-1 font-mono">
                  <Calendar className="w-3 h-3 text-gray-400" />
                  <span>{story.date}</span>
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
