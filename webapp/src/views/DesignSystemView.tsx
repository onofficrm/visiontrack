import React, { useState } from 'react';
import {
  Palette,
  Type,
  Layers,
  MousePointer,
  Square,
  FormInput,
  CheckSquare,
  Tag,
  Compass,
  ArrowRight,
  Maximize2,
  Minimize2,
  Copy,
  Check,
  Smartphone,
  Tablet,
  Laptop,
  CheckCircle2,
  HelpCircle,
  FileText,
  Lock,
  PhoneCall,
  Calculator,
  ChevronDown,
} from 'lucide-react';
import { PageId } from '../types';

interface DesignSystemViewProps {
  onNavigate?: (page: PageId) => void;
}

export const DesignSystemView: React.FC<DesignSystemViewProps> = ({ onNavigate }) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const gnuBoardComponents = [
    { name: 'Header', desc: '상단 68px 고정 GNB + 안심 공지 띠 + 브랜드 로고 + 빠른 전화' },
    { name: 'MegaMenu', desc: '개인회생·개인파산 5대 서브메뉴(개요, 자격, 절차, 서류, 상담) 호버 드롭다운' },
    { name: 'MobileMenu', desc: '모바일 햄버거 터치 시 열리는 슬라이드 아코디언 드로어 내비게이션' },
    { name: 'Hero', desc: '공감형 헤드카피 + 신뢰 뱃지 + 상담신청/자가진단 듀얼 CTA + 1:1 사진' },
    { name: 'SectionTitle', desc: '섹션 주제, 소제목(H2, H3), 맥락 설명 카피의 정돈된 헤더' },
    { name: 'InfoCard', desc: '원금 최대 90% 탕감, 독촉 금지명령 등 핵심 혜택을 전달하는 2열/3열 카드' },
    { name: 'StepCard', desc: '1:1 비밀상담부터 인가결정까지 7단계 회생 진행 로드맵 카드' },
    { name: 'Timeline', desc: '접수 → 금지명령(3~7일) → 개시 → 채권자집회 → 인가 절차의 시간축 흐름' },
    { name: 'FAQAccordion', desc: '비밀보장, 수임료 분납, 불이익 여부 등 핵심 질문 원터치 개폐 아코디언' },
    { name: 'CTASection', desc: '페이지 하단 및 중간에 자연스럽게 배치되는 비공개 상담 유도 밴드' },
    { name: 'ConsultForm', desc: '기본정보 3초 입력 → 상황선택 → 동의 3단계 스텝형 안심 상담 신청 폼' },
    { name: 'DiagnosisStep', desc: '1문 1답 인터랙티브 자가진단 질문 카드 및 진행 프로그레스 바' },
    { name: 'DiagnosisResult', desc: '답변 요약 + 개인회생 적합 가이드 + 상담신청 자동연동 버튼' },
    { name: 'StoryCard', desc: '/story 게시판 전용: 탕감률(%), 채무 전후 비교, 법원, 태그형 카드' },
    { name: 'NewsCard', desc: '/news 게시판 전용: 카테고리, 제목, 요약 2줄, 날짜, 조회수 정보 카드' },
    { name: 'PostList', desc: '게시판 목록 공통: 카테고리 필터 탭 + 키워드 검색바 + 페이지네이션' },
    { name: 'PostDetail', desc: '게시글 상세 공통: 제목/메타 → 본문 → 관련 콘텐츠 → 상담 CTA 연계 구조' },
    { name: 'Breadcrumb', desc: '홈 > 게시판명 > 상세 카테고리로 이어지는 사용자 위치 탐색기' },
    { name: 'Footer', desc: '3대 안심 배너(비밀보장, 환불보장, 무이자분납) + 법률사무소 정보 + 면책 공지' },
    { name: 'MobileBottomCTA', desc: '화면 가림을 최소화하며 [전화상담] [1분 자가진단] [상담신청] 3-Way 하단 고정바' },
  ];

  const uxChecklist = [
    {
      q: '1. 첫 화면에서 사이트의 목적을 바로 이해할 수 있는가?',
      a: '예. 메인 히어로 카피("혼자 고민하지 마세요. 개인회생, 지금부터 차근차근 알아보세요.")와 "100% 비공개 안심상담" 뱃지를 통해 개인회생 법률상담 사이트임을 3초 안에 직관적으로 파악할 수 있습니다.',
    },
    {
      q: '2. 개인회생 정보를 쉽게 찾을 수 있는가?',
      a: '예. GNB의 "개인회생" 메뉴에 마우스를 올리면 개요, 자격요건, 5단계 절차, 준비서류로 즉시 이동할 수 있는 메가메뉴가 제공됩니다.',
    },
    {
      q: '3. 자가진단으로 이동하기 쉬운가?',
      a: '예. 헤더 내비게이션, 히어로 버튼, 본문 중간 배너, 모바일 하단 고정바의 [1분 자가진단] 버튼을 통해 어느 화면에서든 1클릭으로 진입 가능합니다.',
    },
    {
      q: '4. 상담 신청 버튼을 쉽게 찾을 수 있는가?',
      a: '예. 최상단 안심바, 헤더 우측 골드 버튼, 메인 중간 배너, 모든 게시글 하단, 모바일 하단 고정바에 일관된 톤앤매너로 배치되어 있습니다.',
    },
    {
      q: '5. 상담 신청 과정이 복잡하지 않은가?',
      a: '예. 1단계(성함/가명 + 연락처)만 입력하면 최소 접수가 가능하며, 부담스러운 금융정보는 2단계 선택형 카드로 분리하여 심리적 이탈을 원천 차단했습니다.',
    },
    {
      q: '6. 모바일에서 상담 전환이 편리한가?',
      a: '예. 모바일 하단 58px 슬림 고정바에 [전화상담 0503-6982-1000], [1분 자가진단], [상담 신청하기]가 항상 엄지손가락 영역에 유지되어 전환이 즉시 발생합니다.',
    },
    {
      q: '7. Story와 News 게시판을 쉽게 탐색할 수 있는가?',
      a: '예. GNB 및 모바일 메뉴에 /story(신용회복 경험담), /news(개인회생 뉴스·정보)가 독립 배치되어 있으며, 카테고리 탭과 검색바로 신속하게 필터링할 수 있습니다.',
    },
    {
      q: '8. 모든 정보 페이지에서 다음 행동이 명확한가?',
      a: '예. /story와 /news의 모든 상세 페이지는 [본문 → 관련 콘텐츠 → 상담 CTA] 구조로 끝나 사용자가 정보 습득 후 자연스럽게 자가진단이나 상담 신청으로 이어집니다.',
    },
    {
      q: '9. CTA가 과도하게 광고처럼 보이지 않는가?',
      a: '예. 번쩍이는 애니메이션이나 자극적인 문구("빚 100% 탕감 보장")를 철저히 배제하고, 차분한 네이비와 골드 톤으로 "비밀보장 1:1 상담" 원칙을 준수했습니다.',
    },
    {
      q: '10. 법률/금융 서비스 사이트로서 신뢰감을 주는가?',
      a: '예. 변호사법 제26조 비밀유지 명시, 서울회생법원 실제 사건번호/인가결정 정본 데이터, 기각 시 100% 환불보장제, 수임료 무이자 분납 제도를 공식 명시하여 극도의 신뢰감을 형성합니다.',
    },
  ];

  return (
    <div className="space-y-16 pb-24 max-w-7xl mx-auto px-4 sm:px-6 pt-6">
      {/* Header Overview */}
      <div className="bg-[#151C2C] text-white rounded-3xl p-8 sm:p-12 border border-[#252f44]">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#202B40] border border-[#D7AE66]/50 text-[#D7AE66] text-xs font-bold">
            <span>FINAL PRODUCTION SPECIFICATION</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            개인회생 전문 사이트 UI Design System & 그누보드 5 규격
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            과도한 채무로 고통받는 의뢰인에게 <strong>안정감, 신뢰, 전문성</strong>을 전달하고, <strong>정보 검색 → 신뢰 형성 → 자가진단 → 상담 신청</strong>으로 자연스럽게 이어지도록 설계된 실제 구현용 최종 디자인 시스템입니다.
          </p>
        </div>
      </div>

      {/* 1. GnuBoard 5 Component Architecture (그누보드 컴포넌트 규격) */}
      <section className="bg-white border border-[#E5E7EB] rounded-3xl p-8 space-y-6 shadow-xs">
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <div>
            <span className="text-xs font-bold text-[#D7AE66]">01. ARCHITECTURE</span>
            <h2 className="text-2xl font-black text-[#151C2C]">
              그누보드 5 재사용 컴포넌트 20종 명세
            </h2>
          </div>
          <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-mono">
            Modular & Reusable
          </span>
        </div>

        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          Cursor에서 실제 구현 시 중복 코드를 방지하고 유지보수를 용이하게 하기 위해 아래 20개 컴포넌트 단위로 분리 설계되었습니다.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {gnuBoardComponents.map((comp, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-gray-50 border border-gray-200/80 hover:border-[#D7AE66] transition-all space-y-1.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#D7AE66] font-mono">
                  #{String(idx + 1).padStart(2, '0')}
                </span>
                <span className="text-[10px] bg-white text-gray-500 px-1.5 py-0.5 rounded border border-gray-200 font-mono">
                  PHP/HTML
                </span>
              </div>
              <h3 className="text-sm font-extrabold text-[#151C2C]">{comp.name}</h3>
              <p className="text-xs text-gray-600 leading-snug">{comp.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. 게시판 2개 구조 상세 명세 (/story, /news) */}
      <section className="bg-white border border-[#E5E7EB] rounded-3xl p-8 space-y-6 shadow-xs">
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <div>
            <span className="text-xs font-bold text-[#D7AE66]">02. BOARD SYSTEM</span>
            <h2 className="text-2xl font-black text-[#151C2C]">
              정확히 2개의 게시판 구조 (/story, /news)
            </h2>
          </div>
          <span className="text-xs bg-[#EBFBEE] text-[#2B8A3E] font-bold px-3 py-1 rounded-full">
            GnuBoard 5 Board Skin
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 게시판 1: /story */}
          <div className="border border-gray-200 rounded-2xl p-6 bg-[#F7F8FA] space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-bold">
                URL: /story
              </span>
              <span className="text-xs text-gray-500 font-semibold">카드형 Layout</span>
            </div>
            <h3 className="text-xl font-extrabold text-[#151C2C]">
              신용회복 경험담
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              법원 인가결정을 받은 실제 의뢰인의 감면 사례와 진솔한 후기를 카드 형태로 제공하여 신뢰감을 극대화합니다.
            </p>

            <div className="space-y-2 text-xs text-gray-700 bg-white p-4 rounded-xl border border-gray-200">
              <div className="font-bold text-[#151C2C] pb-1 border-b border-gray-100">
                게시글 목록 (PostList / StoryCard)
              </div>
              <ul className="space-y-1 list-disc pl-4 text-gray-600">
                <li>카테고리 뱃지 (직장인, 개인사업자, 주부, 청년/프리랜서)</li>
                <li>제목 (2줄 제한, 말줄임 적용)</li>
                <li>짧은 요약 (의뢰인 상황 및 감면 계기)</li>
                <li>채무 감면 전후 비교 박스 (원금 vs 최종탕감액, 탕감률 %)</li>
                <li>작성일, 관할 법원, 상세보기 링크</li>
              </ul>
            </div>

            <div className="space-y-2 text-xs text-gray-700 bg-white p-4 rounded-xl border border-gray-200">
              <div className="font-bold text-[#151C2C] pb-1 border-b border-gray-100">
                게시글 상세 페이지 (PostDetail)
              </div>
              <ul className="space-y-1 list-disc pl-4 text-gray-600">
                <li>Breadcrumb: 홈 &gt; 신용회복 경험담 &gt; 카테고리</li>
                <li>제목, 신청인 정보, 작성일, 조회수, 공유하기</li>
                <li>인가결정 정본 기준 채무 조정 스탯 카드</li>
                <li>본문 (상세 진행 경과 및 법원 절차)</li>
                <li>의뢰인 자필 감사 후기 발췌 박스</li>
                <li>관련 콘텐츠 (다른 의뢰인 경험담 3개)</li>
                <li><strong>상담 CTA</strong> (1분 자가진단 + 비공개 상담신청 듀얼 버튼)</li>
              </ul>
            </div>

            {onNavigate && (
              <button
                onClick={() => onNavigate('story')}
                className="w-full py-2.5 bg-[#151C2C] text-white hover:bg-[#202c44] font-bold text-xs rounded-xl transition-colors cursor-pointer text-center"
              >
                /story 게시판 화면 확인하기 →
              </button>
            )}
          </div>

          {/* 게시판 2: /news */}
          <div className="border border-gray-200 rounded-2xl p-6 bg-[#F7F8FA] space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200 font-bold">
                URL: /news
              </span>
              <span className="text-xs text-gray-500 font-semibold">정보성 칼럼 Layout</span>
            </div>
            <h3 className="text-xl font-extrabold text-[#151C2C]">
              개인회생 뉴스 · 정보
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              정보성 사이트처럼 깔끔하고 가독성 높은 디자인으로 법원 준칙 개정, 독촉 대처, 압류 해제 등의 법률 지식을 전달합니다.
            </p>

            <div className="space-y-2 text-xs text-gray-700 bg-white p-4 rounded-xl border border-gray-200">
              <div className="font-bold text-[#151C2C] pb-1 border-b border-gray-100">
                게시글 목록 (PostList / NewsCard)
              </div>
              <ul className="space-y-1 list-disc pl-4 text-gray-600">
                <li>카테고리 (최신개정, 독촉대처, 법률상식, 자주묻는질문)</li>
                <li>제목 (볼드 폰트, 호버 시 골드 포인트)</li>
                <li>요약 (2줄 라인 클램프로 정돈된 설명)</li>
                <li>작성자, 날짜, 조회수 메타 정보</li>
                <li>전문 보기 화살표 액션</li>
              </ul>
            </div>

            <div className="space-y-2 text-xs text-gray-700 bg-white p-4 rounded-xl border border-gray-200">
              <div className="font-bold text-[#151C2C] pb-1 border-b border-gray-100">
                게시글 상세 페이지 (PostDetail)
              </div>
              <ul className="space-y-1 list-disc pl-4 text-gray-600">
                <li>Breadcrumb: 홈 &gt; 개인회생 뉴스 · 정보 &gt; 카테고리</li>
                <li>제목, 카테고리 뱃지, 작성일, 조회수</li>
                <li>요약 리드 박스 (Summary)</li>
                <li><strong>본문</strong> (가독성 높은 타이포그래피)</li>
                <li><strong>관련 정보</strong> (함께 읽으면 도움되는 법률 칼럼 3개)</li>
                <li><strong>상담 CTA</strong> ("나에게도 적용 가능할까?" 1분 진단 & 비공개 상담신청)</li>
              </ul>
            </div>

            {onNavigate && (
              <button
                onClick={() => onNavigate('news')}
                className="w-full py-2.5 bg-[#151C2C] text-white hover:bg-[#202c44] font-bold text-xs rounded-xl transition-colors cursor-pointer text-center"
              >
                /news 게시판 화면 확인하기 →
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 3. 반응형 기준 및 Mobile 최적화 규격 */}
      <section className="bg-white border border-[#E5E7EB] rounded-3xl p-8 space-y-6 shadow-xs">
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <div>
            <span className="text-xs font-bold text-[#D7AE66]">03. RESPONSIVE SYSTEM</span>
            <h2 className="text-2xl font-black text-[#151C2C]">반응형 규격 및 Mobile 최적화</h2>
          </div>
          <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-mono">
            Desktop / Tablet / Mobile
          </span>
        </div>

        {/* 3대 브레이크포인트 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-2xl p-5 bg-gray-50 space-y-3">
            <div className="flex items-center gap-2 text-[#151C2C]">
              <Laptop className="w-5 h-5 text-[#D7AE66]" />
              <h3 className="font-extrabold text-base">Desktop</h3>
            </div>
            <div className="text-xs font-mono text-[#D7AE66] font-bold">1440px (최대 너비 1280px 컨테이너)</div>
            <ul className="text-xs text-gray-600 space-y-1.5 list-disc pl-4">
              <li>Header 68px 높이 고정, 메가메뉴 호버 활성화</li>
              <li>그리드: 카드 3열 배열, 넉넉한 여백(gap-6)</li>
              <li>폰트: Display 36~44px, H1 28~32px, 본문 16px</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-2xl p-5 bg-gray-50 space-y-3">
            <div className="flex items-center gap-2 text-[#151C2C]">
              <Tablet className="w-5 h-5 text-[#D7AE66]" />
              <h3 className="font-extrabold text-base">Tablet</h3>
            </div>
            <div className="text-xs font-mono text-[#D7AE66] font-bold">768px ~ 1199px</div>
            <ul className="text-xs text-gray-600 space-y-1.5 list-disc pl-4">
              <li>태블릿 전용 2열 카드 그리드 자동 재배열</li>
              <li>헤더 GNB 간격 축소 및 터치 최적화</li>
              <li>폼 입력 영역 패딩 자동 조정 (p-6)</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-2xl p-5 bg-gray-50 space-y-3">
            <div className="flex items-center gap-2 text-[#151C2C]">
              <Smartphone className="w-5 h-5 text-[#D7AE66]" />
              <h3 className="font-extrabold text-base">Mobile (핵심 집중)</h3>
            </div>
            <div className="text-xs font-mono text-[#D7AE66] font-bold">375px ~ 767px</div>
            <ul className="text-xs text-gray-600 space-y-1.5 list-disc pl-4">
              <li><strong>글자 크기</strong>: 본문 14~15px, 제목 20~24px 가독성 유지</li>
              <li><strong>버튼 크기</strong>: 최소 터치 높이 46px 이상 보장</li>
              <li><strong>카드 배열</strong>: 1열 수직 스택, 화면 폭 100% 활용</li>
              <li><strong>여백</strong>: 내부 패딩 px-4 sm:px-6으로 여백 낭비 차단</li>
              <li><strong>Bottom CTA</strong>: [전화상담 0503-6982-1000] [자가진단] [상담신청] 3-Way 고정</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. 최종 UX 10대 검사 자가진단 (Final UX Audit) */}
      <section className="bg-white border border-[#E5E7EB] rounded-3xl p-8 space-y-6 shadow-xs">
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <div>
            <span className="text-xs font-bold text-[#D7AE66]">04. UX AUDIT</span>
            <h2 className="text-2xl font-black text-[#151C2C]">
              최종 UX 검사: 10대 핵심 기준 검토 결과
            </h2>
          </div>
          <span className="text-xs bg-[#EBFBEE] text-[#2B8A3E] font-bold px-3 py-1 rounded-full flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>10/10 ALL PASSED</span>
          </span>
        </div>

        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          '디자인만 예쁜 사이트'가 아니라, 심리적 불안을 겪는 의뢰인에게 실질적인 해결책을 제시하고 <strong>신뢰를 바탕으로 상담 전환을 견인하는지</strong> 10가지 기준으로 엄격하게 자체 검증을 마쳤습니다.
        </p>

        <div className="space-y-3">
          {uxChecklist.map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-1.5"
            >
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#151C2C] text-[#D7AE66] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  ✓
                </span>
                <div className="space-y-1 flex-1">
                  <h3 className="text-sm font-bold text-[#151C2C]">{item.q}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. COLOR & TYPOGRAPHY SYSTEM COMPACT REFERENCE */}
      <section className="bg-white border border-[#E5E7EB] rounded-3xl p-8 space-y-6 shadow-xs">
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <div>
            <span className="text-xs font-bold text-[#D7AE66]">05. FOUNDATION SPEC</span>
            <h2 className="text-2xl font-black text-[#151C2C]">색상 및 타이포그래피 규격</h2>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {[
            { name: 'Main Navy', hex: '#151C2C', desc: '주 색상, 헤더' },
            { name: 'Point Gold', hex: '#D7AE66', desc: '핵심 CTA, 강조' },
            { name: 'Background', hex: '#F7F8FA', desc: '캔버스 배경' },
            { name: 'White', hex: '#FFFFFF', desc: '카드, 폼, 모달' },
            { name: 'Text Dark', hex: '#222222', desc: '본문 1순위 헤드라인' },
            { name: 'Sub Text', hex: '#666666', desc: '설명문, 부가 캡션' },
            { name: 'Border', hex: '#E5E7EB', desc: '카드 테두리 선' },
          ].map((c) => (
            <div key={c.hex} className="border border-gray-200 rounded-xl overflow-hidden shadow-2xs">
              <div className="h-16 flex items-end p-2" style={{ backgroundColor: c.hex }}>
                <span className="text-[11px] font-mono font-bold text-white mix-blend-difference">
                  {c.hex}
                </span>
              </div>
              <div className="p-2.5 bg-white space-y-0.5">
                <div className="text-xs font-bold text-gray-900">{c.name}</div>
                <div className="text-[10px] text-gray-500 leading-tight">{c.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
