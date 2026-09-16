import React from 'react';
import {
  ShieldCheck,
  Percent,
  Ban,
  Briefcase,
  HelpCircle,
  CheckCircle2,
  AlertTriangle,
  Scale,
  Building,
} from 'lucide-react';

export const RehabOverviewContent: React.FC = () => {
  return (
    <div className="space-y-10 animate-fadeIn">
      {/* 1. 개인회생 핵심 정의 Highlight Box */}
      <section className="bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-[#D7AE66]/40 text-[#151C2C] text-xs font-bold">
            <Scale className="w-3.5 h-3.5 text-[#D7AE66]" />
            <span>채무자 회생 및 파산에 관한 법률 제4편</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#151C2C] tracking-tight">
            개인회생 제도란 무엇인가요?
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
            개인회생제도는 총 채무액이 무담보채무의 경우 <strong>10억 원</strong>, 담보부채무의 경우 <strong>15억 원</strong> 이하인 개인채무자로서, 장래 계속적으로 또는 반복하여 수입을 얻을 가능성이 있는 자가 <strong>3년간(원칙) 일정한 금액을 변제</strong>하면 나머지 채무의 면제를 받을 수 있는 법원 주관 국가 채무조정제도입니다.
          </p>
        </div>

        {/* 4대 법적 보호 효과 카드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <div className="bg-[#F7F8FA] border border-gray-200/80 rounded-xl p-5 space-y-2">
            <div className="w-10 h-10 rounded-lg bg-[#151C2C] text-[#D7AE66] flex items-center justify-center">
              <Percent className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-[#151C2C]">이자 100% 면제</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              인가결정 이후 발생하는 모든 장래 이자는 물론, 연체이자 전액이 탕감됩니다.
            </p>
          </div>

          <div className="bg-[#F7F8FA] border border-gray-200/80 rounded-xl p-5 space-y-2">
            <div className="w-10 h-10 rounded-lg bg-[#151C2C] text-[#D7AE66] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-[#151C2C]">원금 최대 90% 탕감</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              소득과 부양가족 생계비를 공제한 가용소득만 변제하며, 잔여 원금은 면책됩니다.
            </p>
          </div>

          <div className="bg-[#F7F8FA] border border-gray-200/80 rounded-xl p-5 space-y-2">
            <div className="w-10 h-10 rounded-lg bg-[#151C2C] text-[#D7AE66] flex items-center justify-center">
              <Ban className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-[#151C2C]">독촉·압류 즉시 중단</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              법원 접수 후 3~7일 내 금지명령이 발령되어 빚 독촉 전화와 급여 압류가 차단됩니다.
            </p>
          </div>

          <div className="bg-[#F7F8FA] border border-gray-200/80 rounded-xl p-5 space-y-2">
            <div className="w-10 h-10 rounded-lg bg-[#151C2C] text-[#D7AE66] flex items-center justify-center">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-[#151C2C]">재산 및 직장 유지</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              공무원, 교사, 의사, 대기업 등 법적 자격이 유지되며 부동산·차량을 보유할 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 2. 채무조정제도 3자 비교표 (신복위 워크아웃 vs 개인회생 vs 개인파산) */}
      <section className="bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="mb-6 space-y-1.5">
          <h2 className="text-lg sm:text-xl font-bold text-[#151C2C]">
            신용회복위원회 워크아웃 vs 법원 개인회생 비교
          </h2>
          <p className="text-xs text-gray-500">
            사적 채무조정(신복위)과 공적 채무조정(법원 개인회생)의 차이를 명확히 확인하세요.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b-2 border-gray-200 bg-[#F7F8FA]">
                <th className="py-3 px-4 font-bold text-gray-700 w-1/4">구분</th>
                <th className="py-3 px-4 font-bold text-gray-500 w-1/4">신용회복위원회 (워크아웃)</th>
                <th className="py-3 px-4 font-bold text-[#151C2C] bg-amber-50/70 border-x border-[#D7AE66]/30 w-1/2">
                  법원 개인회생 (강력 추천)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="py-3 px-4 font-semibold text-gray-800 bg-gray-50/50">관할 기관</td>
                <td className="py-3 px-4 text-gray-600">신용회복위원회 (금융기관 협약)</td>
                <td className="py-3 px-4 font-bold text-[#151C2C] bg-amber-50/30 border-x border-[#D7AE66]/20">
                  대한민국 관할 지방법원 (공적 구제)
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-gray-800 bg-gray-50/50">적용 가능한 채무</td>
                <td className="py-3 px-4 text-gray-600">협약 가입 금융기관 채무만 가능 (사채, 개인돈 제외)</td>
                <td className="py-3 px-4 font-bold text-[#151C2C] bg-amber-50/30 border-x border-[#D7AE66]/20">
                  모든 채무 (은행, 카드, 대부업, 사채, 개인돈, 통신비, 코인·주식 손실 등)
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-gray-800 bg-gray-50/50">원금 감면율</td>
                <td className="py-3 px-4 text-gray-600">상각 채무에 한해 최대 20~70% (원금감면 어려움)</td>
                <td className="py-3 px-4 font-bold text-emerald-700 bg-amber-50/30 border-x border-[#D7AE66]/20">
                  원금 최대 90% 법적 면책 + 이자 100% 전액 면제
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-gray-800 bg-gray-50/50">채권자 동의 필요성</td>
                <td className="py-3 px-4 text-gray-600">채권액 기준 과반수 이상(50%) 동의 필수 (부동의 시 무산)</td>
                <td className="py-3 px-4 font-bold text-[#151C2C] bg-amber-50/30 border-x border-[#D7AE66]/20">
                  채권자 동의 불필요 (법원의 강제 인가 결정)
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-gray-800 bg-gray-50/50">변제 기간</td>
                <td className="py-3 px-4 text-gray-600">최대 8년~10년 장기 상환</td>
                <td className="py-3 px-4 font-bold text-[#151C2C] bg-amber-50/30 border-x border-[#D7AE66]/20">
                  기본 3년 (36개월 단축 변제)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. 개인회생 탕감 원리: 가용소득 변제원칙 Step Box */}
      <section className="bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
        <h2 className="text-lg sm:text-xl font-bold text-[#151C2C]">
          개인회생 변제금 산정 방식 (가용소득 변제원칙)
        </h2>
        <p className="text-xs text-gray-600 leading-relaxed">
          법원은 무조건 채무액을 기준으로 변제금을 정하지 않습니다. 채무자의 실질 월 소득에서 <strong>법정 최저생계비(기준 중위소득의 60%)</strong>를 차감하고 남은 ‘여유 자금(가용소득)’만 36개월 동안 납부하도록 명합니다.
        </p>

        <div className="bg-[#151C2C] text-white rounded-xl p-5 space-y-3 font-mono text-xs">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div>
              <span className="text-gray-400 block text-[10px]">월 평균 실수령액</span>
              <span className="text-base font-bold text-white">월 소득 250만 원</span>
            </div>
            <span className="text-[#D7AE66] font-bold text-lg">－</span>
            <div>
              <span className="text-[#D7AE66] block text-[10px]">1인 가구 법정 최저생계비</span>
              <span className="text-base font-bold text-amber-200">140만 원</span>
            </div>
            <span className="text-[#D7AE66] font-bold text-lg">＝</span>
            <div className="bg-[#202B40] px-4 py-2 rounded-lg border border-[#D7AE66]/40">
              <span className="text-emerald-400 block text-[10px] font-bold">월 변제금 확정</span>
              <span className="text-lg font-black text-emerald-400">월 110만 원</span>
            </div>
          </div>
          <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-700 font-sans">
            * 36개월간 110만 원씩 총 3,960만 원 변제 후, 총 채무가 1억 원이라면 <strong>나머지 6,040만 원(60.4%) 전액 탕감(면책)</strong>됩니다.
          </div>
        </div>
      </section>
    </div>
  );
};
