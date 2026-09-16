import React from 'react';
import { Lock, PhoneCall, ArrowRight, ShieldCheck } from 'lucide-react';

interface HomeCounselMidCtaSectionProps {
  onOpenQuickCounsel: () => void;
}

export const HomeCounselMidCtaSection: React.FC<HomeCounselMidCtaSectionProps> = ({
  onOpenQuickCounsel,
}) => {
  return (
    <section id="home-counsel-mid-cta-section" className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
      <div className="bg-white border border-[#E5E7EB] rounded-3xl p-6 sm:p-10 shadow-xs hover:border-[#D7AE66]/60 transition-all">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Text Info */}
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F8FA] border border-gray-200 text-[#151C2C] text-xs font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D7AE66]" />
              <span>전담 변호사 직접 사건 검토</span>
            </div>
            {/* Title (User requirement) */}
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#151C2C] tracking-tight">
              현재 상황을 정확하게 확인하고 싶다면 상담을 받아보세요.
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 max-w-2xl leading-relaxed">
              채무 규모와 소득 상황에 따라 최적의 탕감률과 월 변제금이 달라집니다.
              초기 상담 비용 없이, 전화 또는 온라인으로 100% 비공개 상담을 제공합니다.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
            {/* Phone Hotline */}
            <a
              href="tel:050369821000"
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-[#151C2C] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-[#D7AE66]" />
              <span>전화상담 0503-6982-1000</span>
            </a>

            {/* Counsel CTA (User requirement: '상담 신청하기') */}
            <button
              id="btn-mid-counsel-apply"
              onClick={onOpenQuickCounsel}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#151C2C] hover:bg-[#202B40] active:bg-[#0D121C] text-[#D7AE66] font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#D7AE66]/40"
            >
              <Lock className="w-4 h-4" />
              <span>상담 신청하기</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
