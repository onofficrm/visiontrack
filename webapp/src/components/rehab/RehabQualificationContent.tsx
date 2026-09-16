import React, { useState } from 'react';
import {
  CheckCircle2,
  XCircle,
  AlertTriangle,
  UserCheck,
  Briefcase,
  TrendingDown,
  Building2,
  HelpCircle,
  Calculator,
} from 'lucide-react';

export const RehabQualificationContent: React.FC = () => {
  // Simple interactive self-check state
  const [check1, setCheck1] = useState(true);
  const [check2, setCheck2] = useState(true);
  const [check3, setCheck3] = useState(true);
  const [check4, setCheck4] = useState(true);

  const isEligible = check1 && check2 && check3 && check4;

  return (
    <div className="space-y-10 animate-fadeIn">
      {/* 1. 자격요건 4대 핵심 체크리스트 (Interactive Self-Check Box) */}
      <section className="bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="max-w-2xl mb-6 space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-[#D7AE66]/40 text-[#151C2C] text-xs font-bold">
            <UserCheck className="w-3.5 h-3.5 text-[#D7AE66]" />
            <span>자가점검표</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#151C2C] tracking-tight">
            개인회생 신청 자격 4대 핵심 요건
          </h2>
          <p className="text-xs text-gray-600">
            아래 4가지 조건에 해당하는지 체크해 보세요. 내 상황과 비교하여 회생 적격 여부를 직관적으로 확인할 수 있습니다.
          </p>
        </div>

        <div className="space-y-3">
          {/* Check 1 */}
          <label
            className={`flex items-start gap-3.5 p-4 rounded-xl border transition-all cursor-pointer ${
              check1 ? 'bg-amber-50/40 border-[#D7AE66]' : 'bg-gray-50 border-gray-200'
            }`}
          >
            <input
              type="checkbox"
              checked={check1}
              onChange={(e) => setCheck1(e.target.checked)}
              className="mt-1 w-4 h-4 text-[#D7AE66] rounded border-gray-300 focus:ring-[#D7AE66]"
            />
            <div className="flex-1">
              <div className="text-sm font-bold text-[#151C2C] flex items-center justify-between">
                <span>1. 지속적이고 반복적인 소득이 있습니까?</span>
                <span className="text-xs font-bold text-amber-700 bg-amber-100/70 px-2 py-0.5 rounded">필수요건</span>
              </div>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                4대보험 가입 직장인은 물론 계약직, 일용직, 아르바이트, 배달라이더, 개인사업자 등 소득 형태에 상관없이 정기적인 수입 입증이 가능하면 신청할 수 있습니다.
              </p>
            </div>
          </label>

          {/* Check 2 */}
          <label
            className={`flex items-start gap-3.5 p-4 rounded-xl border transition-all cursor-pointer ${
              check2 ? 'bg-amber-50/40 border-[#D7AE66]' : 'bg-gray-50 border-gray-200'
            }`}
          >
            <input
              type="checkbox"
              checked={check2}
              onChange={(e) => setCheck2(e.target.checked)}
              className="mt-1 w-4 h-4 text-[#D7AE66] rounded border-gray-300 focus:ring-[#D7AE66]"
            />
            <div className="flex-1">
              <div className="text-sm font-bold text-[#151C2C] flex items-center justify-between">
                <span>2. 총 채무액이 법정 한도 이내입니까? (담보 15억, 무담보 10억 이하)</span>
                <span className="text-xs font-bold text-amber-700 bg-amber-100/70 px-2 py-0.5 rounded">채무한도</span>
              </div>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                신용대출·카드론·사채 등 무담보 채무는 최대 10억 원, 주택담보대출 등 담보 채무는 최대 15억 원(총 25억 원) 이내여야 합니다. (최소 채무액은 통상 1,000만 원 이상 권장)
              </p>
            </div>
          </label>

          {/* Check 3 */}
          <label
            className={`flex items-start gap-3.5 p-4 rounded-xl border transition-all cursor-pointer ${
              check3 ? 'bg-amber-50/40 border-[#D7AE66]' : 'bg-gray-50 border-gray-200'
            }`}
          >
            <input
              type="checkbox"
              checked={check3}
              onChange={(e) => setCheck3(e.target.checked)}
              className="mt-1 w-4 h-4 text-[#D7AE66] rounded border-gray-300 focus:ring-[#D7AE66]"
            />
            <div className="flex-1">
              <div className="text-sm font-bold text-[#151C2C] flex items-center justify-between">
                <span>3. 보유한 재산보다 빚(채무)이 더 많습니까?</span>
                <span className="text-xs font-bold text-amber-700 bg-amber-100/70 px-2 py-0.5 rounded">지급불능</span>
              </div>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                부동산, 차량, 예적금, 보험 해약환급금 등 본인 명의 재산의 청산가치보다 총 채무액이 더 많아야 채무조정의 필요성이 인정됩니다.
              </p>
            </div>
          </label>

          {/* Check 4 */}
          <label
            className={`flex items-start gap-3.5 p-4 rounded-xl border transition-all cursor-pointer ${
              check4 ? 'bg-amber-50/40 border-[#D7AE66]' : 'bg-gray-50 border-gray-200'
            }`}
          >
            <input
              type="checkbox"
              checked={check4}
              onChange={(e) => setCheck4(e.target.checked)}
              className="mt-1 w-4 h-4 text-[#D7AE66] rounded border-gray-300 focus:ring-[#D7AE66]"
            />
            <div className="flex-1">
              <div className="text-sm font-bold text-[#151C2C] flex items-center justify-between">
                <span>4. 과거 5년 이내에 면책을 받은 이력이 없습니까?</span>
                <span className="text-xs font-bold text-amber-700 bg-amber-100/70 px-2 py-0.5 rounded">재신청제한</span>
              </div>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                과거 개인회생 면책을 받은 경우 5년, 파산 면책을 받은 경우 7년이 경과해야 개인회생을 다시 신청할 수 있습니다. (기각되거나 폐지된 경우에는 즉시 재신청 가능)
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
                  ? '자가진단 결과: 개인회생 신청 가능성이 높은 상태입니다.'
                  : '체크되지 않은 항목이 있습니다. 정밀 진단이 필요합니다.'}
              </h4>
              <p className="text-xs text-gray-600">
                {isEligible
                  ? '소득 증빙 자료와 부채증명서를 기반으로 한 정밀 검토를 권장합니다.'
                  : '조건에 미달하거나 애매한 부분이 있더라도, 법리적 보완책(예: 일용직 소득 소명, 파산 전환)이 마련되어 있으니 상담을 받아보세요.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 소득 형태별 인정 기준 비교표 */}
      <section className="bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="mb-6 space-y-1.5">
          <h2 className="text-lg sm:text-xl font-bold text-[#151C2C]">
            직업군 및 소득 형태별 소득 인정 기준
          </h2>
          <p className="text-xs text-gray-500">
            정규직뿐만 아니라 어떠한 직종이든 최저생계비 이상의 정기 소득이 있다면 인정됩니다.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b-2 border-gray-200 bg-[#F7F8FA]">
                <th className="py-3 px-4 font-bold text-gray-700">직업/소득 형태</th>
                <th className="py-3 px-4 font-bold text-gray-700">소득 인정 기준</th>
                <th className="py-3 px-4 font-bold text-gray-700">필수 증빙 서류</th>
                <th className="py-3 px-4 font-bold text-gray-700">법원 심사 핵심 포인트</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="py-3 px-4 font-bold text-[#151C2C]">직장인 (급여소득자)</td>
                <td className="py-3 px-4 text-gray-600">최근 1년간(또는 재직기간) 월평균 실수령액</td>
                <td className="py-3 px-4 text-gray-600">근로소득원천징수, 급여명세서, 급여입금통장</td>
                <td className="py-3 px-4 text-gray-600">상여금, 성과급의 연간 분할 반영 여부</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-[#151C2C]">자영업자 (개인사업자)</td>
                <td className="py-3 px-4 text-gray-600">총매출에서 임대료, 인건비 등 영업비용을 뺀 순소득</td>
                <td className="py-3 px-4 text-gray-600">부가가치세과세표준증명, 사업통장거래내역, 매출전표</td>
                <td className="py-3 px-4 text-gray-600">실제 사업 운영 여부 및 영업비용 증빙 적정성</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-[#151C2C]">프리랜서 / 라이더</td>
                <td className="py-3 px-4 text-gray-600">최근 3~6개월간 정산 및 입금된 수입의 평균치</td>
                <td className="py-3 px-4 text-gray-600">원천징수영수증(3.3%), 플랫폼 정산내역서, 입금통장</td>
                <td className="py-3 px-4 text-gray-600">소득의 계절적 변동폭 소명 및 유류비 등 실비 공제</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-[#151C2C]">아르바이트 / 일용직</td>
                <td className="py-3 px-4 text-gray-600">단기 파트타임이라도 향후 지속적 근무 예정 확인</td>
                <td className="py-3 px-4 text-gray-600">고용확인서, 급여수령증, 고용주 급여입금확인서</td>
                <td className="py-3 px-4 text-gray-600">위장 취업 여부(친인척 업체 근무 시 엄격 심사)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. 2026년 기준 가구원 수별 법정 최저생계비 산정표 */}
      <section className="bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="mb-4 space-y-1">
          <h2 className="text-lg sm:text-xl font-bold text-[#151C2C]">
            가구원 수별 법정 최저생계비 기준 (기준 중위소득의 60%)
          </h2>
          <p className="text-xs text-gray-500">
            법원은 아래 금액만큼 채무자의 기본 생계를 법적으로 보장하며, 이를 초과하는 소득만 변제금으로 산정합니다.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div className="bg-[#F7F8FA] border border-gray-200 rounded-xl p-4 text-center">
            <span className="text-xs text-gray-500 font-medium block">1인 가구</span>
            <span className="text-base sm:text-lg font-black text-[#151C2C] mt-1 block">
              약 140만 원
            </span>
            <span className="text-[10px] text-gray-400 mt-0.5 block">단독 세대 기준</span>
          </div>

          <div className="bg-[#F7F8FA] border border-gray-200 rounded-xl p-4 text-center">
            <span className="text-xs text-gray-500 font-medium block">2인 가구</span>
            <span className="text-base sm:text-lg font-black text-[#151C2C] mt-1 block">
              약 232만 원
            </span>
            <span className="text-[10px] text-gray-400 mt-0.5 block">배우자/자녀 1인 부양</span>
          </div>

          <div className="bg-[#F7F8FA] border border-gray-200 rounded-xl p-4 text-center">
            <span className="text-xs text-gray-500 font-medium block">3인 가구</span>
            <span className="text-base sm:text-lg font-black text-[#151C2C] mt-1 block">
              약 298만 원
            </span>
            <span className="text-[10px] text-gray-400 mt-0.5 block">미성년 자녀 2인 등</span>
          </div>

          <div className="bg-[#F7F8FA] border border-gray-200 rounded-xl p-4 text-center">
            <span className="text-xs text-gray-500 font-medium block">4인 가구</span>
            <span className="text-base sm:text-lg font-black text-[#151C2C] mt-1 block">
              약 362만 원
            </span>
            <span className="text-[10px] text-gray-400 mt-0.5 block">4인 가족 기준</span>
          </div>
        </div>
      </section>

      {/* 4. 사용자가 내 상황과 비교하기 쉬운 3가지 시나리오 카드 */}
      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-lg sm:text-xl font-bold text-[#151C2C]">
            실제 의뢰인 상황별 자격 비교 시나리오
          </h2>
          <p className="text-xs text-gray-500">
            나와 가장 유사한 채무 유형과 직종을 비교해 보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Scenario 1 */}
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 shadow-xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700">
                  직장인 · 다중채무
                </span>
                <span className="text-[11px] font-bold text-emerald-600">신청 적격</span>
              </div>
              <h3 className="font-bold text-sm text-[#151C2C]">
                월급 260만 원, 채무 7,500만 원 (카드론/대부업)
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                매달 나가는 원리금만 240만 원에 달해 돌려막기 중인 30대 김모 씨. 1인 가구 생계비(140만 원) 보장 후 월 120만 원씩 36개월 상환하여 <strong>원금 4,320만 원 변제, 나머지 3,180만 원 및 이자 전액 탕감</strong>.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] text-gray-500">
              ✓ 급여 압류 즉시 중단 및 직장 통보 없음
            </div>
          </div>

          {/* Scenario 2 */}
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 shadow-xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-700">
                  자영업자 · 사업부채
                </span>
                <span className="text-[11px] font-bold text-emerald-600">신청 적격</span>
              </div>
              <h3 className="font-bold text-sm text-[#151C2C]">
                월 영업순익 280만 원, 채무 1억 6천만 원
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                식당을 운영하며 소상공인 정책자금과 신용보증기금 대출이 누적된 40대 박모 씨. 사업장을 폐업하지 않고 <strong>가게를 계속 운영하면서</strong> 2인 가구 생계비 인정받아 월 변제금 낮추어 회생 인가.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] text-gray-500">
              ✓ 사업자등록 유지 및 카드매출 압류 해제
            </div>
          </div>

          {/* Scenario 3 */}
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 shadow-xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-purple-50 text-purple-700">
                  청년 · 주식/코인 손실
                </span>
                <span className="text-[11px] font-bold text-emerald-600">신청 적격</span>
              </div>
              <h3 className="font-bold text-sm text-[#151C2C]">
                월 수입 220만 원, 채무 6,000만 원 (투자 실패)
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                가상화폐 및 주식 레버리지 투자로 채무가 급증한 20대 이모 씨. 서울회생법원 실무준칙에 따라 투자 손실금을 청산가치에 반영하지 않고 <strong>순수 가용소득만으로 변제계획안 인가</strong> 성공.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] text-gray-500">
              ✓ 법원별 실무준칙 적용으로 탕감률 방어
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
