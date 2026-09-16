import React, { useState } from 'react';
import { PageId } from '../../types';
import { Calculator, ArrowRight, Sparkles, CheckCircle2, HelpCircle } from 'lucide-react';

interface HomeDiagnosisCtaSectionProps {
  onNavigate: (page: PageId) => void;
}

export const HomeDiagnosisCtaSection: React.FC<HomeDiagnosisCtaSectionProps> = ({ onNavigate }) => {
  const [selectedIncome, setSelectedIncome] = useState('급여소득 (직장인)');
  const [selectedDebt, setSelectedDebt] = useState('3천만 ~ 5천만 원');
  const [selectedAsset, setSelectedAsset] = useState('채무가 훨씬 많음');

  return (
    <section id="home-diagnosis-cta-section" className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      <div className="bg-[#151C2C] text-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#2A3750] shadow-2xl relative overflow-hidden">
        {/* Background Subtle Gradient */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#D7AE66]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Top Pill Badge */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1E293B] border border-[#D7AE66]/40 text-[#D7AE66] text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>1분 간편 자가진단</span>
            </div>
            {/* Title (User requirement) */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-3 mb-2 tracking-tight">
              내 상황도 개인회생이 가능할까요?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
              신용조회 기록 걱정 없이, 간단한 3가지 문항으로 회생 신청 가능성과 예상 탕감률을 미리 확인해보세요.
            </p>
          </div>

          {/* Interactive Quick Quiz Preview Box */}
          <div className="bg-[#1C2538] border border-[#2D3C5A] rounded-2xl p-5 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Question 1: 소득 형태 */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-[#D7AE66] text-[#151C2C] text-[10px] flex items-center justify-center font-bold">
                    1
                  </span>
                  <span>현재 소득 형태</span>
                </label>
                <select
                  value={selectedIncome}
                  onChange={(e) => setSelectedIncome(e.target.value)}
                  className="w-full bg-[#151C2C] border border-slate-700 text-white rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-[#D7AE66]"
                >
                  <option value="급여소득 (직장인)">급여소득 (직장인/4대보험)</option>
                  <option value="사업자 (자영업)">사업소득 (개인사업자/프리랜서)</option>
                  <option value="일용직 / 아르바이트">일용직 / 아르바이트 / 파트타임</option>
                  <option value="현재 소득 없음">현재 소득 없음 (파산 검토 가능)</option>
                </select>
              </div>

              {/* Question 2: 총 채무액 */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-[#D7AE66] text-[#151C2C] text-[10px] flex items-center justify-center font-bold">
                    2
                  </span>
                  <span>대략적인 총 채무액</span>
                </label>
                <select
                  value={selectedDebt}
                  onChange={(e) => setSelectedDebt(e.target.value)}
                  className="w-full bg-[#151C2C] border border-slate-700 text-white rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-[#D7AE66]"
                >
                  <option value="1천만 ~ 3천만 원">1,000만 ~ 3,000만 원</option>
                  <option value="3천만 ~ 5천만 원">3,000만 ~ 5,000만 원</option>
                  <option value="5천만 ~ 1억 원">5,000만 ~ 1억 원</option>
                  <option value="1억 ~ 3억 원">1억 ~ 3억 원</option>
                  <option value="3억 원 이상">3억 원 이상 (담보/무담보)</option>
                </select>
              </div>

              {/* Question 3: 재산 대비 채무 */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-[#D7AE66] text-[#151C2C] text-[10px] flex items-center justify-center font-bold">
                    3
                  </span>
                  <span>재산보다 채무가 더 많은가요?</span>
                </label>
                <select
                  value={selectedAsset}
                  onChange={(e) => setSelectedAsset(e.target.value)}
                  className="w-full bg-[#151C2C] border border-slate-700 text-white rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-[#D7AE66]"
                >
                  <option value="채무가 훨씬 많음">예, 재산보다 빚이 더 많습니다</option>
                  <option value="비슷하거나 불확실함">부동산/차량 등이 있어 불확실함</option>
                  <option value="재산이 더 많음">재산이 더 많음 (상환 검토 필요)</option>
                </select>
              </div>
            </div>

            {/* Quick Summary Note */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-slate-800 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#D7AE66] shrink-0" />
                <span>선택하신 조건: <strong>{selectedIncome}</strong> · 채무 <strong>{selectedDebt}</strong></span>
              </div>

              {/* User Requirement CTA: "간단하게 확인하기" */}
              <button
                id="btn-diagnosis-check"
                onClick={() => onNavigate('diagnosis')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#D7AE66] to-[#C59C53] hover:from-[#e4c281] hover:to-[#D7AE66] text-[#151C2C] font-black text-sm shadow-md transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 cursor-pointer"
              >
                <Calculator className="w-4 h-4" />
                <span>간단하게 확인하기</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
