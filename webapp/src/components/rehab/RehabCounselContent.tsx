import React, { useState } from 'react';
import {
  Lock,
  PhoneCall,
  CheckCircle2,
  ShieldCheck,
  Send,
  AlertCircle,
  MessageSquare,
  Clock,
} from 'lucide-react';

export const RehabCounselContent: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    debtAmount: '3천만 ~ 5천만 원',
    incomeType: '직장인 (급여소득)',
    hasAssets: '채무가 더 많음',
    callTime: '언제나 가능',
    message: '',
    agreePrivacy: true,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.agreePrivacy) {
      alert('성함, 안심 연락처를 입력하시고 개인정보 수집에 동의해 주세요.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="space-y-10 animate-fadeIn">
      {/* Top Banner Box */}
      <section className="bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-[#D7AE66]/40 text-[#151C2C] text-xs font-bold">
            <Lock className="w-3.5 h-3.5 text-[#D7AE66]" />
            <span>100% 비공개 상담</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#151C2C] tracking-tight">
            개인회생 맞춤 1:1 비공개 상담 신청
          </h2>
          <p className="text-xs text-gray-600 leading-relaxed">
            신용조회 기록이 남지 않으며, 가족이나 직장에 알려지지 않도록 철저한 보안 원칙하에 상담을 진행합니다.
          </p>
        </div>

        {/* 3대 보안 수칙 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2.5 text-xs text-gray-700">
            <CheckCircle2 className="w-4 h-4 text-[#D7AE66] shrink-0" />
            <span>상담 기록 즉시 암호화 파기</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-gray-700">
            <CheckCircle2 className="w-4 h-4 text-[#D7AE66] shrink-0" />
            <span>가족·직장 통보 절대 없음</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-gray-700">
            <CheckCircle2 className="w-4 h-4 text-[#D7AE66] shrink-0" />
            <span>초기 상담 비용 0원 무료</span>
          </div>
        </div>
      </section>

      {/* Consultation Form & Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Interactive Form */}
        <div className="lg:col-span-7 bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-8 shadow-xs">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#151C2C]">
                개인회생 상담 신청이 접수되었습니다
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                안심 연락처로 전담 변호사 및 수석 매니저가 조용히 연락드리겠습니다. (발신번호가 법률사무소로 노출되지 않도록 안심 콜백 지원)
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-xs font-bold rounded-xl text-gray-700 cursor-pointer"
              >
                다른 내용으로 추가 문의하기
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-base font-bold text-[#151C2C] border-b border-gray-100 pb-3 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#D7AE66]" />
                <span>회생 상담 세부 정보 입력</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    성함 (가명 가능) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="홍길동"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-xs focus:outline-none focus:border-[#D7AE66] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    안심 연락처 <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="010-0000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-xs focus:outline-none focus:border-[#D7AE66] focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    현재 소득 형태
                  </label>
                  <select
                    value={formData.incomeType}
                    onChange={(e) => setFormData({ ...formData, incomeType: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-xs focus:outline-none focus:border-[#D7AE66] focus:bg-white"
                  >
                    <option value="직장인 (급여소득)">직장인 (급여소득/4대보험)</option>
                    <option value="개인사업자 (자영업)">개인사업자 (자영업/프리랜서)</option>
                    <option value="일용직/아르바이트">일용직 / 아르바이트</option>
                    <option value="주부/취업준비생">주부 / 취업준비생</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    대략적인 총 채무액
                  </label>
                  <select
                    value={formData.debtAmount}
                    onChange={(e) => setFormData({ ...formData, debtAmount: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-xs focus:outline-none focus:border-[#D7AE66] focus:bg-white"
                  >
                    <option value="1천만 ~ 3천만 원">1,000만 ~ 3,000만 원</option>
                    <option value="3천만 ~ 5천만 원">3,000만 ~ 5,000만 원</option>
                    <option value="5천만 ~ 1억 원">5,000만 ~ 1억 원</option>
                    <option value="1억 ~ 3억 원">1억 ~ 3억 원</option>
                    <option value="3억 원 이상">3억 원 이상</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  편하신 통화 가능 시간대
                </label>
                <select
                  value={formData.callTime}
                  onChange={(e) => setFormData({ ...formData, callTime: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-xs focus:outline-none focus:border-[#D7AE66] focus:bg-white"
                >
                  <option value="언제나 가능">언제나 가능 (빠른 연락 희망)</option>
                  <option value="오전 (09:00 ~ 12:00)">오전 (09:00 ~ 12:00)</option>
                  <option value="점심시간 (12:00 ~ 13:00)">점심시간 (12:00 ~ 13:00)</option>
                  <option value="오후 (13:00 ~ 18:00)">오후 (13:00 ~ 18:00)</option>
                  <option value="퇴근 후 (18:00 ~ 21:00)">퇴근 후 (18:00 ~ 21:00)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  남기실 말씀 (선택)
                </label>
                <textarea
                  rows={3}
                  placeholder="예: 카드 대금 독촉으로 힘들어요 / 최근 코인 투자 채무가 많아요 등 편하게 적어주세요."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-xs focus:outline-none focus:border-[#D7AE66] focus:bg-white"
                />
              </div>

              <div className="pt-2">
                <label className="flex items-start gap-2 text-xs text-gray-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.agreePrivacy}
                    onChange={(e) => setFormData({ ...formData, agreePrivacy: e.target.checked })}
                    className="mt-0.5 w-4 h-4 text-[#D7AE66] rounded border-gray-300"
                  />
                  <span>[필수] 개인정보 수집 및 비공개 법률 상담 제공에 동의합니다.</span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D7AE66] to-[#C59C53] hover:from-[#e4c281] hover:to-[#D7AE66] text-[#151C2C] font-black text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Lock className="w-4 h-4" />
                <span>개인회생 비공개 무료상담 신청</span>
              </button>
            </form>
          )}
        </div>

        {/* Right: Contact Support Box */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-[#151C2C] text-white rounded-2xl p-6 sm:p-7 space-y-4">
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-[#D7AE66]" />
              <span>전화 상담이 더 편하신가요?</span>
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              긴 양식 입력 없이, 지금 바로 대표전화로 전화 주시면 전담 매니저가 친절하게 상담해 드립니다.
            </p>
            <div className="pt-2">
              <a
                href="tel:050369821000"
                className="block text-center py-3 rounded-xl bg-[#D7AE66] hover:bg-[#e4c281] text-[#151C2C] font-black text-base transition-colors"
              >
                대표전화 0503-6982-1000
              </a>
            </div>
            <div className="text-[11px] text-slate-400 space-y-1 pt-2">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#D7AE66]" />
                <span>평일 09:00 ~ 20:00 (야간/주말 당직 상담 운영)</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 space-y-3 text-xs text-gray-600">
            <h4 className="font-bold text-sm text-[#151C2C] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#D7AE66]" />
              <span>진주개인파산·회생 상담 보장 약속</span>
            </h4>
            <ul className="space-y-2 text-[11px] leading-relaxed">
              <li className="flex items-start gap-1.5">
                <span className="text-[#D7AE66] font-bold">✓</span>
                <span>무리한 사건 수임을 절대 강요하지 않습니다.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-[#D7AE66] font-bold">✓</span>
                <span>상담을 받는 것만으로는 어떠한 신용등급 하락도 발생하지 않습니다.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-[#D7AE66] font-bold">✓</span>
                <span>회생보다 파산 또는 워크아웃이 유리한 경우 솔직하게 안내합니다.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
