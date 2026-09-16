import React, { useState, useEffect } from 'react';
import { PageId, ConsultationFormData } from '../types';
import {
  ShieldCheck,
  Lock,
  PhoneCall,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Clock,
  HelpCircle,
  Sparkles,
  ArrowRight,
  Building,
  Check,
  AlertCircle,
  FileText,
} from 'lucide-react';

interface ConsultationViewProps {
  onNavigate: (page: PageId, subTab?: string) => void;
  prefillData?: Partial<ConsultationFormData>;
}

export const ConsultationView: React.FC<ConsultationViewProps> = ({
  onNavigate,
  prefillData,
}) => {
  // Current Step: 1 = 기본정보, 2 = 상황확인, 3 = 확인 및 동의, 4 = 완료
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form State
  const [formData, setFormData] = useState<ConsultationFormData>({
    name: prefillData?.name || '',
    phone: prefillData?.phone || '',
    callTime: prefillData?.callTime || '언제나 통화 가능',
    debtAmount: prefillData?.debtAmount || '5천만 ~ 1억 원',
    incomeType: prefillData?.incomeType || '정기 소득 있음 (급여/사업/아르바이트)',
    overdueStatus: prefillData?.overdueStatus || '연체 전 (정상 상환 중이나 버거움)',
    counselWish: prefillData?.counselWish || '월 변제금 낮추기',
    notes: prefillData?.notes || '',
    agreePrivacy: true,
  });

  // Validation Error States
  const [nameError, setNameError] = useState<string>('');
  const [phoneError, setPhoneError] = useState<string>('');
  const [privacyError, setPrivacyError] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Auto-format Korean phone numbers (e.g. 010-1234-5678)
  const formatPhoneNumber = (value: string) => {
    const raw = value.replace(/[^0-9]/g, '');
    if (raw.length <= 3) return raw;
    if (raw.length <= 7) return `${raw.slice(0, 3)}-${raw.slice(3)}`;
    return `${raw.slice(0, 3)}-${raw.slice(3, 7)}-${raw.slice(7, 11)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData((prev) => ({ ...prev, phone: formatted }));
    if (phoneError) setPhoneError('');
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, name: e.target.value }));
    if (nameError) setNameError('');
  };

  // Step 1 Validation
  const validateStep1 = (): boolean => {
    let isValid = true;
    if (!formData.name.trim()) {
      setNameError('상담 시 불러드릴 성함(또는 닉네임)을 입력해 주세요.');
      isValid = false;
    } else {
      setNameError('');
    }

    const rawPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!rawPhone || rawPhone.length < 10 || rawPhone.length > 11) {
      setPhoneError('연락 받으실 정확한 휴대폰 번호를 입력해 주세요.');
      isValid = false;
    } else {
      setPhoneError('');
    }

    return isValid;
  };

  const handleNextToStep2 = () => {
    if (validateStep1()) {
      setCurrentStep(2);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNextToStep3 = () => {
    setCurrentStep(3);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreePrivacy) {
      setPrivacyError('상담 진행을 위해 개인정보 수집 및 이용에 동의해 주세요.');
      return;
    }
    setPrivacyError('');
    setIsSubmitting(true);

    // Simulate safe dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setCurrentStep(4);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 600);
  };

  // Options for Step 2
  const debtOptions = [
    { label: '3,000만 원 미만', desc: '소액 채무 조정 검토' },
    { label: '3,000만 ~ 5,000만 원', desc: '일반적인 개인회생 신청 구간' },
    { label: '5,000만 ~ 1억 원', desc: '가장 많은 회생 인가 구간' },
    { label: '1억 ~ 3억 원', desc: '체계적인 변제계획안 설계 필요' },
    { label: '3억 원 이상', desc: '고액 채무 맞춤 회생/파산' },
  ];

  const incomeOptions = [
    {
      id: 'regular',
      label: '정기 소득 있음',
      desc: '직장인, 아르바이트, 프리랜서 등 매월 수입 발생 (개인회생 유리)',
    },
    {
      id: 'business',
      label: '사업 소득 있음',
      desc: '개인사업자, 자영업, 법인 대표 (매출 소명 준비)',
    },
    {
      id: 'none',
      label: '현재 소득 없음',
      desc: '구직 중, 질병·장애, 고령, 주부 (개인파산 또는 취업 후 회생)',
    },
  ];

  const overdueOptions = [
    {
      label: '연체 전 (정상 상환 중)',
      sub: '돌려막기 중이거나 곧 연체될 것 같아요',
    },
    {
      label: '최근 연체 시작 (30일 이내)',
      sub: '금융기관 독촉 전화가 오기 시작했어요',
    },
    {
      label: '장기 연체 중 (90일 이상 / 압류 진행)',
      sub: '통장·급여가 압류되었거나 지급명령을 받았어요',
    },
  ];

  const counselWishOptions = [
    '매달 갚는 원리금 부담 낮추기',
    '독촉 전화 및 자택 방문 즉시 중단',
    '급여·통장 압류 해제 및 생활비 보장',
    '소득이 없어 전액 탕감(파산 면책) 희망',
    '가족이나 직장 모르게 조용히 해결',
  ];

  const callTimeOptions = [
    '언제나 통화 가능',
    '오전 (09:00 ~ 12:00)',
    '오후 (13:00 ~ 18:00)',
    '퇴근 후 (18:00 ~ 20:00)',
    '통화 전 문자 먼저 희망',
  ];

  return (
    <div className="min-h-screen bg-[#F7F8FA] pb-24 animate-fadeIn">
      {/* 1. Trust Header Banner */}
      <section className="bg-[#151C2C] text-white pt-10 pb-12 sm:pt-14 sm:pb-16 px-4 sm:px-6 border-b border-[#25324C]">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1D273B] border border-[#D7AE66]/40 text-[#D7AE66] text-xs font-semibold">
            <Lock className="w-3.5 h-3.5" />
            <span>신용조회 기록 무 · 100% 비공개 안심상담</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
            현재 상황을 알려주시면<br className="sm:hidden" />
            상담을 통해 가능한 방법을 안내해드립니다.
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed pt-1">
            복잡한 서류 없이도 대략적인 상황만으로 회생·파산 가능성을 친절하게 진단해 드립니다.
            가족이나 직장에 일체 통보되지 않으니 안심하세요.
          </p>

          {/* Trust Guarantees */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-4 text-xs text-slate-300">
            <div className="flex items-center gap-1.5 bg-[#1D273B]/70 px-3 py-1.5 rounded-lg border border-slate-700/60">
              <ShieldCheck className="w-4 h-4 text-[#D7AE66]" />
              <span>신용점수 영향 없음</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#1D273B]/70 px-3 py-1.5 rounded-lg border border-slate-700/60">
              <Lock className="w-4 h-4 text-[#D7AE66]" />
              <span>변호사 비밀유지의무 준수</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#1D273B]/70 px-3 py-1.5 rounded-lg border border-slate-700/60">
              <Clock className="w-4 h-4 text-[#D7AE66]" />
              <span>비용 없는 1:1 사전 진단</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Content Area */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 -mt-6">
        {/* Step Indicator Card */}
        {currentStep < 4 && (
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-4 sm:p-5 shadow-sm mb-6">
            <div className="flex items-center justify-between text-xs mb-2.5">
              <span className="font-bold text-[#151C2C]">
                {currentStep === 1 && '1단계 : 기본정보 입력'}
                {currentStep === 2 && '2단계 : 채무 및 소득 상황 확인'}
                {currentStep === 3 && '3단계 : 신청 내용 확인 및 동의'}
              </span>
              <span className="text-[#D7AE66] font-extrabold font-mono text-xs">
                STEP {currentStep} / 3
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-[#D7AE66] to-[#c59c53] h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / 3) * 100}%` }}
              />
            </div>

            {/* Step Labels (Desktop) */}
            <div className="hidden sm:grid grid-cols-3 gap-2 mt-3 text-[11px] text-center font-medium">
              <span className={currentStep >= 1 ? 'text-[#D7AE66] font-bold' : 'text-gray-400'}>
                1. 기본정보
              </span>
              <span className={currentStep >= 2 ? 'text-[#D7AE66] font-bold' : 'text-gray-400'}>
                2. 상황확인
              </span>
              <span className={currentStep >= 3 ? 'text-[#D7AE66] font-bold' : 'text-gray-400'}>
                3. 신청완료
              </span>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* STEP 1: 기본정보 (이름, 연락처, 연락 희망 시간) */}
        {/* ------------------------------------------------------------------ */}
        {currentStep === 1 && (
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-gray-100 pb-4">
              <h2 className="text-lg sm:text-xl font-bold text-[#151C2C] flex items-center gap-2">
                <span>상담을 받으실 연락처를 알려주세요</span>
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                신용조회나 광고성 스팸 전화가 아니며, 신청하신 내용에 대한 법률적 검토 결과만 조용히 전해드립니다.
              </p>
            </div>

            <div className="space-y-5">
              {/* Name Field */}
              <div>
                <label className="block text-xs font-bold text-[#151C2C] mb-1.5">
                  성함 (가명/닉네임도 괜찮습니다) <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="예: 홍길동 (또는 편하신 호칭)"
                  value={formData.name}
                  onChange={handleNameChange}
                  className={`w-full px-4 py-3 text-sm rounded-xl border bg-gray-50/50 transition-all focus:outline-none focus:bg-white ${
                    nameError
                      ? 'border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-200'
                      : 'border-gray-300 focus:border-[#D7AE66] focus:ring-1 focus:ring-[#D7AE66]/30'
                  }`}
                />
                {nameError ? (
                  <p className="text-xs text-rose-500 mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{nameError}</span>
                  </p>
                ) : (
                  <p className="text-[11px] text-gray-600 mt-1">
                    실명이 부담스러우시다면 성함의 일부분이나 가명을 적어주셔도 상담이 가능합니다.
                  </p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-xs font-bold text-[#151C2C] mb-1.5">
                  연락처 (휴대폰 번호) <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  inputMode="numeric"
                  placeholder="010-0000-0000"
                  maxLength={13}
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  className={`w-full px-4 py-3 text-sm rounded-xl border bg-gray-50/50 font-mono transition-all focus:outline-none focus:bg-white ${
                    phoneError
                      ? 'border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-200'
                      : 'border-gray-300 focus:border-[#D7AE66] focus:ring-1 focus:ring-[#D7AE66]/30'
                  }`}
                />
                {phoneError ? (
                  <p className="text-xs text-rose-500 mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{phoneError}</span>
                  </p>
                ) : (
                  <p className="text-[11px] text-gray-600 mt-1">
                    입력하신 번호로만 상담 안내가 발송되며, 제3자에게 절대 공유되지 않습니다.
                  </p>
                )}
              </div>

              {/* Call Time Preference */}
              <div>
                <label className="block text-xs font-bold text-[#151C2C] mb-2">
                  편하신 연락 시간대
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {callTimeOptions.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setFormData({ ...formData, callTime: time })}
                      className={`px-3 py-2.5 rounded-xl text-xs font-medium text-center border transition-all cursor-pointer ${
                        formData.callTime === time
                          ? 'bg-[#151C2C] text-[#D7AE66] border-[#151C2C] font-bold shadow-xs'
                          : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Next Button */}
            <div className="pt-3">
              <button
                type="button"
                onClick={handleNextToStep2}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D7AE66] to-[#c59c53] hover:from-[#e4c281] hover:to-[#D7AE66] text-[#151C2C] font-black text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>다음: 현재 상황 확인하기</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* STEP 2: 상황확인 (채무상황, 소득여부, 연체여부, 상담희망) */}
        {/* ------------------------------------------------------------------ */}
        {currentStep === 2 && (
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-8 shadow-sm space-y-7">
            <div className="border-b border-gray-100 pb-4">
              <h2 className="text-lg sm:text-xl font-bold text-[#151C2C]">
                현재 겪고 계신 상황을 간단히 체크해주세요
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                정확한 액수를 모르시더라도 대략적인 범위를 선택해주시면 가장 적합한 법적 제도를 맞춰드립니다.
              </p>
            </div>

            <div className="space-y-6">
              {/* 1. 채무 상황 */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-[#151C2C]">
                  1. 대략적인 총 채무액 (신용대출, 카드값, 사채 등 포함)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {debtOptions.map((opt) => {
                    const isSelected = formData.debtAmount === opt.label;
                    return (
                      <button
                        key={opt.label}
                        type="button"
                        onClick={() => setFormData({ ...formData, debtAmount: opt.label })}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? 'bg-amber-50/50 border-[#D7AE66] ring-1 ring-[#D7AE66]'
                            : 'bg-gray-50/60 border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div>
                          <div className={`text-xs font-bold ${isSelected ? 'text-[#151C2C]' : 'text-gray-800'}`}>
                            {opt.label}
                          </div>
                          <div className="text-[11px] text-gray-500 mt-0.5">{opt.desc}</div>
                        </div>
                        {isSelected && <Check className="w-4 h-4 text-[#D7AE66] shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. 소득 여부 */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-[#151C2C]">
                  2. 현재 소득 활동 여부
                </label>
                <div className="space-y-2">
                  {incomeOptions.map((opt) => {
                    const isSelected = formData.incomeType === opt.label;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, incomeType: opt.label })}
                        className={`w-full p-3 rounded-xl border text-left transition-all cursor-pointer flex items-start justify-between gap-2 ${
                          isSelected
                            ? 'bg-amber-50/50 border-[#D7AE66] ring-1 ring-[#D7AE66]'
                            : 'bg-gray-50/60 border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div>
                          <div className={`text-xs font-bold ${isSelected ? 'text-[#151C2C]' : 'text-gray-800'}`}>
                            {opt.label}
                          </div>
                          <div className="text-[11px] text-gray-500 mt-0.5">{opt.desc}</div>
                        </div>
                        {isSelected && <Check className="w-4 h-4 text-[#D7AE66] shrink-0 mt-0.5" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. 연체 여부 */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-[#151C2C]">
                  3. 현재 연체 상태
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {overdueOptions.map((opt) => {
                    const isSelected = formData.overdueStatus === opt.label;
                    return (
                      <button
                        key={opt.label}
                        type="button"
                        onClick={() => setFormData({ ...formData, overdueStatus: opt.label })}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? 'bg-amber-50/50 border-[#D7AE66] ring-1 ring-[#D7AE66]'
                            : 'bg-gray-50/60 border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div>
                          <div className={`text-xs font-bold ${isSelected ? 'text-[#151C2C]' : 'text-gray-800'}`}>
                            {opt.label}
                          </div>
                          <div className="text-[11px] text-gray-500">{opt.sub}</div>
                        </div>
                        {isSelected && <Check className="w-4 h-4 text-[#D7AE66] shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 4. 상담 희망 내용 */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-[#151C2C]">
                  4. 가장 중점적으로 상담받고 싶은 내용
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {counselWishOptions.map((wish) => {
                    const isSelected = formData.counselWish === wish;
                    return (
                      <button
                        key={wish}
                        type="button"
                        onClick={() => setFormData({ ...formData, counselWish: wish })}
                        className={`px-3 py-2 rounded-lg text-xs transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#151C2C] text-[#D7AE66] font-bold shadow-xs'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {wish}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-xs font-bold text-[#151C2C] mb-1">
                  남기실 말씀 (선택 사항)
                </label>
                <textarea
                  rows={2}
                  placeholder="예: 법원에서 지급명령 우편이 왔어요 / 가족에게 알리지 않고 진행하고 싶어요 등"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-gray-300 bg-gray-50/50 focus:outline-none focus:border-[#D7AE66] focus:bg-white resize-none"
                />
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className="w-1/3 py-4 rounded-xl border border-gray-300 hover:bg-gray-100 text-gray-700 font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>이전 단계</span>
              </button>

              <button
                type="button"
                onClick={handleNextToStep3}
                className="w-2/3 py-4 rounded-xl bg-gradient-to-r from-[#D7AE66] to-[#c59c53] hover:from-[#e4c281] hover:to-[#D7AE66] text-[#151C2C] font-black text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>다음: 신청 내용 확인</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* STEP 3: 신청 확인 및 개인정보 동의 */}
        {/* ------------------------------------------------------------------ */}
        {currentStep === 3 && (
          <form onSubmit={handleSubmit} className="bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-gray-100 pb-4">
              <h2 className="text-lg sm:text-xl font-bold text-[#151C2C]">
                입력하신 상담 정보를 확인해 주세요
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                작성하신 내용을 바탕으로 전문 변호사가 최적의 해결 방안을 미리 검토합니다.
              </p>
            </div>

            {/* Summary Review Card */}
            <div className="bg-[#F7F8FA] border border-gray-200 rounded-xl p-4 sm:p-5 space-y-3 text-xs">
              <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                <span className="text-gray-500 font-medium">신청자 성함</span>
                <span className="font-bold text-[#151C2C]">{formData.name} 님</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                <span className="text-gray-500 font-medium">안심 연락처</span>
                <span className="font-bold text-[#151C2C] font-mono">{formData.phone}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                <span className="text-gray-500 font-medium">연락 희망 시간</span>
                <span className="font-bold text-[#151C2C]">{formData.callTime}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                <span className="text-gray-500 font-medium">대략적인 채무액</span>
                <span className="font-bold text-[#D7AE66]">{formData.debtAmount}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                <span className="text-gray-500 font-medium">소득 상태</span>
                <span className="font-bold text-[#151C2C]">{formData.incomeType}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                <span className="text-gray-500 font-medium">연체 상태</span>
                <span className="font-bold text-[#151C2C]">{formData.overdueStatus}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 font-medium">희망 상담 주제</span>
                <span className="font-bold text-[#151C2C]">{formData.counselWish}</span>
              </div>
              {formData.notes && (
                <div className="pt-2 border-t border-gray-200 text-gray-600">
                  <span className="text-gray-400 block mb-1">남기신 말씀</span>
                  <p className="bg-white p-2 rounded border border-gray-200 leading-relaxed">
                    {formData.notes}
                  </p>
                </div>
              )}
            </div>

            {/* Privacy Agreement Box */}
            <div className="space-y-3 pt-1">
              <div className="bg-amber-50/40 border border-[#D7AE66]/30 rounded-xl p-4 text-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-[#151C2C]">
                  <Lock className="w-4 h-4 text-[#D7AE66]" />
                  <span>개인정보 안심 처리 방침</span>
                </div>
                <p className="text-[11px] text-gray-600 leading-relaxed">
                  • 수집 항목: 성함, 연락처, 상담 희망 정보<br />
                  • 수집 목적: 비공개 맞춤 법률 상담 및 채무 조정 진단 제공<br />
                  • 보유 기간: 상담 종료 후 즉시 파기 또는 의뢰인 요청 시 즉각 영구 삭제<br />
                  • 본 상담 정보는 신용평가기관에 일체 제공되지 않으며 신용점수와 무관합니다.
                </p>
              </div>

              <label className="flex items-start gap-2.5 p-3 rounded-xl border border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors">
                <input
                  type="checkbox"
                  checked={formData.agreePrivacy}
                  onChange={(e) => {
                    setFormData({ ...formData, agreePrivacy: e.target.checked });
                    if (privacyError) setPrivacyError('');
                  }}
                  className="mt-0.5 w-4 h-4 text-[#D7AE66] rounded border-gray-300 focus:ring-[#D7AE66]"
                />
                <span className="text-xs text-[#151C2C] font-bold">
                  [필수] 개인정보 수집 및 비공개 법률 상담 제공에 동의합니다.
                </span>
              </label>

              {privacyError && (
                <p className="text-xs text-rose-500 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{privacyError}</span>
                </p>
              )}
            </div>

            {/* Final Action Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                className="w-1/3 py-4 rounded-xl border border-gray-300 hover:bg-gray-100 text-gray-700 font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>수정하기</span>
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-2/3 py-4 rounded-xl bg-gradient-to-r from-[#D7AE66] to-[#c59c53] hover:from-[#e4c281] hover:to-[#D7AE66] text-[#151C2C] font-black text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span>안전하게 접수 중...</span>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>상담 신청하기</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* STEP 4: 신청 완료 화면 (Success View) */}
        {/* ------------------------------------------------------------------ */}
        {currentStep === 4 && (
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-10 shadow-sm text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-xs">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-black text-[#151C2C]">
                상담 신청이 접수되었습니다.
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
                <strong className="text-[#151C2C] font-bold">{formData.name}</strong> 님의 상황을 전담 변호인단이 안전하게 전달받았습니다.
                요청하신 <span className="text-[#D7AE66] font-bold">[{formData.callTime}]</span> 시간대에 안심 연락처로 조용히 연락드리겠습니다.
              </p>
            </div>

            {/* Caller Number Reassurance Box */}
            <div className="bg-[#F7F8FA] border border-gray-200 rounded-xl p-4 max-w-md mx-auto text-xs text-gray-600 space-y-1 text-left">
              <div className="font-bold text-[#151C2C] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#D7AE66]" />
                <span>발신 번호 안내</span>
              </div>
              <p className="text-[11px] text-gray-500 leading-relaxed">
                스팸 차단 앱에 따라 법률사무소 번호가 차단되지 않도록 유의해 주세요.
                발신 번호는 <strong>0503-6982-1000</strong>으로 표시됩니다.
              </p>
            </div>

            {/* Direct Phone Call CTA */}
            <div className="bg-[#151C2C] text-white rounded-2xl p-5 sm:p-6 max-w-md mx-auto space-y-3">
              <span className="text-[10px] font-bold text-[#D7AE66] tracking-wider uppercase">
                FAST TRACK
              </span>
              <h3 className="text-base font-bold text-white">
                지금 바로 통화로 안내받고 싶으신가요?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                기다리지 않고 지금 즉시 전문 상담원과 직통으로 연결됩니다.
              </p>
              <div className="pt-1">
                <a
                  href="tel:050369821000"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#D7AE66] hover:bg-[#e4c281] text-[#151C2C] font-black text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>대표전화 0503-6982-1000 바로 통화</span>
                </a>
              </div>
              <div className="text-[10px] text-slate-400">
                평일 09:00 ~ 20:00 · 통화료 무료 · 비밀 보장
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => onNavigate('home')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 text-xs font-bold text-gray-700 cursor-pointer transition-colors"
              >
                홈으로 돌아가기
              </button>

              <button
                type="button"
                onClick={() => onNavigate('diagnosis')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-xs font-bold text-gray-800 cursor-pointer transition-colors"
              >
                1분 자가진단 해보기
              </button>
            </div>
          </div>
        )}

        {/* 3. Reassurance Footer Notes */}
        <div className="mt-8 text-center text-xs text-gray-500 space-y-1">
          <p>
            진주개인파산 지원센터 | 경상남도 진주시 (창원지방법원 진주지원 관할)
          </p>
          <p className="text-[11px] text-gray-400">
            상담 내용 및 개인정보는 관련 법령에 의거하여 비밀이 철저하게 보장됩니다.
          </p>
        </div>
      </div>
    </div>
  );
};
