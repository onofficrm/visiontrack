import React, { useState } from 'react';
import { Lock, PhoneCall, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

interface HomeFinalCtaSectionProps {
  onOpenQuickCounsel: () => void;
}

export const HomeFinalCtaSection: React.FC<HomeFinalCtaSectionProps> = ({ onOpenQuickCounsel }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    debt: '3천만 ~ 5천만 원',
    agree: true,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.agree) {
      alert('성함과 연락처를 입력하고 개인정보 처리 동의에 체크해 주세요.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="home-final-cta-section" className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <div className="bg-[#151C2C] text-white rounded-3xl p-6 sm:p-10 lg:p-14 relative overflow-hidden border border-[#2A3750] shadow-2xl">
        {/* Subtle Decorative Ambience */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D7AE66]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Reassurance & Headline */}
          <div className="lg:col-span-6 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1E293B] border border-[#D7AE66]/40 text-[#D7AE66] text-xs font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>100% 비공개 안심 무료상담</span>
            </div>

            {/* Headline (User requirement) */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
              혼자 판단하기 어려운 상황이라면<br />
              <span className="text-[#D7AE66]">현재 상황부터 차근차근</span> 확인해보세요.
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
              채무 독촉으로 인한 두려움과 막막함, 더 이상 혼자 끙끙 앓지 않으셔도 됩니다.
              전문 변호인단이 가족과 직장 모르게 합법적인 해결책을 찾아드립니다.
            </p>

            {/* Reassurance Badges */}
            <div className="space-y-2 pt-2 text-xs text-slate-300 max-w-md mx-auto lg:mx-0">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-[#D7AE66] shrink-0" />
                <span>신용조회 기록이 전혀 남지 않는 안심 상담</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-[#D7AE66] shrink-0" />
                <span>초기 상담 비용 0원 · 무리한 수임 권유 절대 없음</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-[#D7AE66] shrink-0" />
                <span>우편물 대리 수령으로 집으로 법원 서류 발송 차단</span>
              </div>
            </div>

            {/* Direct Phone Call Button */}
            <div className="pt-2">
              <a
                href="tel:050369821000"
                className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-[#D7AE66] transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-[#D7AE66]" />
                <span>전화가 더 편하신가요? <strong>대표전화 0503-6982-1000</strong> (주말·야간 상담 가능)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Inline Quick Counsel Form */}
          <div className="lg:col-span-6 bg-white text-gray-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-[#151C2C]">
                  상담 신청이 정상적으로 접수되었습니다
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  입력해주신 연락처로 전담 법률 매니저가 가족/직장 비밀을 준수하여 조용히 연락드리겠습니다.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-xs font-semibold rounded-lg text-gray-700"
                >
                  추가 접수하기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="border-b border-gray-100 pb-2">
                  <h3 className="text-base font-extrabold text-[#151C2C]">
                    1분 간편 비공개 상담 신청
                  </h3>
                  <p className="text-[11px] text-gray-500">
                    간단한 정보만 남겨주시면 전담 매니저가 조용히 상담을 도와드립니다.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#222222] mb-1">
                    성함 (또는 가명)
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="성함 또는 닉네임 입력"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#D7AE66] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#222222] mb-1">
                    안심 연락처 (전화번호)
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="010-0000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#D7AE66] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#222222] mb-1">
                    대략적인 총 채무 규모
                  </label>
                  <select
                    value={formData.debt}
                    onChange={(e) => setFormData({ ...formData, debt: e.target.value })}
                    className="w-full px-3 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#D7AE66] focus:bg-white"
                  >
                    <option value="1천만 ~ 3천만 원">1,000만 ~ 3,000만 원</option>
                    <option value="3천만 ~ 5천만 원">3,000만 ~ 5,000만 원</option>
                    <option value="5천만 ~ 1억 원">5,000만 ~ 1억 원</option>
                    <option value="1억 ~ 3억 원">1억 ~ 3억 원</option>
                    <option value="3억 원 이상">3억 원 이상</option>
                  </select>
                </div>

                <div className="pt-1">
                  <label className="flex items-start gap-2 text-[11px] text-gray-600 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.agree}
                      onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                      className="mt-0.5 w-3.5 h-3.5 text-[#D7AE66] rounded border-gray-300"
                    />
                    <span>[필수] 상담 목적의 개인정보 수집 및 비공개 연락에 동의합니다.</span>
                  </label>
                </div>

                {/* Final CTA Button (User requirement: '상담 신청') */}
                <button
                  type="submit"
                  id="btn-final-counsel-submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#D7AE66] to-[#C59C53] hover:from-[#e4c281] hover:to-[#D7AE66] text-[#151C2C] font-black text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                >
                  <Lock className="w-4 h-4 text-[#151C2C]" />
                  <span>상담 신청</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
