import React, { useState } from 'react';
import { PageId, NewsPost } from '../types';
import { NEWS_POSTS } from '../data/mockData';
import {
  FileText,
  Search,
  Calendar,
  Eye,
  ChevronRight,
  Calculator,
  Lock,
  ArrowLeft,
  Share2,
  Clock,
  PhoneCall,
  CheckCircle2,
  BookOpen,
} from 'lucide-react';

interface NewsViewProps {
  onNavigate: (page: PageId) => void;
  onOpenQuickCounsel: () => void;
}

export const NewsView: React.FC<NewsViewProps> = ({ onNavigate, onOpenQuickCounsel }) => {
  const [activeCategory, setActiveCategory] = useState<string>('전체');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedPost, setSelectedPost] = useState<NewsPost | null>(null);
  const [shareCopied, setShareCopied] = useState(false);

  const categories = ['전체', '최신개정', '독촉대처', '법률상식', '자주묻는질문'];

  const filteredPosts = NEWS_POSTS.filter((post) => {
    const matchesCategory = activeCategory === '전체' || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2000);
    }
  };

  // ==========================================
  // [VIEW MODE]: 게시글 상세 페이지 (PostDetail)
  // 구조: 본문 → 관련 정보 → 상담 CTA
  // ==========================================
  if (selectedPost) {
    const relatedPosts = NEWS_POSTS.filter(
      (item) => item.id !== selectedPost.id
    ).slice(0, 3);

    return (
      <div className="space-y-8 pb-24">
        {/* Breadcrumb (Breadcrumb Component) */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between text-xs text-gray-500">
            <nav className="flex items-center gap-1.5" aria-label="Breadcrumb">
              <button
                onClick={() => onNavigate('home')}
                className="hover:text-[#151C2C] transition-colors cursor-pointer"
              >
                홈
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              <button
                onClick={() => setSelectedPost(null)}
                className="hover:text-[#151C2C] transition-colors cursor-pointer"
              >
                개인회생 뉴스 · 정보
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-[#151C2C] font-semibold truncate max-w-[150px] sm:max-w-xs">
                {selectedPost.category}
              </span>
            </nav>

            <button
              onClick={() => setSelectedPost(null)}
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#151C2C] hover:text-[#D7AE66] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>목록으로 돌아가기</span>
            </button>
          </div>
        </div>

        {/* Main Article Container */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
          {/* Article Header */}
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-3 py-1 bg-[#151C2C] text-[#D7AE66] rounded-md">
                  {selectedPost.category}
                </span>
                {selectedPost.isImportant && (
                  <span className="text-xs font-bold px-2.5 py-1 bg-[#FFF4E5] text-[#B76E00] rounded-md">
                    추천 필독
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3 text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {selectedPost.date}
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5" />
                  조회 {selectedPost.viewCount.toLocaleString()}
                </span>
                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-1 text-gray-500 hover:text-[#151C2C] cursor-pointer"
                  title="기사 공유하기"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{shareCopied ? '복사됨' : '공유'}</span>
                </button>
              </div>
            </div>

            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#151C2C] leading-snug">
              {selectedPost.title}
            </h1>

            <div className="flex items-center gap-3 text-xs text-gray-500 pt-1 border-t border-gray-100">
              <span className="font-semibold text-gray-700">작성: {selectedPost.author}</span>
              <span>·</span>
              <span className="text-gray-400">개인회생·파산 실무 가이드 칼럼</span>
            </div>
          </div>

          {/* Article Summary Lead Box */}
          <div className="bg-[#F7F8FA] border-l-4 border-[#D7AE66] p-5 sm:p-6 rounded-r-2xl text-xs sm:text-sm text-gray-700 font-medium leading-relaxed shadow-2xs">
            <div className="text-[11px] font-bold text-[#D7AE66] uppercase tracking-wider mb-1">
              요약 (Summary)
            </div>
            {selectedPost.summary}
          </div>

          {/* Article Content Body (본문) */}
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="text-sm sm:text-base text-gray-700 leading-relaxed whitespace-pre-line space-y-4">
              {selectedPost.content}
            </div>

            <div className="pt-6 border-t border-gray-100 text-xs text-gray-400 flex items-center justify-between">
              <span>* 본 정보는 최신 회생법원 준칙 및 실무 처리 기준을 바탕으로 작성되었습니다.</span>
              <span>게시판: /news</span>
            </div>
          </div>

          {/* Related Information (관련 정보) */}
          <div className="space-y-4 pt-2">
            <h3 className="text-lg font-bold text-[#151C2C] flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#D7AE66]" />
              <span>함께 읽으면 도움되는 관련 정보</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedPosts.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => {
                    setSelectedPost(rel);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-white border border-[#E5E7EB] rounded-xl p-4 hover:border-[#D7AE66] hover:shadow-md transition-all cursor-pointer space-y-2 group flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold text-[#D7AE66] block">
                      {rel.category}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-[#151C2C] group-hover:text-[#D7AE66] transition-colors line-clamp-2">
                      {rel.title}
                    </h4>
                  </div>
                  <div className="text-[11px] text-gray-400 pt-2 border-t border-gray-100 flex items-center justify-between">
                    <span>{rel.date}</span>
                    <span className="font-semibold text-[#151C2C] group-hover:text-[#D7AE66]">읽기 →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Counseling CTA (상담 CTA) */}
          <div className="bg-[#151C2C] text-white rounded-2xl p-6 sm:p-8 shadow-md border border-[#252f44] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#1E273A] text-[#D7AE66] text-xs font-bold border border-[#D7AE66]/30">
                <Lock className="w-3 h-3" />
                <span>100% 비밀보장 법률상담</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                나에게도 이 법률 준칙이나 제도가 적용될 수 있을까요?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                개인별 채무 성격과 소득 상태에 따라 유리한 절차가 달라집니다. 부담 없이 확인해보세요.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <button
                onClick={() => onNavigate('diagnosis')}
                className="px-5 py-3 rounded-xl bg-[#202B40] hover:bg-[#2A3955] text-white font-bold text-xs sm:text-sm border border-slate-700 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Calculator className="w-4 h-4 text-[#D7AE66]" />
                <span>1분 자가진단</span>
              </button>
              <button
                onClick={() => onNavigate('consultation')}
                className="px-6 py-3 rounded-xl bg-[#D7AE66] hover:bg-[#c59c53] text-[#151C2C] font-extrabold text-xs sm:text-sm shadow-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Lock className="w-4 h-4" />
                <span>비공개 상담 신청</span>
              </button>
            </div>
          </div>
        </article>
      </div>
    );
  }

  // ==========================================
  // [LIST MODE]: 뉴스 목록 (PostList)
  // 정보성 콘텐츠 사이트처럼 깔끔한 디자인
  // 항목: 카테고리, 제목, 요약, 날짜
  // ==========================================
  return (
    <div className="space-y-8 pb-20">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between text-xs text-gray-500">
          <nav className="flex items-center gap-1.5" aria-label="Breadcrumb">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-[#151C2C] transition-colors cursor-pointer"
            >
              홈
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#151C2C] font-semibold">개인회생 뉴스 · 정보</span>
          </nav>
          <span className="text-gray-400 hidden sm:inline">총 {filteredPosts.length}건의 법률 정보</span>
        </div>
      </div>

      {/* Header Banner (SectionTitle / Hero) */}
      <section className="bg-[#151C2C] text-white py-10 sm:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#D7AE66] text-[#151C2C] text-xs font-black">
                  회생·파산 정보센터
                </span>
                <span className="text-xs font-mono text-slate-400 bg-[#252f44] px-2 py-0.5 rounded border border-slate-700">
                  게시판: /news
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                개인회생 뉴스 · 정보
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                2026년 최신 회생법원 준칙 개정안, 통장 압류 해제 방법, 독촉 전화 합법 대처법 등 실질적으로 도움이 되는 공신력 있는 법률 칼럼을 제공합니다.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => onNavigate('diagnosis')}
                className="px-4 py-2.5 bg-[#252f44] hover:bg-[#32405c] text-white font-bold text-xs rounded-xl border border-slate-600 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Calculator className="w-4 h-4 text-[#D7AE66]" />
                <span>자가진단</span>
              </button>
              <button
                onClick={() => onNavigate('consultation')}
                className="px-4 py-2.5 bg-[#D7AE66] hover:bg-[#c59c53] text-[#151C2C] font-extrabold text-xs rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Lock className="w-4 h-4" />
                <span>비밀상담 문의</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        {/* Controls Bar: Categories & Search */}
        <div className="bg-white border border-[#E5E7EB] rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors shrink-0 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#151C2C] text-[#D7AE66]'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="뉴스, 칼럼, 키워드 검색"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#D7AE66] focus:bg-white"
            />
          </div>
        </div>

        {/* News List (PostList / NewsCard - 정보성 사이트 스타일) */}
        {filteredPosts.length === 0 ? (
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-12 text-center text-gray-400 space-y-2">
            <p className="text-sm">검색 조건에 맞는 뉴스·정보가 없습니다.</p>
            <button
              onClick={() => {
                setActiveCategory('전체');
                setSearchTerm('');
              }}
              className="text-xs text-[#D7AE66] font-bold underline cursor-pointer"
            >
              전체 목록 보기
            </button>
          </div>
        ) : (
          <div className="space-y-3.5">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => {
                  setSelectedPost(post);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white border border-[#E5E7EB] rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-md hover:border-[#D7AE66] transition-all cursor-pointer group flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-2 flex-1">
                  {/* Category & Badge */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-2.5 py-0.5 bg-gray-100 text-gray-700 rounded">
                      {post.category}
                    </span>
                    {post.isImportant && (
                      <span className="text-[11px] font-bold px-2 py-0.5 bg-[#FFF4E5] text-[#B76E00] rounded">
                        추천 필독
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-[#151C2C] group-hover:text-[#D7AE66] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-[#666666] line-clamp-2 leading-relaxed">
                    {post.summary}
                  </p>

                  {/* Meta (날짜, 작성자, 조회수) */}
                  <div className="flex items-center gap-4 text-[11px] text-gray-400 pt-1">
                    <span>작성: {post.author}</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      조회 {post.viewCount.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Right Arrow / Action */}
                <div className="shrink-0 flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t sm:border-t-0 border-gray-100 pt-3 sm:pt-0">
                  <span className="text-xs font-bold text-[#151C2C] group-hover:text-[#D7AE66] flex items-center gap-1">
                    <span>전문 보기</span>
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Board Bottom Counseling Banner (CTASection) */}
        <section className="bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="text-xs font-bold text-[#D7AE66] flex items-center justify-center md:justify-start gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>개인 상황별 1:1 맞춤 법률 조언</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#151C2C]">
              법률 뉴스나 준칙 내용을 내 상황에 직접 적용해보고 싶으신가요?
            </h3>
            <p className="text-xs text-gray-500">
              비용 없이 진행되는 1:1 비공개 사전상담으로 명쾌한 해결 방안을 안내받으세요.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:050369821000"
              className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-[#151C2C] font-bold text-xs rounded-xl flex items-center gap-1.5 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#D7AE66]" />
              <span>전화상담</span>
            </a>
            <button
              onClick={() => onNavigate('consultation')}
              className="px-5 py-2.5 bg-[#D7AE66] hover:bg-[#c59c53] text-[#151C2C] font-extrabold text-xs rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>상담 신청하기</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
