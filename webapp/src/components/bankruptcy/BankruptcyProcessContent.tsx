import React from 'react';
import {
  Clock,
  Scale,
  ShieldCheck,
  CheckCircle,
  AlertCircle,
  Users,
  Award,
} from 'lucide-react';

export const BankruptcyProcessContent: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: '비공개 심층 상담 & 지급불능 입증 설계',
      period: '당일 완료',
      role: '의뢰인 & 전문 변호인',
      desc: '신청인의 연령, 건강 상태, 가족 구성원, 과거 10년간 재산 처분 내역을 전수 분석하여 파산 면책 가능 여부를 진단합니다.',
      clientTask: '소득 활동 불능 사유 구두 설명 및 부채 내역 전달',
      lawyerTask: '면책불허가 사유 유무 사전 필터링 및 방어 논리 수립',
      tip: '개인회생이 유리한지 파산이 유리한지 객관적으로 비교해 드립니다.',
    },
    {
      step: '02',
      title: '서류 발급 및 파산·면책 동시신청서 접수',
      period: '약 1~2주 소요',
      role: '법률팀 & 관할 법원',
      desc: '파산신청서와 면책신청서를 하나의 사건으로 전자접수합니다. 재산목록, 채무자의 수입과 지출, 진술서를 정교하게 작성합니다.',
      clientTask: '기본 인적·소득불능 증빙서류(진단서 등) 전달',
      lawyerTask: '부채증명서 전건 발급 대행 및 법원 전자 접수 완료',
      tip: '접수 즉시 법원 사건번호가 부여되며 채권자들에게 접수 사실을 안내할 수 있습니다.',
    },
    {
      step: '03',
      title: '파산선고 및 파산관재인 선임',
      period: '접수 후 약 2~3개월',
      role: '관할 법원 재판부',
      desc: '법원이 채무자에게 파산선고를 내리고, 채무자의 재산 상태를 조사할 법률 전문가(변호사)를 파산관재인으로 선임합니다.',
      clientTask: '법원 관재인 예납금 납부 (약 30만~50만 원)',
      lawyerTask: '파산관재인 배정 확인 및 1차 서류제출 요구 대응',
      tip: '파산선고만으로는 빚이 없어지지 않으므로, 다음 관재인 조사 절차를 성실히 마쳐야 합니다.',
    },
    {
      step: '04',
      title: '파산관재인 심층 면담 및 재산·거래내역 조사',
      period: '선고 후 약 1~2개월',
      role: '파산관재인 & 법률대리인',
      desc: '파산관재인이 과거 3~5년간의 통장 거래내역, 부동산/차량 매매 대금의 행방, 임차보증금 출처 등을 집중 조사합니다.',
      clientTask: '관재인 사무소 면담 출석 (진주개인파산 사전 코칭 제공)',
      lawyerTask: '관재인 추가 소명 요구서에 대한 법리적 소명자료 완벽 제출',
      tip: '가장 엄격한 심사 단계입니다. 대리인의 노련한 대응이 면책 여부를 좌우합니다.',
    },
    {
      step: '05',
      title: '채권자집회 및 의견청취 기일',
      period: '선고 후 약 3~4개월',
      role: '법원 재판부',
      desc: '법원 법정에 출석하여 채권자들의 이의 여부를 확인하고, 관재인이 법원에 채무자에 대한 면책 찬성/반대 보고서를 제출합니다.',
      clientTask: '정해진 기일에 법원 출석 (약 10분 소요)',
      lawyerTask: '채권자 이의신청 방어 및 관재인 최종 면책 의견 조율',
      tip: '일반적인 개인파산의 경우 채권자가 출석하여 항의하는 일은 극히 드뭅니다.',
    },
    {
      step: '06',
      title: '최종 면책 허가 결정 및 복권 (빚 100% 소멸)',
      period: '집회 후 약 1~2개월',
      role: '법원 최종 처분',
      desc: '법원이 채무자의 모든 빚을 탕감해 주는 면책 결정을 공고합니다. 이로써 모든 원금과 이자가 영구적으로 소멸하며 즉시 법적으로 복권됩니다.',
      clientTask: '면책결정문 및 확정증명원 수령',
      lawyerTask: '한국신용정보원에 면책통보 확인 및 특수기록 삭제 지원',
      tip: '이제 어떠한 채권자도 합법적으로 빚을 갚으라고 요구할 수 없습니다.',
    },
  ];

  return (
    <div className="space-y-10 animate-fadeIn">
      {/* 1. Header Highlight Box */}
      <section className="bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-[#D7AE66]/40 text-[#151C2C] text-xs font-bold">
            <Clock className="w-3.5 h-3.5 text-[#D7AE66]" />
            <span>파산 절차 로드맵</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#151C2C] tracking-tight">
            개인파산 신청부터 최종 면책까지 6단계 절차
          </h2>
          <p className="text-xs text-gray-600 leading-relaxed">
            파산 신청부터 최종 면책 결정까지는 통상 <strong>6개월에서 1년</strong> 정도 소요됩니다. 단계별 과정과 파산관재인 조사 포인트를 사전에 숙지하세요.
          </p>
        </div>
      </section>

      {/* 2. Timeline Core Section */}
      <section className="space-y-6">
        <div className="relative border-l-2 border-[#D7AE66]/50 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-8">
          {steps.map((item) => (
            <div key={item.step} className="relative group">
              <div className="absolute -left-[35px] sm:-left-[43px] top-1 w-8 h-8 rounded-full bg-[#151C2C] text-[#D7AE66] border-2 border-[#D7AE66] flex items-center justify-center text-xs font-black shadow-sm group-hover:scale-110 transition-transform">
                {item.step}
              </div>

              <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 sm:p-6 shadow-xs hover:border-[#D7AE66] hover:shadow-md transition-all space-y-4">
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

                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {item.desc}
                </p>

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

                <div className="text-[11px] text-gray-500 bg-gray-50 p-2.5 rounded-lg flex items-center gap-2">
                  <span className="font-bold text-[#D7AE66] shrink-0">💡 TIP</span>
                  <span>{item.tip}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. 파산관재인 조사 완벽 대비 Highlight Box */}
      <section className="bg-[#151C2C] text-white rounded-2xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-6 h-6 text-[#D7AE66]" />
          <h3 className="text-lg font-bold text-white">
            파산관재인의 까다로운 통장 내역 조사, 어떻게 돌파할까요?
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          파산관재인은 채무자가 숨겨둔 재산이 있는지, 과거에 가족에게 부동산이나 예금을 증여한 내역이 있는지 현미경처럼 들여다봅니다. <strong>소명이 불분명하면 관재인이 환가 배당을 요구하거나 면책 불허가 의견을 법원에 제출</strong>할 수 있습니다. 진주개인파산은 사건 접수 전부터 모든 금융 거래내역을 사전 전수 검토하여 관재인의 예상 질문에 대한 답변서와 증빙자료를 미리 구축합니다.
        </p>
      </section>
    </div>
  );
};
