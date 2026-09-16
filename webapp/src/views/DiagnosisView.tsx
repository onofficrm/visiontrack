import React, { useState } from 'react';
import { PageId, DiagnosisAnswers, ConsultationFormData } from '../types';
import {
  HelpCircle,
  CheckCircle2,
  ArrowRight,
  RotateCcw,
  ShieldCheck,
  Lock,
  PhoneCall,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Scale,
  Check,
  Building,
  Info,
} from 'lucide-react';

interface DiagnosisViewProps {
  onNavigate: (page: PageId, subTab?: string) => void;
  onApplyWithDiagnosis?: (diagnosisAnswers: DiagnosisAnswers) => void;
}

export const DiagnosisView: React.FC<DiagnosisViewProps> = ({
  onNavigate,
  onApplyWithDiagnosis,
}) => {
  // Step: 1 ~ 5 (Questions), 6 (Result)
  const [currentStep, setCurrentStep] = useState<number>(1);

  // User answers
  const [answers, setAnswers] = useState<DiagnosisAnswers>({
    hasRegularIncome: '',
    repaymentDifficulty: '',
    overdueStatus: '',
    debtVsAsset: '',
    priorityGoal: '',
  });

  // Question Definitions
  const questions = [
    {
      id: 1,
      title: '현재 정기적인 소득이 있나요?',
      subTitle: '소득 여부는 개인회생과 개인파산을 가르는 가장 중요한 기준입니다.',
      field: 'hasRegularIncome' as keyof DiagnosisAnswers,
      options: [
        {
          value: '예',
          label: '예, 매달 정기적인 소득이 있습니다',
          desc: '직장인, 아르바이트, 프리랜서, 자영업 등 매월 일정 금액 이상 수입 발생',
          badge: '개인회생 적합 가능성',
        },
        {
          value: '아니오',
          label: '아니오, 현재 소득이 전혀 없습니다',
          desc: '구직 중, 중증 질환, 고령, 장애, 가사 등으로 소득 활동이 어려운 상태',
          badge: '개인파산 검토 가능',
        },
      ],
    },
    {
      id: 2,
      title: '현재 채무 상환에 어려움을 느끼고 있나요?',
      subTitle: '스스로 감당하기 힘든 상태라면 제도를 통한 채무 조정을 고려해야 합니다.',
      field: 'repaymentDifficulty' as keyof DiagnosisAnswers,
      options: [
        {
          value: '매우 어려움',
          label: '매우 어렵습니다 (돌려막기 중이거나 한계에 달함)',
          desc: '매달 이자만 겨우 내고 있거나 추가 대출로 버티는 상태',
        },
        {
          value: '곧 어려워짐',
          label: '곧 상환이 어려워질 것 같습니다',
          desc: '현재는 상환 중이나 곧 만기가 도래하거나 금리 인상으로 부담 가중',
        },
        {
          value: '감당 가능하나 부담',
          label: '아직은 감당 가능하나 이자 부담이 큽니다',
          desc: '원금 상환이 거의 되지 않아 채무 조정 방안을 알아보고 싶음',
        },
      ],
    },
    {
      id: 3,
      title: '연체가 발생한 상태인가요?',
      subTitle: '연체 전이라도 법원의 금지명령을 통해 독촉을 미연에 방지할 수 있습니다.',
      field: 'overdueStatus' as keyof DiagnosisAnswers,
      options: [
        {
          value: '연체 없음',
          label: '연체 없음 (정상 상환 중)',
          desc: '아직 신용점수에 연체 기록은 없으나 조만간 연체가 우려되는 상태',
          badge: '연체 전 신청 가능',
        },
        {
          value: '30일 이내',
          label: '최근 연체 시작 (30일 이내)',
          desc: '금융사에서 1차 독촉 문자 및 전화가 시작된 상태',
          badge: '독촉 즉시 차단 필요',
        },
        {
          value: '30일~90일 이상',
          label: '장기 연체 중 (90일 이상 / 압류·소송 진행)',
          desc: '통장 또는 급여가 압류되었거나 법원에서 지급명령 우편을 받음',
          badge: '긴급 압류 해제 필요',
        },
      ],
    },
    {
      id: 4,
      title: '현재 재산보다 채무(빚)가 더 많은 상황인가요?',
      subTitle: '보유한 재산(임차보증금, 부동산, 차량 등)의 가치와 총 빚을 비교합니다.',
      field: 'debtVsAsset' as keyof DiagnosisAnswers,
      options: [
        {
          value: '채무가 재산보다 많음',
          label: '예, 빚이 재산보다 훨씬 많습니다',
          desc: '재산을 모두 처분하더라도 빚을 다 갚을 수 없는 상태',
          badge: '법정 신청 요건 충족',
        },
        {
          value: '재산과 채무가 비슷함',
          label: '재산과 빚이 비슷하거나 재산이 약간 더 많습니다',
          desc: '부동산 시세나 보증금이 있으나 환가가 어려운 상황',
          badge: '청산가치 정밀 계산 필요',
        },
        {
          value: '정확한 계산 어려움',
          label: '정확히 얼마인지 계산하기 어렵습니다',
          desc: '상담을 통해 재산 가치와 부채 잔액을 확인해보고 싶음',
          badge: '무료 서류 조회 지원',
        },
      ],
    },
    {
      id: 5,
      title: '가장 시급하게 해결하고 싶은 문제는 무엇인가요?',
      subTitle: '희망하시는 우선순위에 따라 맞춤형 법률 방어 전략을 세워드립니다.',
      field: 'priorityGoal' as keyof DiagnosisAnswers,
      options: [
        {
          value: '월 변제금 대폭 경감',
          label: '매달 갚는 상환금을 생활비 보장 수준으로 낮추기',
          desc: '소득에서 최저생계비를 뺀 가용소득만 36개월간 납부',
        },
        {
          value: '독촉 및 압류 즉시 중단',
          label: '채권자의 독촉 전화, 자택 방문, 통장 압류 중지',
          desc: '신청 후 3~7일 내 법원의 금지명령으로 합법적 차단',
        },
        {
          value: '원금·이자 100% 전액 면책',
          label: '소득 활동이 불가능하여 모든 채무 전액 탕감 희망',
          desc: '개인파산 및 면책을 통해 빚을 0원으로 소멸',
        },
        {
          value: '가족 모르게 조용히 해결',
          label: '가족이나 직장에 일체 알려지지 않도록 비밀 진행',
          desc: '법원 우편물 사무소 대리 수령 및 철저한 비밀 유지',
        },
      ],
    },
  ];

  const currentQ = questions[currentStep - 1];

  const handleSelectOption = (field: keyof DiagnosisAnswers, value: string) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));

    // Auto advance after small delay for smooth feel
    setTimeout(() => {
      if (currentStep < questions.length) {
        setCurrentStep(currentStep + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        // Reached results
        setCurrentStep(6);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 250);
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleReset = () => {
    setAnswers({
      hasRegularIncome: '',
      repaymentDifficulty: '',
      overdueStatus: '',
      debtVsAsset: '',
      priorityGoal: '',
    });
    setCurrentStep(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Move to consultation page with prefilled diagnosis
  const handleProceedToConsultation = () => {
    if (onApplyWithDiagnosis) {
      onApplyWithDiagnosis(answers);
    }
    onNavigate('consultation');
  };

  // Determine guidance based on answers
  const isRegularIncome = answers.hasRegularIncome === '예';
  const isDebtMore = answers.debtVsAsset === '채무가 재산보다 많음';

  return (
    <div className="min-h-screen bg-[#F7F8FA] pb-24 animate-fadeIn">
      {/* 1. Header Banner */}
      <section className="bg-[#151C2C] text-white pt-10 pb-12 sm:pt-14 sm:pb-16 px-4 sm:px-6 border-b border-[#25324C]">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1D273B] border border-[#D7AE66]/40 text-[#D7AE66] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>1분 간편 자가진단</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            내 상황에 맞는 채무 조정 진단
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed pt-1">
            복잡한 계산 없이 5가지 질문에 답하시면, 현재 상황에 적합한 법적 구제 방안과 고려사항을 안내해 드립니다.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-3 text-xs text-slate-400">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D7AE66]" /> 신용조회 기록 없음
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-[#D7AE66]" /> 별도 가입 불필요
            </span>
            <span>·</span>
            <span>소요시간 약 1분</span>
          </div>
        </div>
      </section>

      {/* 2. Main Step Box */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 -mt-6">
        {/* Progress Bar Header (During Questions) */}
        {currentStep <= questions.length && (
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-4 sm:p-5 shadow-sm mb-6">
            <div className="flex items-center justify-between text-xs mb-2">
              <div className="flex items-center gap-2">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="text-gray-500 hover:text-[#151C2C] flex items-center gap-0.5 text-xs font-medium cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>이전 질문</span>
                  </button>
                )}
                <span className="font-bold text-[#151C2C]">
                  자가진단 진행 중
                </span>
              </div>
              <span className="text-[#D7AE66] font-extrabold font-mono text-xs">
                질문 {currentStep} / {questions.length}
              </span>
            </div>

            <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-[#D7AE66] to-[#c59c53] h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / questions.length) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* QUESTION CARDS (1 question per screen) */}
        {/* ------------------------------------------------------------------ */}
        {currentStep <= questions.length && currentQ && (
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-bold text-[#D7AE66] font-mono tracking-wider block mb-1">
                QUESTION {currentQ.id}
              </span>
              <h2 className="text-lg sm:text-2xl font-bold text-[#151C2C] leading-snug">
                {currentQ.title}
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1.5 leading-relaxed">
                {currentQ.subTitle}
              </p>
            </div>

            {/* Options List */}
            <div className="space-y-3 pt-2">
              {currentQ.options.map((option) => {
                const isSelected = answers[currentQ.field] === option.value;
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleSelectOption(currentQ.field, option.value)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-start justify-between gap-3 ${
                      isSelected
                        ? 'bg-amber-50/50 border-[#D7AE66] ring-2 ring-[#D7AE66]/30 shadow-xs'
                        : 'bg-white border-gray-200 hover:border-[#D7AE66]/70 hover:bg-gray-50/70'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className={`text-sm sm:text-base font-bold ${isSelected ? 'text-[#151C2C]' : 'text-gray-800'}`}>
                          {option.label}
                        </span>
                        {option.badge && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900 shrink-0">
                            {option.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {option.desc}
                      </p>
                    </div>

                    <div
                      className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        isSelected
                          ? 'bg-[#D7AE66] border-[#D7AE66] text-[#151C2C]'
                          : 'border-gray-300 text-transparent'
                      }`}
                    >
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Mobile Bottom Helper Note */}
            <div className="pt-2 text-center text-xs text-gray-600">
              선택하시면 자동으로 다음 질문으로 이동합니다.
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* RESULT VIEW (Step 6) */}
        {/* ------------------------------------------------------------------ */}
        {currentStep === 6 && (
          <div className="space-y-6">
            {/* Main Result Card */}
            <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="text-center space-y-2 border-b border-gray-100 pb-6">
                <div className="w-12 h-12 rounded-full bg-amber-50 text-[#D7AE66] border border-[#D7AE66]/30 flex items-center justify-center mx-auto mb-2">
                  <Scale className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-[#D7AE66]">자가진단 분석 완료</span>
                <h2 className="text-xl sm:text-2xl font-black text-[#151C2C] leading-snug">
                  입력해주신 내용을 기준으로<br />
                  추가적인 상담을 받아보는 것이 도움이 될 수 있습니다.
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto leading-relaxed pt-1">
                  법적 채무 조정은 개인의 정확한 소득, 가족 수, 채권사 성격에 따라 최적의 진행 방향이 달라지므로 전문 변호사의 확인이 권장됩니다.
                </p>
              </div>

              {/* Summary of User Inputs */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  입력하신 내용 요약
                </h3>
                <div className="bg-[#F7F8FA] border border-gray-200 rounded-xl p-4 sm:p-5 text-xs space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-gray-200">
                    <span className="text-gray-500">1. 정기 소득 여부</span>
                    <span className="font-bold text-[#151C2C]">
                      {answers.hasRegularIncome === '예' ? '정기 소득 있음' : '소득 없음/곤란'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-gray-200">
                    <span className="text-gray-500">2. 상환 곤란 정도</span>
                    <span className="font-bold text-[#151C2C]">{answers.repaymentDifficulty}</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-gray-200">
                    <span className="text-gray-500">3. 현재 연체 상태</span>
                    <span className="font-bold text-[#D7AE66]">{answers.overdueStatus}</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-gray-200">
                    <span className="text-gray-500">4. 재산 대비 채무</span>
                    <span className="font-bold text-[#151C2C]">{answers.debtVsAsset}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">5. 우선 희망사항</span>
                    <span className="font-bold text-[#151C2C]">{answers.priorityGoal}</span>
                  </div>
                </div>
              </div>

              {/* Contextual Direction Guide */}
              <div className="bg-amber-50/40 border border-[#D7AE66]/30 rounded-xl p-4 sm:p-5 space-y-2">
                <div className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-[#D7AE66] shrink-0" />
                  <span className="text-xs font-bold text-[#151C2C]">맞춤 검토 방향</span>
                </div>
                <p className="text-xs text-gray-700 leading-relaxed">
                  {isRegularIncome ? (
                    <>
                      <strong>정기적인 소득</strong>이 있으시다면, 원금의 최대 90%를 탕감받고 남은 금액을 36개월간 분할 납부하는 <strong>'개인회생'</strong> 제도를 가장 먼저 검토해보는 것이 유리합니다.
                    </>
                  ) : (
                    <>
                      현재 <strong>소득 활동이 어려우신 상태</strong>라면, 변제금 납부 없이 법원의 면책 결정을 통해 채무 전액(100%)을 면제받는 <strong>'개인파산 및 면책'</strong> 제도 신청 가능 여부를 타진해보는 것이 좋습니다.
                    </>
                  )}
                  {answers.overdueStatus.includes('연체') && (
                    <span className="block mt-1 text-gray-600">
                      이미 연체나 독촉이 시작된 경우, 법원에 사건 접수 즉시 <strong>금지명령</strong>을 신청하여 모든 추심과 압류를 법적으로 중단시킬 수 있습니다.
                    </span>
                  )}
                </p>
              </div>

              {/* CTA 1: Apply for Consultation */}
              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  onClick={handleProceedToConsultation}
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#D7AE66] to-[#c59c53] hover:from-[#e4c281] hover:to-[#D7AE66] text-[#151C2C] font-black text-sm sm:text-base shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Lock className="w-4 h-4" />
                  <span>이 내용으로 비공개 상담 신청하기</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[11px] text-gray-600 text-center">
                  진단하신 내용이 상담 신청 폼에 자동으로 반영되어 더 빠르게 안내받으실 수 있습니다.
                </p>
              </div>

              {/* Reset diagnosis */}
              <div className="text-center pt-1">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-800 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>진단 처음부터 다시 하기</span>
                </button>
              </div>
            </div>

            {/* Direct Phone Call Option Card */}
            <div className="bg-[#151C2C] text-white border border-[#25324C] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="text-sm font-bold text-white flex items-center justify-center sm:justify-start gap-1.5">
                  <PhoneCall className="w-4 h-4 text-[#D7AE66]" />
                  <span>전화로 지금 즉시 물어보기</span>
                </h4>
                <p className="text-xs text-slate-300">
                  신청서 작성 없이 전화 통화로 3분 만에 가능 여부를 확인하세요.
                </p>
              </div>

              <a
                href="tel:050369821000"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#D7AE66] hover:bg-[#e4c281] text-[#151C2C] font-black text-xs sm:text-sm text-center transition-colors shrink-0"
              >
                0503-6982-1000 바로 통화
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
