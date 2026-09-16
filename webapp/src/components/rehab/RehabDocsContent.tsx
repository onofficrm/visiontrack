import React, { useState } from 'react';
import {
  FileText,
  CheckCircle2,
  Download,
  Building,
  HelpCircle,
  ExternalLink,
  ShieldCheck,
  Printer,
} from 'lucide-react';

interface DocItem {
  id: string;
  category: '기본 인적사항' | '소득 증빙' | '재산 소명' | '채무 내역';
  title: string;
  issuer: string;
  note: string;
  onlineAvailable: boolean;
}

export const RehabDocsContent: React.FC = () => {
  const docList: DocItem[] = [
    // 1. 기본 인적사항
    {
      id: 'doc-1',
      category: '기본 인적사항',
      title: '주민등록등본 (주민번호 뒷자리 공개, 과거 주소 변동 포함)',
      issuer: '정부24 / 주민센터',
      note: '가구원 전원의 인적사항이 표기되어야 함 (최근 1개월 내 발급)',
      onlineAvailable: true,
    },
    {
      id: 'doc-2',
      category: '기본 인적사항',
      title: '주민등록초본 (과거 전체 주소변동 및 개명/말소 이력 포함)',
      issuer: '정부24 / 주민센터',
      note: '관할 법원 판단 및 송달지 확인용',
      onlineAvailable: true,
    },
    {
      id: 'doc-3',
      category: '기본 인적사항',
      title: '가족관계증명서 (상세증명서)',
      issuer: '대한민국 전자가족관계등록시스템 / 주민센터',
      note: '일반증명서가 아닌 반드시 [상세]로 발급',
      onlineAvailable: true,
    },
    {
      id: 'doc-4',
      category: '기본 인적사항',
      title: '혼인관계증명서 (상세증명서, 기혼 또는 이혼 시)',
      issuer: '전자가족관계등록시스템 / 주민센터',
      note: '배우자 유무 및 이혼에 따른 재산분할 확인용',
      onlineAvailable: true,
    },

    // 2. 소득 증빙
    {
      id: 'doc-5',
      category: '소득 증빙',
      title: '근로소득원천징수영수증 (직전 연도)',
      issuer: '국세청 홈택스 / 직장 인사과',
      note: '상여금 및 연간 총 수령액 확인',
      onlineAvailable: true,
    },
    {
      id: 'doc-6',
      category: '소득 증빙',
      title: '급여통장 입금내역서 (최근 1년 치)',
      issuer: '해당 은행 인터넷뱅킹 / 영업점',
      note: '실수령액 및 정기적 급여 입금 흐름 확인',
      onlineAvailable: true,
    },
    {
      id: 'doc-7',
      category: '소득 증빙',
      title: '건강보험 자격득실확인서 및 보험료 납부확인서',
      issuer: '국민건강보험공단 / 정부24',
      note: '직장 재직 및 소득 추정치 교차 검증',
      onlineAvailable: true,
    },
    {
      id: 'doc-8',
      category: '소득 증빙',
      title: '소득금액증명원 (종합소득세 또는 근로소득)',
      issuer: '국세청 홈택스 / 세무서',
      note: '국세청 공식 소득 신고 내역',
      onlineAvailable: true,
    },

    // 3. 재산 소명
    {
      id: 'doc-9',
      category: '재산 소명',
      title: '지방세 세목별 과세증명서 (전국 자치단체 대상, 최근 5년)',
      issuer: '정부24 / 주민센터',
      note: '전국 단위 부동산, 자동차 취득·보유 내역 확인',
      onlineAvailable: true,
    },
    {
      id: 'doc-10',
      category: '재산 소명',
      title: '부동산 등기부등본 및 임대차계약서 사본',
      issuer: '대법원 인터넷등기소 / 자택 보관',
      note: '주택 임차보증금 및 최우선변제 소액보증금 공제 적용',
      onlineAvailable: true,
    },
    {
      id: 'doc-11',
      category: '재산 소명',
      title: '자동차등록원부 (갑부/을부) 및 보험개발원 차량시세표',
      issuer: '자동차민원 대국민포털 / 정부24',
      note: '보유 차량의 잔존 가치 및 담보 설정 여부',
      onlineAvailable: true,
    },
    {
      id: 'doc-12',
      category: '재산 소명',
      title: '보험계약조회서 및 예상 해약환급금확인서',
      issuer: '내보험다보여 (신용정보원) / 각 보험사',
      note: '압류금지 재산(보장성 보험 150만 원) 초과분 확인',
      onlineAvailable: true,
    },

    // 4. 채무 내역
    {
      id: 'doc-13',
      category: '채무 내역',
      title: '금융기관별 부채증명서 (원리금 및 채무 원인 명시)',
      issuer: '각 채권 금융기관 (은행, 카드사, 저축은행 등)',
      note: '개인회생 신청용 부채증명서로 발급 필수 (대리인 무료 대행 가능)',
      onlineAvailable: false,
    },
    {
      id: 'doc-14',
      category: '채무 내역',
      title: '한국신용정보원 본인신용정보열람표 (크레딧포유)',
      issuer: '한국신용정보원 크레딧포유 사이트',
      note: '본인도 미처 잊고 있던 누락 채권 전수 조사',
      onlineAvailable: true,
    },
  ];

  // Checklist checked items
  const [checkedIds, setCheckedIds] = useState<string[]>(['doc-1', 'doc-2']);
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');

  const toggleCheck = (id: string) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const categories = ['전체', '기본 인적사항', '소득 증빙', '재산 소명', '채무 내역'];

  const filteredDocs =
    selectedCategory === '전체'
      ? docList
      : docList.filter((d) => d.category === selectedCategory);

  const progressPercent = Math.round((checkedIds.length / docList.length) * 100);

  return (
    <div className="space-y-10 animate-fadeIn">
      {/* 1. Header & Progress Bar */}
      <section className="bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-[#D7AE66]/40 text-[#151C2C] text-xs font-bold">
              <FileText className="w-3.5 h-3.5 text-[#D7AE66]" />
              <span>체크리스트</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#151C2C] tracking-tight">
              개인회생 필수 준비서류 체크리스트
            </h2>
            <p className="text-xs text-gray-600">
              법원에 제출해야 할 서류를 하나씩 체크하며 준비 현황을 점검해보세요.
            </p>
          </div>

          {/* Progress Badge */}
          <div className="bg-[#151C2C] text-white p-4 rounded-xl text-center shrink-0 min-w-[160px]">
            <span className="text-[10px] text-gray-400 block font-semibold">준비 완료율</span>
            <span className="text-2xl font-black text-[#D7AE66]">
              {progressPercent}%
            </span>
            <span className="text-[11px] text-gray-300 block">
              {checkedIds.length}개 / 총 {docList.length}개
            </span>
          </div>
        </div>

        {/* Progress Bar Visual */}
        <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
          <div
            className="bg-gradient-to-r from-[#D7AE66] to-[#C59C53] h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pt-2 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#151C2C] text-[#D7AE66]'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 2. Interactive Checklist Table */}
      <section className="bg-white border border-[#E5E7EB] rounded-2xl p-4 sm:p-6 shadow-xs">
        <div className="space-y-3">
          {filteredDocs.map((doc) => {
            const isChecked = checkedIds.includes(doc.id);
            return (
              <div
                key={doc.id}
                onClick={() => toggleCheck(doc.id)}
                className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                  isChecked
                    ? 'bg-amber-50/30 border-[#D7AE66]/60'
                    : 'bg-white border-gray-200 hover:border-gray-300'
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => {}} // Handled by container click
                  className="mt-1 w-4 h-4 text-[#D7AE66] rounded border-gray-300 focus:ring-[#D7AE66]"
                />

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <span className={`text-sm font-bold ${isChecked ? 'text-gray-900 line-through opacity-80' : 'text-[#151C2C]'}`}>
                      {doc.title}
                    </span>
                    <span className="text-[10px] font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded self-start sm:self-auto shrink-0">
                      {doc.issuer}
                    </span>
                  </div>

                  <p className="text-xs text-gray-500 leading-relaxed">
                    {doc.note}
                  </p>

                  <div className="flex items-center gap-2 mt-2">
                    {doc.onlineAvailable ? (
                      <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>인터넷 온라인 즉시 무료발급 가능</span>
                      </span>
                    ) : (
                      <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded flex items-center gap-1">
                        <HelpCircle className="w-3 h-3" />
                        <span>대리인 무료 대행 발급 지원</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. 대리인 원스톱 서류 대행 안내 Highlight Box */}
      <section className="bg-[#151C2C] text-white rounded-2xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-6 h-6 text-[#D7AE66]" />
          <h3 className="text-lg font-bold text-white">
            서류 발급이 복잡하고 번거로우신가요? 진주개인파산이 대신 발급해 드립니다
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          바쁜 직장 생활이나 사업체 운영으로 동사무소나 은행을 방문하기 어려운 분들을 위해, <strong>인감증명서 및 위임장 1통으로 금융기관 부채증명서와 관공서 행정 서류를 일체 대행 발급</strong>해 드립니다. 의뢰인은 일상생활에만 집중하시면 됩니다.
        </p>
      </section>
    </div>
  );
};
