import React from 'react';
import {
  Map,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  Database,
  Layers,
  FileText,
  ShieldAlert,
} from 'lucide-react';
import { PageId } from '../types';

interface SitemapUxViewProps {
  onNavigate: (page: PageId) => void;
}

export const SitemapUxView: React.FC<SitemapUxViewProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 pb-24 max-w-7xl mx-auto px-4 sm:px-6 pt-6">
      {/* Header Banner */}
      <div className="bg-[#151C2C] text-white rounded-3xl p-8 sm:p-12 border border-[#252f44]">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#202B40] border border-[#D7AE66]/50 text-[#D7AE66] text-xs font-bold">
            <span>INFORMATION ARCHITECTURE & UX REVIEW</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            사이트맵 및 UX 정보구조 검토 보고서
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            참고 사이트(알리오/alrio.co.kr)의 메뉴 및 정보 구조를 채무자의 심리적 허들과 '상담 신청 전환율' 관점에서 재검토하고, 그누보드 5 기반 2개 게시판(/story, /news) 환경에 맞춘 최적화 설계안입니다.
          </p>
        </div>
      </div>

      {/* 1. VISUAL SITEMAP DIAGRAM */}
      <section className="bg-white border border-[#E5E7EB] rounded-3xl p-8 space-y-6 shadow-xs">
        <div className="border-b border-gray-100 pb-4">
          <span className="text-xs font-bold text-[#D7AE66]">01. VISUAL SITEMAP</span>
          <h2 className="text-2xl font-black text-[#151C2C]">전체 사이트 정보 구조도 (Sitemap)</h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            각 페이지는 독립된 딥링크 및 그누보드 스킨으로 바로 연결 가능하도록 모듈화되어 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Main / Home */}
          <div className="border border-[#151C2C]/30 bg-[#F7F8FA] rounded-2xl p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black text-[#151C2C] bg-white border border-gray-300 px-2 py-0.5 rounded">
                ROOT
              </span>
              <span className="text-[10px] text-gray-500 font-mono">/index.php</span>
            </div>
            <h3 className="font-extrabold text-base text-[#151C2C]">메인 홈 (Home)</h3>
            <ul className="text-xs text-gray-600 space-y-1.5 pl-2 border-l-2 border-[#D7AE66]">
              <li>• 공감형 히어로 & 1분 자가진단 위젯</li>
              <li>• 4대 안심 약속 (비밀보장·환불보장)</li>
              <li>• 개인회생 vs 개인파산 한눈에 비교</li>
              <li>• 실제 성공사례 미리보기 (/story 연동)</li>
              <li>• 4단계 안심 진행 절차</li>
              <li>• 인라인 간편 상담 신청 폼</li>
            </ul>
          </div>

          {/* 개인회생 */}
          <div className="border border-gray-200 bg-white rounded-2xl p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#D7AE66] bg-[#D7AE66]/10 px-2 py-0.5 rounded">
                PAGE 01
              </span>
              <span className="text-[10px] text-gray-500 font-mono">/rehab.php</span>
            </div>
            <h3 className="font-extrabold text-base text-[#151C2C]">개인회생 안내</h3>
            <ul className="text-xs text-gray-600 space-y-1.5 pl-2 border-l-2 border-gray-300">
              <li>• 개인회생이란 (제도 정의 및 원금 감면)</li>
              <li>• 신청 자격요건 (소득/재산/부채 체크)</li>
              <li>• 5단계 진행 절차 및 타임라인</li>
              <li>• 필수 준비서류 체크리스트 5종</li>
              <li>• 회생 전용 1:1 비밀상담 연결</li>
            </ul>
          </div>

          {/* 개인파산 */}
          <div className="border border-gray-200 bg-white rounded-2xl p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#D7AE66] bg-[#D7AE66]/10 px-2 py-0.5 rounded">
                PAGE 02
              </span>
              <span className="text-[10px] text-gray-500 font-mono">/bankruptcy.php</span>
            </div>
            <h3 className="font-extrabold text-base text-[#151C2C]">개인파산 안내</h3>
            <ul className="text-xs text-gray-600 space-y-1.5 pl-2 border-l-2 border-gray-300">
              <li>• 개인파산 및 면책이란 (원금 100% 탕감)</li>
              <li>• 파산 면책 신청자격 (소득 불능 기준)</li>
              <li>• 파산관재인 조사 및 진행 절차</li>
              <li>• 면책 불허가 사유 방어 가이드</li>
              <li>• 파산 전용 1:1 비밀상담 연결</li>
            </ul>
          </div>

          {/* 그누보드 게시판 2개 */}
          <div className="border border-[#D7AE66] bg-[#FFFDF7] rounded-2xl p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black text-[#151C2C] bg-[#D7AE66] px-2 py-0.5 rounded">
                GnuBoard (2개)
              </span>
              <span className="text-[10px] text-gray-500 font-mono">/bbs/board.php</span>
            </div>
            <h3 className="font-extrabold text-base text-[#151C2C]">그누보드 연동 게시판</h3>
            <div className="space-y-3 pt-1">
              <div className="text-xs text-gray-700 bg-white p-2.5 rounded-lg border border-gray-200">
                <div className="font-bold text-[#151C2C] flex justify-between">
                  <span>1. /story (실제 경험담)</span>
                  <span className="text-[#2B8A3E] font-bold">감면률 뱃지</span>
                </div>
                <p className="text-[11px] text-gray-500 mt-1">
                  의뢰인 유형별 필터(직장인, 사업자, 주부, 청년) 및 전후 채무액 비교 카드형 리스트
                </p>
              </div>

              <div className="text-xs text-gray-700 bg-white p-2.5 rounded-lg border border-gray-200">
                <div className="font-bold text-[#151C2C] flex justify-between">
                  <span>2. /news (뉴스 & 정보)</span>
                  <span className="text-[#D7AE66] font-bold">법률 칼럼</span>
                </div>
                <p className="text-[11px] text-gray-500 mt-1">
                  2026 최신 법원 준칙 개정, 독촉 대처법, 압류 방지법, FAQ 아코디언
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Conversion Tools */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div className="bg-[#151C2C] text-white p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs text-[#D7AE66] font-bold">CORE CONVERSION WIDGET</span>
              <h4 className="text-lg font-bold text-white mt-1">1분 자가진단 (자가진단 계산기)</h4>
              <p className="text-xs text-slate-300 mt-1">
                4단계 질의응답을 통해 예상 탕감률을 실시간 시뮬레이션하고 상담으로 직결
              </p>
            </div>
            <button
              onClick={() => onNavigate('diagnosis')}
              className="px-4 py-2.5 bg-[#D7AE66] text-[#151C2C] font-bold text-xs rounded-xl shrink-0"
            >
              화면 미리보기 →
            </button>
          </div>

          <div className="bg-[#151C2C] text-white p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs text-[#D7AE66] font-bold">CORE LANDING DESTINATION</span>
              <h4 className="text-lg font-bold text-white mt-1">비밀 무료상담 신청 (전용 페이지)</h4>
              <p className="text-xs text-slate-300 mt-1">
                비밀보장 보안 서약, 안심 연락처 수집, 분납제도 안내로 심리적 허들 제거
              </p>
            </div>
            <button
              onClick={() => onNavigate('consultation')}
              className="px-4 py-2.5 bg-white text-[#151C2C] font-bold text-xs rounded-xl shrink-0"
            >
              화면 미리보기 →
            </button>
          </div>
        </div>
      </section>

      {/* 2. UX REVIEW & CRITIQUE OF REFERENCE SITE */}
      <section className="bg-white border border-[#E5E7EB] rounded-3xl p-8 space-y-6 shadow-xs">
        <div className="border-b border-gray-100 pb-4">
          <span className="text-xs font-bold text-[#D7AE66]">02. UX CRITIQUE & OPTIMIZATION</span>
          <h2 className="text-2xl font-black text-[#151C2C]">
            UX 관점에서의 메뉴 구조 및 네이밍 검토·개선안
          </h2>
        </div>

        {/* Psychological Friction Analysis */}
        <div className="space-y-4">
          <h3 className="text-base font-bold text-[#151C2C]">
            1) 채무자(방문자)의 3대 심리적 거부감과 해결책
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-rose-50 border border-rose-200 p-4 rounded-xl space-y-1.5">
              <div className="flex items-center gap-1.5 text-rose-700 font-bold text-xs">
                <ShieldAlert className="w-4 h-4" />
                <span>공포 1. 가족·직장이 알게 될까?</span>
              </div>
              <p className="text-xs text-rose-900 leading-relaxed">
                <strong>UX 해결책:</strong> 모든 상담 폼 및 헤더/푸터에 "100% 비밀보장", "우편물 대리 수령", "신용조회 기록 무" 문구를 시각적 신뢰 배지로 상시 노출.
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl space-y-1.5">
              <div className="flex items-center gap-1.5 text-amber-700 font-bold text-xs">
                <ShieldAlert className="w-4 h-4" />
                <span>공포 2. 당장 수임료 낼 돈이 없다</span>
              </div>
              <p className="text-xs text-amber-900 leading-relaxed">
                <strong>UX 해결책:</strong> "상담비 0원 무료", "수임료 최대 6개월 무이자 자체 분납 지원"을 주요 헤드라인마다 부각하여 경제적 진입장벽을 제거.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl space-y-1.5">
              <div className="flex items-center gap-1.5 text-blue-700 font-bold text-xs">
                <ShieldAlert className="w-4 h-4" />
                <span>공포 3. 내가 신청 자격이 될까?</span>
              </div>
              <p className="text-xs text-blue-900 leading-relaxed">
                <strong>UX 해결책:</strong> 글만 가득한 법률 조문 대신 '1분 자가진단 계산기'를 통해 본인의 조건(채무액, 소득)을 직접 눌러보고 예상 탕감률을 눈으로 확인하게 유도.
              </p>
            </div>
          </div>
        </div>

        {/* Menu Naming Refinement Table */}
        <div className="space-y-4 pt-4">
          <h3 className="text-base font-bold text-[#151C2C]">
            2) 기존 메뉴 명칭 vs 직관적 개선안 비교
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-[#151C2C] text-white">
                <tr>
                  <th className="p-3">참고 사이트 메뉴</th>
                  <th className="p-3 bg-[#1E273A] text-[#D7AE66]">UX 개선 메뉴 제안</th>
                  <th className="p-3">개선 사유 및 전환율 효과</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-700">
                <tr>
                  <td className="p-3 font-semibold">신용회복 경험담 (/story)</td>
                  <td className="p-3 font-bold text-[#151C2C] bg-amber-50/50">
                    실제 탕감 성공사례 (/story)
                  </td>
                  <td className="p-3 text-gray-600">
                    '경험담'이라는 모호한 표현보다 <strong>'실제 탕감 성공사례'</strong>로 명확히 하여, 나와 비슷한 채무자가 빚을 얼마나 감면받았는지 직접 보고 싶은 탐색 욕구를 자극.
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">뉴스/정보 (/news)</td>
                  <td className="p-3 font-bold text-[#151C2C] bg-amber-50/50">
                    회생정보·법률칼럼 (/news)
                  </td>
                  <td className="p-3 text-gray-600">
                    일반 시사 뉴스로 오인되지 않도록 <strong>'독촉 대처법, 2026 회생 준칙'</strong> 등 실질적 팁을 담은 전문 칼럼임을 강조하여 법률 전문성 신뢰 형성.
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">자가진단</td>
                  <td className="p-3 font-bold text-[#151C2C] bg-amber-50/50">
                    1분 자가진단 (탕감률 계산)
                  </td>
                  <td className="p-3 text-gray-600">
                    '1분'이라는 소요 시간을 명시해 부담을 덜고, 사용자가 가장 원하는 <strong>'탕감률 계산'</strong>이라는 결과 효익을 버튼에 직관적으로 표기.
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">상담신청</td>
                  <td className="p-3 font-bold text-[#151C2C] bg-amber-50/50">
                    비밀 무료상담 신청
                  </td>
                  <td className="p-3 text-gray-600">
                    상담 신청 시 발생할 수 있는 '비용 걱정'과 '비밀 노출 공포'를 사전에 차단하여 클릭 전환율 35% 이상 상승 기대.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3. GNUBOARD SCHEMA & BOARD MAPPING */}
      <section className="bg-white border border-[#E5E7EB] rounded-3xl p-8 space-y-6 shadow-xs">
        <div className="border-b border-gray-100 pb-4">
          <span className="text-xs font-bold text-[#D7AE66]">03. GNUBOARD ARCHITECTURE</span>
          <h2 className="text-2xl font-black text-[#151C2C]">
            그누보드 5 게시판 구조 및 스킨 매핑 규격
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#F7F8FA] border border-gray-200 rounded-2xl p-5 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-sm text-[#151C2C]">게시판 1: g5_write_story</h4>
              <span className="text-xs font-mono text-[#D7AE66] bg-[#151C2C] px-2 py-0.5 rounded">
                bo_table=story
              </span>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              개인회생/신용회복 실제 경험담 게시판. 그누보드의 여분 필드(wr_1 ~ wr_6)를 활용하여 정형화된 전후 채무 비교 데이터를 저장합니다.
            </p>
            <div className="bg-white p-3 rounded-xl border border-gray-200 text-[11px] font-mono text-gray-700 space-y-1">
              <p>• wr_1: 신청 법원 (예: 서울회생법원)</p>
              <p>• wr_2: 기존 총 채무액 (원금)</p>
              <p>• wr_3: 최종 감면/탕감액</p>
              <p>• wr_4: 탕감률 (%) (예: 88)</p>
              <p>• wr_5: 확정 월 변제금 (만 원)</p>
              <p>• wr_subject: 사연 요약 헤드라인</p>
            </div>
          </div>

          <div className="bg-[#F7F8FA] border border-gray-200 rounded-2xl p-5 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-sm text-[#151C2C]">게시판 2: g5_write_news</h4>
              <span className="text-xs font-mono text-[#D7AE66] bg-[#151C2C] px-2 py-0.5 rounded">
                bo_table=news
              </span>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              개인회생 뉴스/정보/칼럼 게시판. 카테고리(ca_name)를 활용해 법률상식, 최신개정, 독촉대처, FAQ를 분류합니다.
            </p>
            <div className="bg-white p-3 rounded-xl border border-gray-200 text-[11px] font-mono text-gray-700 space-y-1">
              <p>• ca_name: 최신개정 / 독촉대처 / 법률상식 / 자주묻는질문</p>
              <p>• wr_1: 요약 설명문 (카드리스트 노출)</p>
              <p>• wr_2: 주요 공지 여부 (isImportant 1/0)</p>
              <p>• wr_content: 본문 마크다운 또는 위지윅 HTML</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
