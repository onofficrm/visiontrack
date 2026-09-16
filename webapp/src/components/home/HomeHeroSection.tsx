import React from 'react';
import { PageId } from '../../types';
import { Lock, Calculator, ArrowRight, ShieldCheck, CheckCircle2, PhoneCall } from 'lucide-react';

interface HomeHeroSectionProps {
  onNavigate: (page: PageId) => void;
  onOpenQuickCounsel: () => void;
}

export const HomeHeroSection: React.FC<HomeHeroSectionProps> = ({
  onNavigate,
  onOpenQuickCounsel,
}) => {
  return (
    <section
      id="home-hero-section"
      className="relative bg-[#151C2C] text-white pt-10 pb-16 lg:py-20 px-4 sm:px-6 overflow-hidden border-b border-[#222E46]"
    >
      {/* Background Ambience Layer */}
      <div className="absolute inset-0 opacity-15 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 rounded-full bg-[#D7AE66] blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-80 h-80 rounded-full bg-slate-700 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Reassurance Chip */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E293B] border border-[#D7AE66]/50 text-[#D7AE66] text-xs font-semibold">
              <Lock className="w-3.5 h-3.5 shrink-0" />
              <span>100% 비공개 상담 · 가족·직장 통보 없이 안전하게 진행</span>
            </div>

            {/* Main Headline (User requirement: empathetic, non-sensational) */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.25]">
                혼자 고민하지 마세요.<br />
                <span className="text-[#D7AE66]">진주개인파산·회생</span>, 지금부터 차근차근 알아보세요.
              </h1>
              {/* Secondary text */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl pt-2 font-normal">
                현재 상황에 맞는 개인파산 면책 및 회생 가능성과 진행 방법을 비공개 법률상담을 통해 확인해보세요.
                과도한 채무로 인한 불안감을 내려놓으실 수 있도록, 합법적인 법원 채무조정 절차를 체계적으로 안내해 드립니다.
              </p>
            </div>

            {/* Reassurance Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D7AE66] shrink-0" />
                <span>접수 즉시 독촉·추심 중단</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D7AE66] shrink-0" />
                <span>기각 시 100% 환불보장</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D7AE66] shrink-0" />
                <span>수임료 무이자 분납 지원</span>
              </div>
            </div>

            {/* Action Buttons: 무료 상담 신청 & 자가진단 */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3">
              {/* 1. 무료 상담 신청 */}
              <button
                id="btn-hero-free-counsel"
                onClick={onOpenQuickCounsel}
                className="px-6 py-4 rounded-xl bg-gradient-to-r from-[#D7AE66] to-[#C59C53] hover:from-[#e4c281] hover:to-[#D7AE66] text-[#151C2C] font-black text-base shadow-xl transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Lock className="w-5 h-5 text-[#151C2C]" />
                <span>무료 상담 신청</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* 2. 자가진단 */}
              <button
                id="btn-hero-diagnosis"
                onClick={() => onNavigate('diagnosis')}
                className="px-6 py-4 rounded-xl bg-[#202B40] hover:bg-[#283650] text-white border border-slate-700/80 font-bold text-base transition-all flex items-center justify-center gap-2 cursor-pointer hover:border-[#D7AE66]/50"
              >
                <Calculator className="w-5 h-5 text-[#D7AE66]" />
                <span>1분 자가진단</span>
              </button>
            </div>

            {/* Sub-text Notice */}
            <div className="flex items-center gap-2 text-[11px] text-slate-400 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D7AE66]" />
              <span>신용조회 기록이 전혀 남지 않는 100% 무료 비공개 상담입니다.</span>
            </div>
          </div>

          {/* Right Column: Natural, Trustworthy Human Consultation Scene */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Image Container with Elegant Rounded Frame & Soft Border */}
              <div className="relative rounded-3xl overflow-hidden border border-[#2D3C5A] shadow-2xl bg-[#1C2538]">
                <img
                  src="/images/counseling_hero.jpg"
                  alt="신뢰감 있는 법률사무소 1:1 진주개인파산 전문 상담 모습"
                  referrerPolicy="no-referrer"
                  className="w-full h-[320px] sm:h-[380px] lg:h-[420px] object-cover object-center group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121824]/90 via-transparent to-transparent pointer-events-none" />

                {/* Overlay Card: Real Consultation Guarantee */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#151C2C]/95 backdrop-blur-md border border-[#2D3C5A] p-4 rounded-2xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-[#D7AE66] font-bold uppercase tracking-wider">
                        1:1 CONFIDENTIAL CONSULTATION
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-white mt-0.5">
                        전담 법률 매니저가 조용하고 따뜻하게 함께합니다
                      </div>
                    </div>
                    <div className="w-9 h-9 rounded-xl bg-[#202B40] text-[#D7AE66] flex items-center justify-center shrink-0 border border-[#D7AE66]/40">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Subtle Accent Tag */}
              <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-1.5 bg-[#D7AE66] text-[#151C2C] px-3 py-1.5 rounded-full font-black text-xs shadow-lg">
                <span>진주 안심지원</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
