import React from 'react';
import { PageId } from '../../types';
import {
  TrendingDown,
  Layers,
  PhoneOff,
  Briefcase,
  AlertCircle,
  ChevronRight,
  HelpCircle,
} from 'lucide-react';

interface HomeProblemSolvingSectionProps {
  onNavigate: (page: PageId, subTab?: string) => void;
}

export const HomeProblemSolvingSection: React.FC<HomeProblemSolvingSectionProps> = ({
  onNavigate,
}) => {
  const problems = [
    {
      id: 'problem-1',
      icon: TrendingDown,
      title: '매달 갚아도 빚이 줄지 않는 경우',
      desc: '월급을 전부 이자와 원리금 상환에 쏟아부어도 원금이 줄지 않고 끝없는 채무의 늪에 빠져 계신가요?',
      solution: '법원 인가 시 이자 100% 면제 + 원금 최대 90% 탕감으로 36개월 만에 빚을 정리할 수 있습니다.',
      targetPage: 'rehab' as PageId,
      subTab: 'overview',
      linkText: '개인회생 제도 안내 보기',
    },
    {
      id: 'problem-2',
      icon: Layers,
      title: '여러 금융기관에서 채무가 있는 경우',
      desc: '1금융권, 저축은행, 카드론, 현금서비스, 대부업체 등 여러 곳에 빚이 분산되어 돌려막기 중이신가요?',
      solution: '분산된 다중채무를 법원을 통해 하나로 통합하고 소득 기준 단일 변제금으로 조정합니다.',
      targetPage: 'rehab' as PageId,
      subTab: 'qualification',
      linkText: '다중채무 회생자격 확인',
    },
    {
      id: 'problem-3',
      icon: PhoneOff,
      title: '연체 또는 독촉으로 어려움을 겪는 경우',
      desc: '매일 걸려오는 빚 독촉 전화, 압류 예고장, 추심원의 방문 두려움으로 일상이 무너진 분들을 보호합니다.',
      solution: '법원에 사건 접수 즉시 금지명령을 신청하여 모든 압류와 추심 행위를 합법적으로 중단시킵니다.',
      targetPage: 'rehab' as PageId,
      subTab: 'process',
      linkText: '독촉 차단 절차 보기',
    },
    {
      id: 'problem-4',
      icon: Briefcase,
      title: '사업 실패로 채무가 늘어난 경우',
      desc: '경기 불황이나 자영업 폐업, 납품 대금 미회수 등으로 감당하기 어려운 사업 부채를 떠안으셨나요?',
      solution: '사업장을 유지하면서 영업소득으로 회생을 진행하거나, 폐업 상태에선 적합한 법적 절차를 찾습니다.',
      targetPage: 'rehab' as PageId,
      subTab: 'overview',
      linkText: '사업자 회생 정보 보기',
    },
    {
      id: 'problem-5',
      icon: AlertCircle,
      title: '소득은 있지만 채무 상환이 어려운 경우',
      desc: '급여나 아르바이트 소득이 있지만, 최저생계비를 빼고 나면 원리금을 갚을 여력이 전혀 없는 상황인가요?',
      solution: '법정 최저생계비(1인 가구 140만원 등)를 보장받고 남은 여유 소득 한도 내에서만 상환합니다.',
      targetPage: 'rehab' as PageId,
      subTab: 'qualification',
      linkText: '소득별 최저생계비 확인',
    },
  ];

  return (
    <section id="home-problem-solving-section" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#151C2C] text-[#D7AE66] text-xs font-bold">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>현재 이런 상황에 처해 계신가요?</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#151C2C] tracking-tight">
          의뢰인분들이 가장 많이 겪는 채무 고민
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          과도한 부채는 결코 개인의 탓이 아닙니다. 비슷한 상황에서 합법적인 법원 회생 제도로 다시 일어선 해결책을 확인해보세요.
        </p>
      </div>

      {/* Cards Grid: 5 Situations */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {problems.map((prob, idx) => {
          const Icon = prob.icon;
          const isFifth = idx === 4;
          return (
            <div
              key={prob.id}
              className={`bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-xs hover:shadow-lg hover:border-[#D7AE66]/80 transition-all flex flex-col justify-between group ${
                isFifth ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="space-y-3">
                {/* Icon & Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-[#F7F8FA] border border-gray-200 flex items-center justify-center text-[#151C2C] group-hover:bg-[#151C2C] group-hover:text-[#D7AE66] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold text-gray-400 font-mono">0{idx + 1}</span>
                </div>

                {/* Situation Title */}
                <h3 className="text-base sm:text-lg font-bold text-[#151C2C] group-hover:text-[#151C2C] transition-colors leading-snug">
                  {prob.title}
                </h3>

                {/* Pain Point Description */}
                <p className="text-xs text-gray-600 leading-relaxed">
                  {prob.desc}
                </p>

                {/* Solution Box */}
                <div className="bg-[#F7F8FA] border border-gray-100 rounded-xl p-3 text-xs text-[#151C2C] leading-relaxed">
                  <span className="font-bold text-[#D7AE66] block mb-0.5">💡 해결 방안</span>
                  {prob.solution}
                </div>
              </div>

              {/* Action Link to Sub-Page */}
              <div className="pt-4 mt-2 border-t border-gray-100">
                <button
                  onClick={() => onNavigate(prob.targetPage, prob.subTab)}
                  className="w-full py-2.5 px-3 rounded-xl bg-gray-50 hover:bg-[#151C2C] text-gray-700 hover:text-[#D7AE66] font-bold text-xs flex items-center justify-between transition-all cursor-pointer"
                >
                  <span>{prob.linkText}</span>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#D7AE66] transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
