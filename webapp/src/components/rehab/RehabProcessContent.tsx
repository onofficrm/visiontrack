import React from 'react';
import {
  Clock,
  Send,
  FileCheck,
  Scale,
  ShieldCheck,
  CheckCircle,
  AlertCircle,
  CalendarCheck,
  ArrowRight,
} from 'lucide-react';

export const RehabProcessContent: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: '비공개 심층 상담 및 자격 진단',
      period: '당일 완료',
      role: '의뢰인 & 전문 변호인',
      desc: '채무자의 소득, 재산, 채무 규모, 부양가족 수를 분석하여 개인회생 신청 가능 여부와 예상 월 변제금을 객관적으로 산정합니다.',
      clientTask: '대략적인 채무 내역 및 소득 형태 구두 안내',
      lawyerTask: '법리적 자격 검토 및 최적의 변제 시나리오 제시',
      tip: '신용조회 기록이 전혀 남지 않는 100% 비공개 상담으로 진행됩니다.',
    },
    {
      step: '02',
      title: '서류 취합 및 신청서 작성',
      period: '약 3~7일 소요',
      role: '법률사무소 전담팀',
      desc: '주민등록 서류, 소득 증빙, 재산목록, 채권자목록, 수입 및 지출에 관한 목록, 진술서를 꼼꼼하게 작성합니다.',
      clientTask: '인적 서류 및 기본 소득 입금내역 전달',
      lawyerTask: '금융기관 부채증명서 발급 대행 및 변제계획안 초안 작성',
      tip: '누락된 채권이 발생하지 않도록 한국신용정보원 크레딧포유 조회를 통해 꼼꼼하게 교차 검증합니다.',
    },
    {
      step: '03',
      title: '법원 전자접수 및 금지·중지명령 신청',
      period: '접수 당일 즉시',
      role: '법원 접수',
      desc: '관할 법원에 개인회생개시신청서와 함께 금지명령신청서를 동시 접수합니다.',
      clientTask: '접수증 및 사건번호 수령',
      lawyerTask: '법원 전자소송 시스템을 통해 사건 접수 완료',
      tip: '사건번호가 생성되면 대법원 나의 사건검색에서 24시간 실시간 진행 조회가 가능합니다.',
    },
    {
      step: '04',
      title: '금지명령 발령 (추심 및 압류 차단)',
      period: '접수 후 약 3~7일',
      role: '관할 법원 결정',
      desc: '법원이 채권자들에게 채무자에 대한 일체의 빚 독촉, 통장·급여 압류, 방문 추심을 금지하는 결정을 내립니다.',
      clientTask: '독촉 전화 시 법원 사건번호와 대리인 사무소 안내',
      lawyerTask: '각 채권자에게 금지명령 결정문 송달 확인',
      tip: '금지명령이 도달한 이후의 채권추심 행위는 불법이 되므로 평온한 일상으로 복귀할 수 있습니다.',
    },
    {
      step: '05',
      title: '회생위원 면담 및 보정권고/보정명령 대응',
      period: '접수 후 1~3개월',
      role: '법원 회생위원 & 법률팀',
      desc: '법원이 지정한 회생위원이 최근 1년간 대출금의 사용처, 재산 처분 내역, 통장 거래내역에 대한 소명을 요구합니다.',
      clientTask: '요청받은 금융 거래 소명 자료 전달',
      lawyerTask: '치밀한 법리 검토를 통한 보정서 및 수정 변제계획안 작성·제출',
      tip: '개인회생의 성패가 결정되는 가장 중요한 단계입니다. 전문 대리인이 철저히 방어하여 변제금 상향을 최소화합니다.',
    },
    {
      step: '06',
      title: '개인회생 개시결정 & 채권자집회 참석',
      period: '접수 후 약 3~5개월',
      role: '법원 재판부',
      desc: '법원이 회생절차의 공식 개시를 결정하며 변제금 입금 계좌(신한은행 법원가상계좌)가 부여됩니다. 채권자 이의신청 기간을 거쳐 집회에 참석합니다.',
      clientTask: '정해진 일시에 법원 채권자집회 출석 (약 10~15분 소요, 질문 거의 없음)',
      lawyerTask: '채권자 이의신청 검토 및 집회 출석 사전 가이드 제공',
      tip: '채권자집회는 채권자가 출석하여 항의하는 경우가 드물며, 본인 확인 절차 위주로 평이하게 진행됩니다.',
    },
    {
      step: '07',
      title: '변제계획 인가결정 및 최종 면책',
      period: '인가 후 36개월간 변제 수행',
      role: '법원 최종 처분',
      desc: '법원이 변제계획을 최종 인가합니다. 채무불이행(신용불량) 정보가 공식 해제되며, 36개월간 계획대로 변제금을 성실히 납부하면 잔여 채무가 100% 면책됩니다.',
      clientTask: '월 1회 법원 지정 가상계좌로 인가된 변제금 성실 납부',
      lawyerTask: '인가결정 공고 확인 및 36개월 만근 후 면책신청서 제출',
      tip: '변제 기간 중이라도 체크카드 발급, 적금 가입, 정상적인 금융거래가 모두 가능합니다.',
    },
  ];

  return (
    <div className="space-y-10 animate-fadeIn">
      {/* 1. Header Highlight Box */}
      <section className="bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-[#D7AE66]/40 text-[#151C2C] text-xs font-bold">
            <Clock className="w-3.5 h-3.5 text-[#D7AE66]" />
            <span>단계별 타임라인</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#151C2C] tracking-tight">
            개인회생 신청부터 최종 면책까지 7단계 절차
          </h2>
          <p className="text-xs text-gray-600 leading-relaxed">
            신청서 접수부터 최종 인가까지는 관할 법원에 따라 통상 <strong>6개월에서 9개월</strong> 정도 소요됩니다. 단계별 소요 기간과 진행 과정을 한눈에 확인하세요.
          </p>
        </div>
      </section>

      {/* 2. Timeline Core Section */}
      <section className="space-y-6">
        <div className="relative border-l-2 border-[#D7AE66]/50 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-8">
          {steps.map((item, idx) => (
            <div key={item.step} className="relative group">
              {/* Timeline Bullet Dot */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-1 w-8 h-8 rounded-full bg-[#151C2C] text-[#D7AE66] border-2 border-[#D7AE66] flex items-center justify-center text-xs font-black shadow-sm group-hover:scale-110 transition-transform">
                {item.step}
              </div>

              {/* Step Card Box */}
              <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 sm:p-6 shadow-xs hover:border-[#D7AE66] hover:shadow-md transition-all space-y-4">
                {/* Header: Title + Period Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-3">
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 font-mono tracking-wider">
                      STEP {item.step} · {item.role}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#151C2C]">
                      {item.title}
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full bg-[#151C2C] text-[#D7AE66] shrink-0 self-start sm:self-auto">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {item.desc}
                </p>

                {/* Roles Split Box: 의뢰인 할일 vs 대리인 할일 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="bg-[#F7F8FA] p-3 rounded-xl border border-gray-100 text-xs">
                    <span className="font-bold text-gray-700 block mb-1">
                      👤 의뢰인 준비 사항
                    </span>
                    <p className="text-gray-600 text-[11px] leading-relaxed">
                      {item.clientTask}
                    </p>
                  </div>

                  <div className="bg-amber-50/40 p-3 rounded-xl border border-[#D7AE66]/20 text-xs">
                    <span className="font-bold text-[#151C2C] block mb-1">
                      ⚖️ 진주개인파산 전담 업무
                    </span>
                    <p className="text-gray-700 text-[11px] leading-relaxed">
                      {item.lawyerTask}
                    </p>
                  </div>
                </div>

                {/* Tip Bar */}
                <div className="text-[11px] text-gray-500 bg-gray-50 p-2.5 rounded-lg flex items-center gap-2">
                  <span className="font-bold text-[#D7AE66] shrink-0">💡 TIP</span>
                  <span>{item.tip}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. 보정권고 집중 방어 노하우 Highlight Box */}
      <section className="bg-[#151C2C] text-white rounded-2xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-6 h-6 text-[#D7AE66]" />
          <h3 className="text-lg font-bold text-white">
            가장 중요한 핵심 고비: 법원 '보정권고' 어떻게 방어할까요?
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          법원 회생위원은 최근 1~2년 동안 발생한 대출금의 사용처(생활비, 병원비, 도박/주식, 부동산 구매 등)를 엄격히 추적합니다. 이때 <strong>법리적 소명이 미흡하면 법원은 월 변제금을 강제로 상향(탕감률 축소)하거나 기각</strong>시킵니다. 진주개인파산은 수많은 보정 대응 경험을 바탕으로 의뢰인의 월 변제금이 1원이라도 불필요하게 인상되지 않도록 정밀 소명서를 직접 작성합니다.
        </p>
      </section>
    </div>
  );
};
