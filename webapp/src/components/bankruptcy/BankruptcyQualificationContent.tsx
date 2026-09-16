import React, { useState } from 'react';
import {
  CheckCircle2,
  AlertTriangle,
  Scale,
  UserX,
  HeartPulse,
  Home,
  ShieldAlert,
  HelpCircle,
} from 'lucide-react';

export const BankruptcyQualificationContent: React.FC = () => {
  const [bCheck1, setBCheck1] = useState(true);
  const [bCheck2, setBCheck2] = useState(true);
  const [bCheck3, setBCheck3] = useState(true);
  const [bCheck4, setBCheck4] = useState(true);

  const isEligible = bCheck1 && bCheck2 && bCheck3 && bCheck4;

  return (
    <div className="space-y-10 animate-fadeIn">
      {/* 1. 개인파산 신청 자격 4대 핵심 요건 자가점검표 */}
      <section className="bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="max-w-2xl mb-6 space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-[#D7AE66]/40 text-[#151C2C] text-xs font-bold">
            <UserX className="w-3.5 h-3.5 text-[#D7AE66]" />
            <span>파산 적격 자가점검</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#151C2C] tracking-tight">
            개인파산 및 면책 신청 자격 요건
          </h2>
          <p className="text-xs text-gray-600">
            개인파산은 소득 활동을 통해 빚을 갚을 수 없는 ‘객관적 지급불능’ 상태가 입증되어야 합니다.
          </p>
        </div>

        <div className="space-y-3">
          {/* Check 1 */}
          <label
            className={`flex items-start gap-3.5 p-4 rounded-xl border transition-all cursor-pointer ${
              bCheck1 ? 'bg-amber-50/40 border-[#D7AE66]' : 'bg-gray-50 border-gray-200'
            }`}
          >
            <input
              type="checkbox"
              checked={bCheck1}
              onChange={(e) => setBCheck1(e.target.checked)}
              className="mt-1 w-4 h-4 text-[#D7AE66] rounded border-gray-300 focus:ring-[#D7AE66]"
            />
            <div className="flex-1">
              <div className="text-sm font-bold text-[#151C2C] flex items-center justify-between">
                <span>1. 소득이 전혀 없거나 최저생계비에 현저히 미달합니까?</span>
                <span className="text-xs font-bold text-amber-700 bg-amber-100/70 px-2 py-0.5 rounded">지급불능</span>
              </div>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                고령(통상 만 60세 이상), 중증 질환 또는 장애, 미성년 자녀 다수 양육 등으로 지속적인 경제활동이 불가능하거나, 벌어들이는 소득이 1인 가구 최저생계비(약 140만 원) 이하인 경우 해당합니다.
              </p>
            </div>
          </label>

          {/* Check 2 */}
          <label
            className={`flex items-start gap-3.5 p-4 rounded-xl border transition-all cursor-pointer ${
              bCheck2 ? 'bg-amber-50/40 border-[#D7AE66]' : 'bg-gray-50 border-gray-200'
            }`}
          >
            <input
              type="checkbox"
              checked={bCheck2}
              onChange={(e) => setBCheck2(e.target.checked)}
              className="mt-1 w-4 h-4 text-[#D7AE66] rounded border-gray-300 focus:ring-[#D7AE66]"
            />
            <div className="flex-1">
              <div className="text-sm font-bold text-[#151C2C] flex items-center justify-between">
                <span>2. 본인 명의 재산(환가 가치)이 거의 없습니까?</span>
                <span className="text-xs font-bold text-amber-700 bg-amber-100/70 px-2 py-0.5 rounded">청산가치</span>
              </div>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                부동산, 차량, 예금 등 본인 명의 재산이 법정 면제재산(임차보증금 최우선변제액 등) 이하 수준이거나, 채무액에 비해 턱없이 부족하여 빚을 갚을 수 없어야 합니다.
              </p>
            </div>
          </label>

          {/* Check 3 */}
          <label
            className={`flex items-start gap-3.5 p-4 rounded-xl border transition-all cursor-pointer ${
              bCheck3 ? 'bg-amber-50/40 border-[#D7AE66]' : 'bg-gray-50 border-gray-200'
            }`}
          >
            <input
              type="checkbox"
              checked={bCheck3}
              onChange={(e) => setBCheck3(e.target.checked)}
              className="mt-1 w-4 h-4 text-[#D7AE66] rounded border-gray-300 focus:ring-[#D7AE66]"
            />
            <div className="flex-1">
              <div className="text-sm font-bold text-[#151C2C] flex items-center justify-between">
                <span>3. 채무 발생 원인에 심각한 도박이나 사치 행위가 없습니까?</span>
                <span className="text-xs font-bold text-amber-700 bg-amber-100/70 px-2 py-0.5 rounded">면책불허가 검토</span>
              </div>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                생활비, 병원비, 사업 실패, 보증 채무 등으로 인한 빚은 100% 면책 대상입니다. 다만 도박·사치성 채무 비중이 높은 경우 법원의 면책 불허가 대상이 될 수 있어 재량면책 법리 방어가 필요합니다.
              </p>
            </div>
          </label>

          {/* Check 4 */}
          <label
            className={`flex items-start gap-3.5 p-4 rounded-xl border transition-all cursor-pointer ${
              bCheck4 ? 'bg-amber-50/40 border-[#D7AE66]' : 'bg-gray-50 border-gray-200'
            }`}
          >
            <input
              type="checkbox"
              checked={bCheck4}
              onChange={(e) => setBCheck4(e.target.checked)}
              className="mt-1 w-4 h-4 text-[#D7AE66] rounded border-gray-300 focus:ring-[#D7AE66]"
            />
            <div className="flex-1">
              <div className="text-sm font-bold text-[#151C2C] flex items-center justify-between">
                <span>4. 과거 7년 이내에 파산 면책을 받은 사실이 없습니까?</span>
                <span className="text-xs font-bold text-amber-700 bg-amber-100/70 px-2 py-0.5 rounded">재신청제한</span>
              </div>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                과거 파산 면책을 받은 경우 7년, 개인회생 면책을 받은 경우 5년이 경과해야 개인파산 면책을 재신청할 수 있습니다.
              </p>
            </div>
          </label>
        </div>

        {/* Self-check Result Banner */}
        <div className={`mt-6 p-4 rounded-xl border flex items-center justify-between gap-4 ${
          isEligible
            ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
            : 'bg-amber-50 border-amber-200 text-amber-900'
        }`}>
          <div className="flex items-center gap-3">
            {isEligible ? (
              <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
            ) : (
              <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" />
            )}
            <div>
              <h4 className="text-sm font-bold">
                {isEligible
                  ? '자가진단 결과: 개인파산 및 면책 신청 적격 가능성이 높습니다.'
                  : '일부 요건 검토가 필요합니다. 개인회생이 더 유리할 수 있습니다.'}
              </h4>
              <p className="text-xs text-gray-600">
                {isEligible
                  ? '소득 불능 소명 자료(진단서, 수급자증명 등)를 철저히 갖추면 전액 면책이 가능합니다.'
                  : '만약 약간의 소득 활동이 가능하다면 월 소득 기준에 맞춘 개인회생으로 전환하는 것이 안전합니다.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 파산 시 보호받는 '면제재산' 기준표 */}
      <section className="bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="mb-4 space-y-1">
          <h2 className="text-lg sm:text-xl font-bold text-[#151C2C]">
            파산하더라도 전액 지킬 수 있는 법정 면제재산
          </h2>
          <p className="text-xs text-gray-500">
            파산을 신청한다고 해서 살고 있는 전월세 보증금이나 당장 먹고 살 생계비까지 빼앗기지 않습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="bg-[#F7F8FA] border border-gray-200 rounded-xl p-5 space-y-2">
            <div className="flex items-center gap-2">
              <Home className="w-5 h-5 text-[#D7AE66]" />
              <h3 className="font-bold text-sm text-[#151C2C]">주택임차보증금 (소액임차보증금)</h3>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              주택임대차보호법상 최우선변제 소액보증금에 해당하는 금액은 환가 대상에서 법적으로 완전히 제외됩니다.
            </p>
            <div className="text-[11px] font-mono bg-white p-2.5 rounded border border-gray-200 text-gray-700">
              • 서울특별시: 최대 5,500만 원 보장<br />
              • 수도권 과밀억제권역/세종/용인/화성: 최대 4,800만 원<br />
              • 광역시/안산/광주/파주 등: 최대 2,800만 원
            </div>
          </div>

          <div className="bg-[#F7F8FA] border border-gray-200 rounded-xl p-5 space-y-2">
            <div className="flex items-center gap-2">
              <HeartPulse className="w-5 h-5 text-[#D7AE66]" />
              <h3 className="font-bold text-sm text-[#151C2C]">기본 생계비 (6개월간 1,110만 원)</h3>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              채무자 및 부양가족의 기본적인 의식주 생활 유지를 위해 6개월간의 생계비에 해당하는 금액(최대 1,110만 원)은 압류 및 환가가 법적으로 금지됩니다.
            </p>
            <div className="text-[11px] font-mono bg-white p-2.5 rounded border border-gray-200 text-gray-700">
              • 압류금지 예금: 185만 원 이하의 통장 잔액<br />
              • 보장성 보험 해약환급금: 150만 원 이하 보호<br />
              • 필수 주방용품, 가재도구 일체 압류 금지
            </div>
          </div>
        </div>
      </section>

      {/* 3. 면책불허가 사유 심층 분석 Box */}
      <section className="bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-rose-600" />
          <h2 className="text-lg sm:text-xl font-bold text-[#151C2C]">
            파산 신청 전 꼭 짚어야 할 '면책불허가 사유' 4가지
          </h2>
        </div>
        <p className="text-xs text-gray-600 leading-relaxed">
          법 제564조 제1항에 규정된 면책불허가 사유에 해당하는 경우 원칙적으로 면책이 불허될 수 있으나, 전담 변호사의 <strong>'재량면책(법원의 정상 참작)'</strong> 법리 구성으로 방어가 가능합니다.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <div className="p-3.5 bg-rose-50/50 rounded-xl border border-rose-200/80 text-xs space-y-1">
            <span className="font-bold text-rose-900 block">① 재산 은닉 및 헐값 처분 행위</span>
            <p className="text-gray-600 text-[11px]">
              파산 직전 배우자나 자녀에게 부동산/차량 명의를 이전하거나 예금을 인출하여 숨긴 행위.
            </p>
          </div>
          <div className="p-3.5 bg-rose-50/50 rounded-xl border border-rose-200/80 text-xs space-y-1">
            <span className="font-bold text-rose-900 block">② 과다한 낭비 및 도박 행위</span>
            <p className="text-gray-600 text-[11px]">
              채무 발생 원인의 상당 부분이 불법도박, 경마, 과도한 사치품 소비로 인해 누적된 경우.
            </p>
          </div>
          <div className="p-3.5 bg-rose-50/50 rounded-xl border border-rose-200/80 text-xs space-y-1">
            <span className="font-bold text-rose-900 block">③ 허위의 채권자목록 제출</span>
            <p className="text-gray-600 text-[11px]">
              일부 채권자를 고의로 누락하거나, 친인척 채무를 허위로 조작하여 우선 변제한 경우.
            </p>
          </div>
          <div className="p-3.5 bg-rose-50/50 rounded-xl border border-rose-200/80 text-xs space-y-1">
            <span className="font-bold text-rose-900 block">④ 사기적 대출 (파산 직전 과다대출)</span>
            <p className="text-gray-600 text-[11px]">
              파산 신청 직전 변제할 의사나 능력 없이 집중적으로 신규 대출을 받아 소비한 행위.
            </p>
          </div>
        </div>
      </section>

      {/* 4. 실제 파산 적격 시나리오 비교 */}
      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-lg sm:text-xl font-bold text-[#151C2C]">
            실제 개인파산 적격 의뢰인 시나리오
          </h2>
          <p className="text-xs text-gray-500">
            나와 유사한 상황인지 확인해보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 shadow-xs space-y-3">
            <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700">
              만 65세 이상 고령자
            </span>
            <h3 className="font-bold text-sm text-[#151C2C]">
              기초연금 수급, 과거 사업 빚 8,000만 원
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              만 68세 어르신으로 기초연금 외 소득이 전무한 상태. 고령으로 인한 근로 능력 상실이 명백히 인정되어 <strong>파산 신청 7개월 만에 100% 전액 면책</strong> 결정.
            </p>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 shadow-xs space-y-3">
            <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700">
              중증 질환 · 장애
            </span>
            <h3 className="font-bold text-sm text-[#151C2C]">
              암 수술 후 투병 중, 병원비 채무 5,500만 원
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              장기간 암 투병으로 직장을 잃고 카드론 등으로 병원비를 충당했던 50대 의뢰인. 종합병원 진단서와 후유장해 소명으로 <strong>근로 무능력 인정받아 100% 면책</strong>.
            </p>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 shadow-xs space-y-3">
            <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-700">
              사업 폐업 · 보증채무
            </span>
            <h3 className="font-bold text-sm text-[#151C2C]">
              폐업 후 무소득, 연대보증 빚 2억 4천만 원
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              경기 불황으로 사업장을 정리한 후 재산이 전혀 없고 채무만 남은 40대 의뢰인. 파산관재인의 과거 거래내역 조사를 완벽 소명하여 <strong>전액 탕감 성공</strong>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
