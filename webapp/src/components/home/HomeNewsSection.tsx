import React from 'react';
import { PageId } from '../../types';
import { NEWS_POSTS } from '../../data/mockData';
import { ChevronRight, Calendar, Newspaper, ArrowRight } from 'lucide-react';

interface HomeNewsSectionProps {
  onNavigate: (page: PageId) => void;
}

export const HomeNewsSection: React.FC<HomeNewsSectionProps> = ({ onNavigate }) => {
  // Take 4 latest news posts from /news
  const latestNews = NEWS_POSTS.slice(0, 4);

  return (
    <section id="home-news-section" className="bg-[#F7F8FA] border-y border-[#E5E7EB] py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#D7AE66] uppercase tracking-wider mb-1">
              <span>NEWS & COLUMN</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#151C2C] tracking-tight">
              회생·파산 최신 뉴스 및 법률 정보
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              최신 법원 실무준칙, 개정 법령, 채무자가 꼭 알아야 할 권리 정보를 신속하게 전해드립니다.
            </p>
          </div>

          {/* 게시판 전체보기 링크 */}
          <button
            onClick={() => onNavigate('news')}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#151C2C] hover:text-[#D7AE66] transition-colors shrink-0 group cursor-pointer"
          >
            <span>뉴스/정보 전체보기</span>
            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#D7AE66] group-hover:translate-x-0.5 transition-all" />
          </button>
        </div>

        {/* 4 News Items (User requirement: 카테고리 + 제목 + 날짜 구조) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {latestNews.map((post) => (
            <article
              key={post.id}
              onClick={() => onNavigate('news')}
              className="bg-white border border-[#E5E7EB] rounded-2xl p-5 shadow-xs hover:shadow-md hover:border-[#D7AE66]/80 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* 1. 카테고리 (ca_name) */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded bg-gray-100 text-[#151C2C] group-hover:bg-[#151C2C] group-hover:text-[#D7AE66] transition-colors">
                    {post.category}
                  </span>
                  <Newspaper className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#D7AE66] transition-colors" />
                </div>

                {/* 2. 제목 (wr_subject) */}
                <h3 className="text-sm font-bold text-[#151C2C] group-hover:text-[#D7AE66] transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h3>

                {/* 서브 요약 (wr_content summary) */}
                <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                  {post.summary}
                </p>
              </div>

              {/* 3. 날짜 (wr_datetime) & 더보기 */}
              <div className="pt-4 mt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                <span className="flex items-center gap-1 font-mono text-[11px]">
                  <Calendar className="w-3 h-3 text-gray-400" />
                  <span>{post.date}</span>
                </span>
                <span className="text-[11px] font-bold text-[#151C2C] group-hover:text-[#D7AE66] flex items-center gap-0.5">
                  <span>읽기</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
