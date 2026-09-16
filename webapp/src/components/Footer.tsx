import React from 'react';
import { PageId } from '../types';
import { ShieldCheck, Lock, PhoneCall, Clock, MapPin, AlertCircle, FileText } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenQuickCounsel: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuickCounsel }) => {
  return (
    <footer className="bg-[#0F141F] text-slate-400 text-sm border-t border-[#1F293D]">
      {/* Upper Reassurance Band */}
      <div className="bg-[#151C2C] border-b border-[#252f44] py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#1E273A] border border-[#D7AE66]/40 flex items-center justify-center shrink-0 text-[#D7AE66]">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-bold text-base mb-1">100% 철저한 비밀보장</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                변호사법 제26조에 따른 엄격한 비밀유지의무 준수. 가족이나 직장에 일체 통보되지 않으며 우편물은 지정 사무소에서 대리 수령합니다.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#1E273A] border border-[#D7AE66]/40 flex items-center justify-center shrink-0 text-[#D7AE66]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-bold text-base mb-1">기각 시 100% 전액 환불</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                사전 1:1 정밀 자격 심사를 통과한 사건에 대해, 당사의 귀책으로 기각될 경우 수임료를 100% 전액 환불해 드리는 안심보장제를 운영합니다.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#1E273A] border border-[#D7AE66]/40 flex items-center justify-center shrink-0 text-[#D7AE66]">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-bold text-base mb-1">수임료 자체 무이자 분납</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                당장 비용 마련이 어려운 의뢰인의 상황을 깊이 공감하기에, 자체 분납 프로그램을 통해 초기 부담 없이 신속하게 접수할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Company Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Col 1: Brand & Counseling Hotline */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#D7AE66] flex items-center justify-center text-[#151C2C] font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-white font-bold text-lg">진주개인파산</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              과중한 채무로 감당하기 힘든 나날을 보내고 계신 분들에게 따뜻한 법률 솔루션을 제공합니다.
              더 이상 혼자 짊어지지 마시고 국가가 보장하는 합법적인 개인파산·면책 제도로 새 삶을 시작하세요.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="tel:050369821000"
                className="inline-flex items-center gap-2 bg-[#1A2234] border border-[#D7AE66]/40 text-[#D7AE66] px-4 py-2.5 rounded-xl font-bold text-base hover:bg-[#252f44] transition-colors"
              >
                <PhoneCall className="w-4 h-4" />
                <span>무료 전화상담 0503-6982-1000</span>
              </a>
              <a
                href="https://pf.kakao.com/_tZbTn/chat"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#FEE500] text-[#191600] px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-[#f5dc00] transition-colors"
              >
                <span>카카오톡 @희망도우미</span>
              </a>
            </div>
          </div>

          {/* Col 2: Site Menu */}
          <div>
            <h5 className="text-white font-semibold text-sm mb-3">바로가기 메뉴</h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors"
                >
                  메인 홈
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('rehab')}
                  className="hover:text-white transition-colors"
                >
                  개인회생 자격 및 절차
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('bankruptcy')}
                  className="hover:text-white transition-colors"
                >
                  개인파산 면책 안내
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('story')}
                  className="hover:text-[#D7AE66] transition-colors flex items-center gap-1"
                >
                  <span>실제 탕감 경험담</span>
                  <span className="text-[10px] text-slate-500 font-mono">/story</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('news')}
                  className="hover:text-[#D7AE66] transition-colors flex items-center gap-1"
                >
                  <span>최신 법률뉴스·정보</span>
                  <span className="text-[10px] text-slate-500 font-mono">/news</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('diagnosis')}
                  className="text-[#D7AE66] font-semibold hover:underline"
                >
                  1분 자가진단 (탕감률 계산)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Consulting Hours & Notice */}
          <div>
            <h5 className="text-white font-semibold text-sm mb-3">상담 운영 안내</h5>
            <div className="space-y-2 text-xs text-slate-300">
              <p>
                <span className="text-slate-400">평일 상담:</span> 09:00 ~ 21:00
              </p>
              <p>
                <span className="text-slate-400">토·공휴일:</span> 10:00 ~ 17:00 (사전예약제)
              </p>
              <p>
                <span className="text-slate-400">야간 카카오톡:</span> 24시간 실시간 접수 가능
              </p>
              <div className="p-3 bg-[#151C2C] border border-[#232D42] rounded-lg mt-3">
                <div className="flex items-center gap-1.5 text-[#D7AE66] text-xs font-semibold mb-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>비대면 전국 전자소송</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-normal">
                  직접 법무법인에 방문하지 않고도 카카오톡, 전화, 우편으로 서류를 안전하게 전달하여 전국의 모든 법원에 접수 가능합니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Compliance */}
        <div className="pt-8 border-t border-[#1C2538] text-[11px] text-slate-400 space-y-2 leading-relaxed">
          <p>
            상호: 진주개인파산 | 관할: 창원지방법원 진주지원 | 진주시(상대·평거·초전·충무공·가좌 등) 개인회생·개인파산 상담
          </p>
          <p>
            진주·사천·남해·하동·산청 비대면 상담 가능 | 대표전화: 0503-6982-1000 | 카카오톡: @희망도우미
          </p>
          <p className="text-slate-400">
            [변호사법 준수 표기] 본 웹사이트의 모든 법률 자문 및 사건 수임은 소속 도산 전문 변호사의 직접 지휘와 검토하에 수행됩니다. 개인파산 및 개인회생 제도의 구체적인 결과(면책 및 탕감률)는 신청인의 소득, 재산, 채무 성격 및 관할 법원의 실무준칙에 따라 달라질 수 있습니다.
          </p>
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 text-slate-400 border-t border-[#182030] mt-4">
            <div>© 2026 진주개인파산. All rights reserved.</div>
            <div className="flex items-center gap-3">
              <span className="hover:text-slate-300 cursor-pointer">개인정보처리방침</span>
              <span>·</span>
              <span className="hover:text-slate-300 cursor-pointer">이용약관</span>
              <span>·</span>
              <span className="hover:text-slate-300 cursor-pointer">이메일무단수집거부</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
