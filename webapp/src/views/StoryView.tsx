import React, { useState } from 'react';
import { PageId, StoryCase } from '../types';
import { STORY_CASES } from '../data/mockData';
import {
  TrendingDown,
  Search,
  Eye,
  Calendar,
  Lock,
  Calculator,
  ChevronRight,
  Quote,
  ArrowLeft,
  Share2,
  CheckCircle2,
  FileText,
  PhoneCall,
} from 'lucide-react';

interface StoryViewProps {
  onNavigate: (page: PageId) => void;
  onOpenQuickCounsel: () => void;
  selectedStory: StoryCase | null;
  onSelectStory: (story: StoryCase | null) => void;
}

export const StoryView: React.FC<StoryViewProps> = ({
  onNavigate,
  onOpenQuickCounsel,
  selectedStory,
  onSelectStory,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('전체');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [shareCopied, setShareCopied] = useState(false);

  const categories = ['전체', '직장인', '개인사업자', '주부', '청년/프리랜서'];

  const filteredCases = STORY_CASES.filter((item) => {
    const matchesCategory = activeCategory === '전체' || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.court.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));
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
  // ==========================================
  if (selectedStory) {
    const relatedStories = STORY_CASES.filter(
      (item) => item.id !== selectedStory.id
    ).slice(0, 3);

    return (
      <div className="space-y-8 pb-24">
        {/* Breadcrumb & Top Bar */}
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
                onClick={() => onSelectStory(null)}
                className="hover:text-[#151C2C] transition-colors cursor-pointer"
              >
                신용회복 경험담
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-[#151C2C] font-semibold truncate max-w-[150px] sm:max-w-xs">
                {selectedStory.category}
              </span>
            </nav>

            <button
              onClick={() => onSelectStory(null)}
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#151C2C] hover:text-[#D7AE66] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>목록으로 돌아가기</span>
            </button>
          </div>
        </div>

        {/* Main Post Detail Container */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
          {/* Post Header */}
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold px-3 py-1 bg-[#151C2C] text-[#D7AE66] rounded-md">
                  {selectedStory.category}
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 bg-[#EBFBEE] text-[#2B8A3E] rounded-md">
                  {selectedStory.reliefRate}% 탕감 인가
                </span>
                <span className="text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">
                  {selectedStory.court}
                </span>
              </div>

              <div className="flex items-center gap-3 text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {selectedStory.date}
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5" />
                  조회 {selectedStory.viewCount.toLocaleString()}
                </span>
                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-1 text-gray-500 hover:text-[#151C2C] cursor-pointer"
                  title="링크 복사"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{shareCopied ? '복사됨' : '공유'}</span>
                </button>
              </div>
            </div>

            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#151C2C] leading-snug">
              {selectedStory.title}
            </h1>

            <p className="text-xs sm:text-sm text-gray-500 font-medium">
              의뢰인: {selectedStory.debtorInfo} · 변제기간: {selectedStory.periodMonths}개월
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {selectedStory.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Stats Comparison Card (그누보드 wr_2, wr_3, wr_4, wr_5 매핑) */}
          <div className="bg-[#151C2C] text-white rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="text-xs font-bold text-[#D7AE66] mb-3 uppercase tracking-wider">
              법원 인가결정 정본 기준 채무 조정 결과
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="bg-[#1E273A] rounded-xl p-4 border border-slate-700/60">
                <div className="text-xs text-slate-400 mb-1">기존 원금 총액</div>
                <div className="text-lg sm:text-xl font-bold text-slate-300 line-through">
                  {(selectedStory.originalDebt * 10000).toLocaleString()}원
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  기존 월이자: 약 {selectedStory.monthlyPayBefore}만원
                </div>
              </div>

              <div className="bg-[#1E273A] rounded-xl p-4 border border-[#2B8A3E]/60">
                <div className="text-xs text-[#2B8A3E] font-bold mb-1">최종 탕감 금액</div>
                <div className="text-xl sm:text-2xl font-black text-[#51CF66]">
                  {(selectedStory.relievedDebt * 10000).toLocaleString()}원
                </div>
                <div className="text-[11px] font-bold text-[#51CF66] mt-1">
                  원금 {selectedStory.reliefRate}% 감면
                </div>
              </div>

              <div className="bg-[#1E273A] rounded-xl p-4 border border-[#D7AE66]/60">
                <div className="text-xs text-[#D7AE66] font-bold mb-1">확정 월 변제금</div>
                <div className="text-xl sm:text-2xl font-black text-[#D7AE66]">
                  월 {selectedStory.monthlyPayAfter}만원
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  {selectedStory.periodMonths}개월 성실납부 후 잔여채무 면책
                </div>
              </div>
            </div>
          </div>

          {/* Post Content Body */}
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-8 space-y-6">
            <h2 className="text-lg font-bold text-[#151C2C] flex items-center gap-2 border-b border-gray-100 pb-3">
              <FileText className="w-5 h-5 text-[#D7AE66]" />
              <span>사건 진행 경과 및 법원 인가 과정</span>
            </h2>

            <div className="text-sm sm:text-base text-gray-700 leading-relaxed whitespace-pre-line space-y-4">
              {selectedStory.content}
            </div>

            {/* Client Real Review Box */}
            <div className="bg-[#FFFDF7] border-l-4 border-[#D7AE66] p-5 rounded-r-xl space-y-2 mt-6">
              <div className="flex items-center gap-2 text-xs font-bold text-[#D7AE66]">
                <Quote className="w-4 h-4" />
                <span>의뢰인 자필 감사 후기 발췌</span>
              </div>
              <p className="text-sm sm:text-base text-gray-800 italic leading-relaxed">
                {selectedStory.clientReview}
              </p>
            </div>
          </div>

          {/* Inline Counseling Callout (상세 페이지 상담 CTA) */}
          <div className="bg-gradient-to-br from-[#151C2C] to-[#1E293B] text-white rounded-2xl p-6 sm:p-8 shadow-md flex flex-col md:flex-row items-center justify-between gap-6 border border-[#2D3A54]">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#202B40] text-[#D7AE66] text-xs font-bold border border-[#D7AE66]/30">
                <Lock className="w-3 h-3" />
                <span>100% 비밀보장 무료상담</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                나도 이 사례처럼 채무를 감면받을 수 있을까요?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                직업, 소득, 채무액에 따라 적용 가능한 최적의 법적 절차를 사전 안내해 드립니다.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <button
                onClick={() => onNavigate('diagnosis')}
                className="px-5 py-3 rounded-xl bg-[#25324C] hover:bg-[#303E5C] text-white font-bold text-xs sm:text-sm border border-slate-600 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
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

          {/* Related Stories (관련 콘텐츠) */}
          <div className="space-y-4 pt-4">
            <h3 className="text-lg font-bold text-[#151C2C]">
              다른 의뢰인들의 신용회복 경험담
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedStories.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => {
                    onSelectStory(rel);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-white border border-[#E5E7EB] rounded-xl p-4 hover:border-[#D7AE66] hover:shadow-md transition-all cursor-pointer space-y-2 group"
                >
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-bold text-gray-600">{rel.category}</span>
                    <span className="font-bold text-[#2B8A3E]">{rel.reliefRate}% 탕감</span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#151C2C] group-hover:text-[#D7AE66] transition-colors line-clamp-2">
                    {rel.title}
                  </h4>
                  <div className="text-[11px] text-gray-400">{rel.court}</div>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    );
  }

  // ==========================================
  // [LIST MODE]: 카드형 게시판 목록 (PostList)
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
            <span className="text-[#151C2C] font-semibold">신용회복 경험담</span>
          </nav>
          <span className="text-gray-400 hidden sm:inline">총 {filteredCases.length}건의 실제 사례</span>
        </div>
      </div>

      {/* Header Banner (SectionTitle / Hero) */}
      <section className="bg-[#151C2C] text-white py-10 sm:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#D7AE66] text-[#151C2C] text-xs font-black">
                  실제 인가 사례
                </span>
                <span className="text-xs font-mono text-slate-400 bg-[#252f44] px-2 py-0.5 rounded border border-slate-700">
                  게시판: /story
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                신용회복 경험담
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                법원 인가결정을 받은 실제 의뢰인들의 채무 감면 전후 비교와 진솔한 후기입니다. 내 상황과 유사한 사례를 확인해보세요.
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
                <span>비밀상담 신청</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Board Container (그누보드 /story list.skin.php) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        {/* Board Controls: Filter Tabs & Search Bar */}
        <div className="bg-white border border-[#E5E7EB] rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs">
          {/* Categories */}
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

          {/* Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="사례 키워드, 직업, 법원 검색"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#D7AE66] focus:bg-white"
            />
          </div>
        </div>

        {/* Story Cases Card Grid (Card Layout) */}
        {filteredCases.length === 0 ? (
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-12 text-center text-gray-400 space-y-2">
            <p className="text-sm">검색 조건에 맞는 경험담이 없습니다.</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCases.map((story) => (
              <article
                key={story.id}
                onClick={() => {
                  onSelectStory(story);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white border border-[#E5E7EB] rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-md hover:border-[#D7AE66] transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold px-2.5 py-0.5 bg-gray-100 text-gray-800 rounded">
                      {story.category}
                    </span>
                    <span className="text-xs font-extrabold px-2.5 py-0.5 bg-[#EBFBEE] text-[#2B8A3E] rounded-md flex items-center gap-1">
                      <TrendingDown className="w-3.5 h-3.5" />
                      <span>{story.reliefRate}% 탕감</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-[#151C2C] group-hover:text-[#D7AE66] transition-colors line-clamp-2 mb-2 leading-snug">
                    {story.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed mb-3">
                    {story.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {story.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="text-[11px] bg-slate-50 text-slate-600 px-2 py-0.5 rounded border border-slate-200"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Debt Stats Card */}
                  <div className="grid grid-cols-2 gap-2 bg-[#F7F8FA] p-3 rounded-xl text-xs mb-3 border border-gray-100">
                    <div>
                      <div className="text-[10px] text-gray-400">기존 채무총액</div>
                      <div className="text-xs sm:text-sm font-semibold text-gray-600 line-through">
                        {(story.originalDebt * 10000).toLocaleString()}원
                      </div>
                    </div>
                    <div className="border-l border-gray-200 pl-2.5">
                      <div className="text-[10px] text-[#2B8A3E] font-bold">최종 탕감액</div>
                      <div className="text-xs sm:text-sm font-black text-[#2B8A3E]">
                        {(story.relievedDebt * 10000).toLocaleString()}원
                      </div>
                    </div>
                  </div>

                  {/* Footer Meta */}
                  <div className="flex items-center justify-between text-[11px] text-gray-400 pt-2 border-t border-gray-100">
                    <div className="flex items-center gap-2 truncate">
                      <span>{story.court}</span>
                      <span>·</span>
                      <span>{story.date}</span>
                    </div>
                    <span className="text-xs font-bold text-[#151C2C] group-hover:text-[#D7AE66] flex items-center shrink-0">
                      상세보기 →
                    </span>
                  </div>
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
              <span>신용회복위원회 협약외 채무도 개인회생으로 탕감 가능</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#151C2C]">
              내 채무도 이 사례들처럼 탕감받을 수 있을지 궁금하신가요?
            </h3>
            <p className="text-xs text-gray-500">
              비밀이 보장되는 1:1 비공개 상담으로 실시간 자격 요건과 예상 변제금을 확인하세요.
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
