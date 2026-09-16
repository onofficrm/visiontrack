import React from 'react';
import {
  MessageSquare,
  Search,
  FileCheck,
  Send,
  Scale,
  CalendarCheck,
  CheckCircle,
  Clock,
} from 'lucide-react';

export const HomeProcedureTimeline: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: '상담',
      icon: MessageSquare,
      desc: '의뢰인의 소득, 재산, 채무 상황을 비공개로 청취하고 기본 적합도를 검토합니다.',
      duration: '당일 완료',
    },
    {
      num: '02',
      title: '자격 검토',
      icon: Search,
      desc: '생계비와 채무 내역을 법리적으로 분석하여 회생 신청 가능 여부를 면밀히 확인합니다.',
      duration: '1~2일',
    },
    {
      num: '03',
      title: '서류 준비',
      icon: FileCheck,
      desc: '필수 행정 서류 및 금융기관 부채증명서를 취합하고 신청서를 작성합니다.',
      duration: '3~5일',
    },
    {
      num: '04',
      title: '신청',
      icon: Send,
      desc: '관할 법원에 사건을 전자접수하고 동시에 금지·중지명령을 신청합니다.',
      duration: '접수 당일',
    },
    {
      num: '05',
      title: '법원 절차',
      icon: Scale,
      desc: '회생위원 선임 후 법원의 소명 요청(보정권고)에 성실하게 서면 대응합니다.',
      duration: '1~3개월',
    },
    {
      num: '06',
      title: '변제계획',
      icon: CalendarCheck,
      desc: '개시결정 이후 채권자집회를 거쳐 최종 변제계획안을 법원에 제출합니다.',
      duration: '집회 참석',
    },
    {
      num: '07',
      title: '인가',
      icon: CheckCircle,
      desc: '법원의 최종 인가 결정을 받아 변제계획을 수행하며 채무 정리를 완수합니다.',
      duration: '인가 결정',
    },
  ];

  return (
    <section id="home-procedure-timeline-section" className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-2">
        <span className="text-xs font-bold text-[#D7AE66] uppercase tracking-wider">
          CLEAR & HONEST TIMELINE
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#151C2C] tracking-tight">
          개인회생 진행 과정
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          어렵고 막막하게 느껴지는 법원 절차를 7단계 타임라인으로 한눈에 알기 쉽게 안내해 드립니다.
        </p>
      </div>

      {/* Desktop Horizontal Timeline (7 columns on xl, flex on lg) */}
      <div className="hidden lg:block relative">
        {/* Connecting Track Line */}
        <div className="absolute top-1/2 left-8 right-8 h-1 bg-gray-200 -translate-y-6 z-0" />

        <div className="grid grid-cols-7 gap-3 relative z-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === steps.length - 1;
            return (
              <div
                key={step.num}
                className={`bg-white border rounded-2xl p-4 shadow-xs transition-all hover:-translate-y-1 hover:shadow-md flex flex-col justify-between text-center ${
                  isLast
                    ? 'border-[#D7AE66] ring-2 ring-[#D7AE66]/20 bg-amber-50/20'
                    : 'border-gray-200 hover:border-[#151C2C]'
                }`}
              >
                <div>
                  {/* Step Icon Badge */}
                  <div
                    className={`w-12 h-12 rounded-2xl mx-auto mb-3 flex items-center justify-center transition-colors ${
                      isLast
                        ? 'bg-[#D7AE66] text-[#151C2C] font-black'
                        : 'bg-[#151C2C] text-white'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="text-[10px] font-bold text-gray-400 font-mono tracking-widest block mb-1">
                    STEP {step.num}
                  </span>

                  <h3 className="text-base font-bold text-[#151C2C] mb-2">
                    {step.title}
                  </h3>

                  <p className="text-[11px] text-gray-600 leading-relaxed min-h-[50px]">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-3 mt-2 border-t border-gray-100">
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                    <Clock className="w-3 h-3 text-gray-400" />
                    <span>{step.duration}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile/Tablet Vertical Timeline */}
      <div className="lg:hidden space-y-4 relative pl-6 before:absolute before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-gray-200">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isLast = idx === steps.length - 1;
          return (
            <div
              key={step.num}
              className="relative bg-white border border-gray-200 rounded-2xl p-4 shadow-xs"
            >
              {/* Timeline Marker Dot */}
              <div
                className={`absolute -left-[30px] top-4 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ring-4 ring-white ${
                  isLast ? 'bg-[#D7AE66] text-[#151C2C]' : 'bg-[#151C2C] text-white'
                }`}
              >
                {idx + 1}
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-gray-100 text-[#151C2C] flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-sm font-bold text-[#151C2C]">
                      {step.title}
                    </h3>
                    <span className="text-[10px] font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Honest Legal Disclaimer (User requirement: no false guarantees) */}
      <div className="mt-8 text-center text-[11px] text-gray-500 bg-[#F7F8FA] border border-gray-200 rounded-xl p-3 max-w-2xl mx-auto">
        <span>* 개인회생 및 파산 인가는 법원의 고유 권한이며, 채무자의 소득, 재산, 채무 원인 등에 따라 심사 결과 및 소요 기간에 차이가 있을 수 있습니다.</span>
      </div>
    </section>
  );
};
