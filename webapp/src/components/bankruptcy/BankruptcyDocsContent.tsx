import React, { useState } from 'react';
import {
  FileText,
  CheckCircle2,
  Building,
  HelpCircle,
  ShieldCheck,
  AlertCircle,
} from 'lucide-react';

interface DocItem {
  id: string;
  category: '기본 인적서류' | '소득불능 소명' | '재산변동 소명' | '채무 내역';
  title: string;
  issuer: string;
  note: string;
  onlineAvailable: boolean;
}

export const BankruptcyDocsContent: React.FC = () => {
  const docList: DocItem[] = [
    // 1. 기본 인적서류
    {
      id: 'bdoc-1',
      category: '기본 인적서류',
      title: '주민등록등본 (주민번호 뒷자리 공개)',
      issuer: '정부24 / 주민센터',
      note: '주민등록번호 13자리 및 세대원 전체 표시 필수',
      onlineAvailable: true,
    },
    {
      id: 'bdoc-2',
      category: '기본 인적서류',
      title: '주민등록초본 (과거 전체 주소변동 내역 포함)',
      issuer: '정부24 / 주민센터',
      note: '출생부터 현재까지의 전체 주소 이력 확인',
      onlineAvailable: true,
    },
    {
      id: 'bdoc-3',
      category: '기본 인적서류',
      title: '가족관계증명서 & 혼인관계증명서 (상세)',
      issuer: '전자가족관계등록시스템 / 주민센터',
      note: '일반이 아닌 [상세증명서]로 발급',
      onlineAvailable: true,
    },

    // 2. 소득불능 소명 (파산 특화)
    {
      id: 'bdoc-4',
      category: '소득불능 소명',
      title: '의사 진단서 및 소견서 (해당자)',
      issuer: '종합병원 / 치료 병의원',
      note: '중증 질환, 수술 이력, 근로 곤란 사유가 기재된 진단서',
      onlineAvailable: false,
    },
    {
      id: 'bdoc-5',
      category: '소득불능 소명',
      title: '수급자증명서 / 장애인증명서 (해당자)',
      issuer: '정부24 / 주민센터',
      note: '국민기초생활보장법상 생계·의료급여 수급권 증빙',
      onlineAvailable: true,
    },
    {
      id: 'bdoc-6',
      category: '소득불능 소명',
      title: '사실증명 (신고사실없음 / 무소득사실증명원)',
      issuer: '국세청 홈택스 / 세무서',
      note: '최근 수년간 종합소득세 신고 실적이 없음을 증명',
      onlineAvailable: true,
    },
    {
      id: 'bdoc-7',
      category: '소득불능 소명',
      title: '건강보험 자격득실확인서 & 납부확인서',
      issuer: '국민건강보험공단',
      note: '지역가입자 또는 피부양자 등재 확인용',
      onlineAvailable: true,
    },

    // 3. 과거 재산변동 소명 (파산 특화)
    {
      id: 'bdoc-8',
      category: '재산변동 소명',
      title: '지방세 세목별 과세증명서 (전국 단위, 최근 5~10년)',
      issuer: '주민센터 / 정부24',
      note: '과거에 소유했다가 처분한 부동산, 자동차 내역 전수 확인',
      onlineAvailable: true,
    },
    {
      id: 'bdoc-9',
      category: '재산변동 소명',
      title: '거주지 임대차계약서 사본 및 무상거주사실확인서',
      issuer: '본인 보관 / 집주인(가족)',
      note: '친척 또는 지인 집에 무상 거주 시 확인서 작성 필요',
      onlineAvailable: false,
    },
    {
      id: 'bdoc-10',
      category: '재산변동 소명',
      title: '과거 사업자 폐업사실증명원 (사업자 출신)',
      issuer: '국세청 홈택스 / 세무서',
      note: '사업체 폐업 일자 및 사업 부채 누적 배경 소명',
      onlineAvailable: true,
    },
    {
      id: 'bdoc-11',
      category: '재산변동 소명',
      title: '전 금융기관 계좌정보통합관리내역 (계좌정보원 어카운트인포)',
      issuer: '페이인포 (계좌정보통합관리서비스)',
      note: '사용 중인 통장 및 휴면계좌 잔액 전수 확인',
      onlineAvailable: true,
    },

    // 4. 채무 내역
    {
      id: 'bdoc-12',
      category: '채무 내역',
      title: '각 금융기관 파산신청용 부채증명서',
      issuer: '은행, 카드사, 대부업체, 신용보증기금 등',
      note: '원금 및 연체이자, 대출 발생일 명시 (대리인 무료 대행 가능)',
      onlineAvailable: false,
    },
    {
      id: 'bdoc-13',
      category: '채무 내역',
      title: '한국신용정보원 크레딧포유 본인신용정보열람표',
      issuer: '한국신용정보원',
      note: '누락 채권 방지를 위한 전수 금융 거래 조회',
      onlineAvailable: true,
    },
  ];

  const [checkedIds, setCheckedIds] = useState<string[]>(['bdoc-1', 'bdoc-2']);
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');

  const toggleCheck = (id: string) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const categories = ['전체', '기본 인적서류', '소득불능 소명', '재산변동 소명', '채무 내역'];

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
              <span>파산 체크리스트</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#151C2C] tracking-tight">
              개인파산 및 면책 필수 준비서류 체크리스트
            </h2>
            <p className="text-xs text-gray-600">
              파산은 회생보다 과거 재산 처분과 근로무능력 소명이 중요합니다. 항목별로 체크해보세요.
            </p>
          </div>

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

        <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
          <div
            className="bg-gradient-to-r from-[#D7AE66] to-[#C59C53] h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

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

      {/* 2. Interactive Checklist Items */}
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
                  onChange={() => {}}
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
                        <span>온라인 무료 즉시 발급 가능</span>
                      </span>
                    ) : (
                      <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded flex items-center gap-1">
                        <HelpCircle className="w-3 h-3" />
                        <span>병원/기관 방문 또는 대리인 대행 지원</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. 파산 서류 발급 지원 Highlight Box */}
      <section className="bg-[#151C2C] text-white rounded-2xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-6 h-6 text-[#D7AE66]" />
          <h3 className="text-lg font-bold text-white">
            과거 서류 찾기가 막막하신가요? 진주개인파산이 전 과정을 도와드립니다
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          오래전 폐업한 사업장 서류나 흩어져 있는 금융기관 부채내역을 혼자서 일일이 발급받는 것은 큰 스트레스입니다. <strong>진주개인파산의 행정 전담팀이 위임장을 통해 금융기관 부채증명서 및 정부 서류를 원스톱으로 무료 대행 발급</strong>해 드립니다.
        </p>
      </section>
    </div>
  );
};
