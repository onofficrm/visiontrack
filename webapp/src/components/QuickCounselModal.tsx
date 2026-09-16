import React, { useState } from 'react';
import { X, Lock, ShieldCheck, CheckCircle2, Phone, Clock, ArrowRight, ExternalLink } from 'lucide-react';
import { PageId } from '../types';

interface QuickCounselModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (page: PageId) => void;
}

export const QuickCounselModal: React.FC<QuickCounselModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    callTime: '언제든 가능',
    serviceType: '잘 모름(진단필요)',
    estimatedDebt: '3천만~5천만원',
    notes: '',
    agreePrivacy: true,
  });

  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  if (!isOpen) return null;

  const formatPhoneNumber = (value: string) => {
    const raw = value.replace(/[^0-9]/g, '');
    if (raw.length <= 3) return raw;
    if (raw.length <= 7) return `${raw.slice(0, 3)}-${raw.slice(3)}`;
    return `${raw.slice(0, 3)}-${raw.slice(3, 7)}-${raw.slice(7, 11)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, phone: formatPhoneNumber(e.target.value) });
    if (phoneError) setPhoneError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let hasErr = false;
    if (!formData.name.trim()) {
      setNameError('성함 또는 닉네임을 입력해 주세요.');
      hasErr = true;
    }
    const rawPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!rawPhone || rawPhone.length < 10) {
      setPhoneError('정확한 휴대폰 번호를 입력해 주세요.');
      hasErr = true;
    }
    if (!formData.agreePrivacy) {
      alert('개인정보 수집 및 상담 제공에 동의해 주세요.');
      hasErr = true;
    }
    if (hasErr) return;

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="bg-[#151C2C] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 text-gray-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-[#D7AE66] text-xs font-semibold uppercase tracking-wider mb-2">
            <Lock className="w-4 h-4" />
            <span>100% 철저한 비밀보장 · 무료 법률상담</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-1">
            혼자 고민하지 마세요. 조용히 도와드립니다
          </h3>
          <p className="text-xs text-slate-300">
            가족·직장에 절대 알리지 않으며, 신용도 조회 기록이 전혀 남지 않습니다.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-[#EBFBEE] text-[#2B8A3E] rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-xl font-bold text-[#151C2C]">
                안심 비밀상담 신청이 접수되었습니다
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed max-w-sm mx-auto">
                <strong className="text-gray-900">{formData.name}</strong> 님, 신청해 주셔서 감사합니다.<br />
                선택하신 <strong className="text-[#D7AE66] font-semibold">[{formData.callTime}]</strong> 시간대에 전담 법률 매니저가 안심 비공개로 조용히 연락드리겠습니다.
              </p>
              <div className="bg-[#F7F8FA] border border-gray-200 rounded-xl p-4 text-xs text-left text-gray-600 space-y-1.5 max-w-sm mx-auto">
                <div className="flex items-center gap-2 text-[#151C2C] font-semibold">
                  <ShieldCheck className="w-4 h-4 text-[#D7AE66]" />
                  <span>진행 약속</span>
                </div>
                <p>• 통화 시 법률사무소 명칭 대신 의뢰인이 편안한 방식으로 신분을 밝힙니다.</p>
                <p>• 초기 상담 비용은 100% 전액 무료이며 강요나 부담을 드리지 않습니다.</p>
              </div>
              <button
                onClick={handleReset}
                className="w-full py-3 rounded-xl bg-[#151C2C] text-white font-bold text-sm hover:bg-[#1f293d] transition-colors"
              >
                확인 및 닫기
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#222222] mb-1.5">
                    성함 또는 가명 <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="예: 홍길동 (가명 가능)"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (nameError) setNameError('');
                    }}
                    className={`w-full px-3.5 py-2.5 bg-gray-50 border rounded-xl text-sm focus:outline-none focus:bg-white transition-colors ${
                      nameError ? 'border-rose-400 focus:border-rose-500' : 'border-gray-300 focus:border-[#D7AE66]'
                    }`}
                  />
                  {nameError && <p className="text-[11px] text-rose-500 mt-1">{nameError}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#222222] mb-1.5">
                    안심 연락처 <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    inputMode="numeric"
                    placeholder="010-0000-0000"
                    maxLength={13}
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    className={`w-full px-3.5 py-2.5 bg-gray-50 border rounded-xl text-sm font-mono focus:outline-none focus:bg-white transition-colors ${
                      phoneError ? 'border-rose-400 focus:border-rose-500' : 'border-gray-300 focus:border-[#D7AE66]'
                    }`}
                  />
                  {phoneError && <p className="text-[11px] text-rose-500 mt-1">{phoneError}</p>}
                </div>
              </div>

              {/* Service Type Selection */}
              <div>
                <label className="block text-xs font-semibold text-[#222222] mb-1.5">
                  관심 분야
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['개인회생', '개인파산', '잘 모름(진단필요)'] as const).map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setFormData({ ...formData, serviceType: type })}
                      className={`py-2 px-2 text-xs font-medium rounded-lg border text-center transition-all ${
                        formData.serviceType === type
                          ? 'border-[#D7AE66] bg-[#D7AE66]/15 text-[#151C2C] font-bold shadow-xs'
                          : 'border-gray-200 bg-gray-50 text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Estimated Debt */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#222222] mb-1.5">
                    대략적인 총 채무액
                  </label>
                  <select
                    value={formData.estimatedDebt}
                    onChange={(e) => setFormData({ ...formData, estimatedDebt: e.target.value })}
                    className="w-full px-3 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#D7AE66] focus:bg-white"
                  >
                    <option value="1천만~3천만원">1,000만 ~ 3,000만 원</option>
                    <option value="3천만~5천만원">3,000만 ~ 5,000만 원</option>
                    <option value="5천만~1억원">5,000만 ~ 1억 원</option>
                    <option value="1억~3억원">1억 ~ 3억 원</option>
                    <option value="3억원 이상">3억 원 이상</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#222222] mb-1.5">
                    통화 편한 시간대
                  </label>
                  <select
                    value={formData.callTime}
                    onChange={(e) => setFormData({ ...formData, callTime: e.target.value })}
                    className="w-full px-3 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#D7AE66] focus:bg-white"
                  >
                    <option value="언제든 가능">언제든 가능</option>
                    <option value="오전 (09:00~12:00)">오전 (09:00~12:00)</option>
                    <option value="점심 (12:00~14:00)">점심시간 (12:00~14:00)</option>
                    <option value="오후 (14:00~18:00)">오후 (14:00~18:00)</option>
                    <option value="야간 (18:00~21:00)">야간 (18:00~21:00)</option>
                    <option value="문자/카톡 먼저 희망">문자/카톡 먼저 희망</option>
                  </select>
                </div>
              </div>

              {/* Short Note */}
              <div>
                <label className="block text-xs font-semibold text-[#222222] mb-1.5">
                  현재 가장 힘든 점이나 남기실 말씀 (선택)
                </label>
                <textarea
                  rows={2}
                  placeholder="예: 독촉 전화가 너무 심합니다 / 가족 몰래 하고 싶어요 / 압류될까 두렵습니다"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#D7AE66] focus:bg-white"
                ></textarea>
              </div>

              {/* Privacy Consent Checkbox */}
              <div className="pt-1">
                <label className="flex items-start gap-2 text-xs text-gray-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.agreePrivacy}
                    onChange={(e) => setFormData({ ...formData, agreePrivacy: e.target.checked })}
                    className="mt-0.5 w-4 h-4 rounded text-[#D7AE66] focus:ring-[#D7AE66] border-gray-300"
                  />
                  <span>
                    [필수] 개인정보 수집 및 상담 목적 연락에 동의합니다. (상담 완료 후 요청 시 즉시 파기)
                  </span>
                </label>
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl bg-[#D7AE66] hover:bg-[#c59c53] active:bg-[#b58d46] text-[#151C2C] font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
              >
                <Lock className="w-4 h-4" />
                <span>비공개 무료상담 신청하기</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {onNavigate && (
                <div className="pt-1 text-center">
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onNavigate('consultation');
                    }}
                    className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-[#151C2C] underline decoration-gray-300 hover:decoration-[#D7AE66] transition-colors cursor-pointer"
                  >
                    <span>상황별 맞춤 3단계 정밀 신청 페이지로 이동</span>
                    <ExternalLink className="w-3 h-3 text-[#D7AE66]" />
                  </button>
                </div>
              )}

              <div className="text-center text-[11px] text-gray-500">
                🔒 제출된 정보는 암호화 처리되며 신용평가기관에 일체 통보되지 않습니다.
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
