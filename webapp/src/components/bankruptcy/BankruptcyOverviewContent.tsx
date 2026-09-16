import React from 'react';
import {
  Scale,
  ShieldCheck,
  Percent,
  Ban,
  CheckCircle2,
  AlertTriangle,
  Award,
  HelpCircle,
} from 'lucide-react';

export const BankruptcyOverviewContent: React.FC = () => {
  return (
    <div className="space-y-10 animate-fadeIn">
      {/* 1. 개인파산 및 면책 핵심 정의 Highlight Box */}
      <section className="bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-[#D7AE66]/40 text-[#151C2C] text-xs font-bold">
            <Scale className="w-3.5 h-3.5 text-[#D7AE66]" />
            <span>채무자 회생 및 파산에 관한 법률 제3편</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#151C2C] tracking-tight">
            개인파산 및 면책제도란 무엇인가요?
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
            자신의 모든 재산으로도 채무를 변제할 수 없는 '지급불능' 상태에 빠진 개인채무자가, 법원에 신청하여 <strong>남아있는 재산을 공정하게 환가·배당(동시폐지 시 생략)하고, 법원의 결정을 통해 모든 채무의 변제 책임을 전액 면제(면책)</strong>받는 제도입니다.
          </p>
        </div>

        {/* 4대 핵심 법적 효력 카드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <div className="bg-[#F7F8FA] border border-gray-200/80 rounded-xl p-5 space-y-2">
            <div className="w-10 h-10 rounded-lg bg-[#151C2C] text-[#D7AE66] flex items-center justify-center">
              <Percent className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-[#151C2C]">원금·이자 100% 탕감</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              36개월간 돈을 갚는 회생과 달리, 법원의 면책 결정 즉시 모든 빚의 변제 의무가 0원으로 소멸합니다.
            </p>
          </div>

          <div className="bg-[#F7F8FA] border border-gray-200/80 rounded-xl p-5 space-y-2">
            <div className="w-10 h-10 rounded-lg bg-[#151C2C] text-[#D7AE66] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-[#151C2C]">신용불량 기록 전액 삭제</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              면책 확정 시 한국신용정보원의 특수기록코드(1201)가 등록 해제되어 정상 신용 회복이 시작됩니다.
            </p>
          </div>

          <div className="bg-[#F7F8FA] border border-gray-200/80 rounded-xl p-5 space-y-2">
            <div className="w-10 h-10 rounded-lg bg-[#151C2C] text-[#D7AE66] flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-[#151C2C]">즉시 법적 복권</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              파산선고로 인해 일시 정지되었던 공무원 시험 응시, 자격증 취득 등 모든 법적 불이익이 즉시 소멸합니다.
            </p>
          </div>

          <div className="bg-[#F7F8FA] border border-gray-200/80 rounded-xl p-5 space-y-2">
            <div className="w-10 h-10 rounded-lg bg-[#151C2C] text-[#D7AE66] flex items-center justify-center">
              <Ban className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-[#151C2C]">가족에게 빚 대물림 차단</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              채무 자체가 법적으로 소멸하므로 상속이나 가족에게 채무가 대물림되는 것을 원천 차단합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 2. 개인회생 vs 개인파산 명확한 구조적 비교표 */}
      <section className="bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="mb-6 space-y-1.5">
          <h2 className="text-lg sm:text-xl font-bold text-[#151C2C]">
            개인회생 vs 개인파산 핵심 차이 비교
          </h2>
          <p className="text-xs text-gray-500">
            소득 유무와 변제 가능 여부에 따라 적합한 구제 제도가 근본적으로 다릅니다.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b-2 border-gray-200 bg-[#F7F8FA]">
                <th className="py-3 px-4 font-bold text-gray-700 w-1/4">비교 항목</th>
                <th className="py-3 px-4 font-bold text-gray-600 w-3/8">개인회생 (Rehabilitation)</th>
                <th className="py-3 px-4 font-bold text-[#151C2C] bg-amber-50/70 border-x border-[#D7AE66]/30 w-3/8">
                  개인파산 및 면책 (Bankruptcy)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="py-3 px-4 font-semibold text-gray-800 bg-gray-50/50">신청 대상</td>
                <td className="py-3 px-4 text-gray-600">지속적·정기적 소득이 있는 자</td>
                <td className="py-3 px-4 font-bold text-[#151C2C] bg-amber-50/30 border-x border-[#D7AE66]/20">
                  소득이 없거나 최저생계비 미달로 빚을 갚을 수 없는 자
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-gray-800 bg-gray-50/50">채무 탕감 방식</td>
                <td className="py-3 px-4 text-gray-600">36개월간 가용소득 분할 변제 후 잔여 탕감</td>
                <td className="py-3 px-4 font-bold text-emerald-700 bg-amber-50/30 border-x border-[#D7AE66]/20">
                  변제금 납부 없이 법원 결정으로 원금·이자 100% 일시 탕감
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-gray-800 bg-gray-50/50">재산 보유 여부</td>
                <td className="py-3 px-4 text-gray-600">주택, 차량 등 본인 명의 재산 그대로 유지 가능</td>
                <td className="py-3 px-4 text-gray-600 bg-amber-50/30 border-x border-[#D7AE66]/20">
                  원칙적으로 재산을 환가하여 배당 (단, 압류금지 재산 및 소액임차보증금은 면제재산으로 보호)
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-gray-800 bg-gray-50/50">채무 한도</td>
                <td className="py-3 px-4 text-gray-600">무담보 10억, 담보부 15억 이하 제한</td>
                <td className="py-3 px-4 font-bold text-[#151C2C] bg-amber-50/30 border-x border-[#D7AE66]/20">
                  채무액 상한선 제한 없음 (수십억 원도 가능)
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-gray-800 bg-gray-50/50">신청 비용 및 기간</td>
                <td className="py-3 px-4 text-gray-600">인가까지 약 6~9개월 소요</td>
                <td className="py-3 px-4 text-gray-600 bg-amber-50/30 border-x border-[#D7AE66]/20">
                  면책까지 약 6~12개월 소요 (파산관재인 예납금 발생)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. "파산선고" vs "면책결정" 차이 중요 Highlight Box */}
      <section className="bg-[#151C2C] text-white rounded-2xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-[#D7AE66]" />
          <h3 className="text-lg font-bold text-white">
            가장 중요한 핵심: 파산선고만 받으면 안 되며, 반드시 '면책'을 받아야 합니다
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          '파산선고'는 채무자가 빚을 갚을 능력이 없음을 법원이 공식 선언하는 것일 뿐, 채무가 사라지는 것이 아닙니다. 빚을 완전히 탕감받으려면 법원으로부터 <strong>'면책 허가 결정'</strong>을 받아야 합니다. 면책을 받지 못하면 파산자의 신분적 불이익만 남게 되므로, 진주개인파산 도산전담팀은 면책불허가 사유를 사전에 철저히 검토하여 면책까지 책임지고 완주합니다.
        </p>
      </section>
    </div>
  );
};
