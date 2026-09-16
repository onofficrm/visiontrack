import React from 'react';
import { PageId } from '../../types';
import { HelpCircle, CheckCircle2, Clock, FileText, ArrowRight } from 'lucide-react';

interface HomeCoreInfoSectionProps {
  onNavigate: (page: PageId, subTab?: string) => void;
}

export const HomeCoreInfoSection: React.FC<HomeCoreInfoSectionProps> = ({ onNavigate }) => {
  const cards = [
    {
      id: 'info-overview',
      subTab: 'overview',
      icon: HelpCircle,
      title: '개인회생이란',
      badge: '제도 이해',
      desc: '과도한 채무로 고통받는 채무자가 법원의 인가를 받아 원금 최대 90%, 이자는 100% 면제받고 36개월간 분할 변제하는 국가 구제 제도입니다.',
      points: ['이자 100% 전액 면제', '원금 최대 90% 법적 탕감', '재산과 직장 안정적 유지'],
    },
    {
      id: 'info-qualification',
      subTab: 'qualification',
      icon: CheckCircle2,
      title: '개인회생 자격',
      badge: '자격 요건',
      desc: '급여소득자, 자영업자, 일용직, 아르바이트 등 정기적·반복적인 수입이 있고, 총 채무액이 재산보다 많은 분이라면 누구나 신청 가능합니다.',
      points: ['일정한 소득 증빙 가능자', '무담보 10억 / 담보 15억 이하', '재산 총액보다 채무가 더 많은 경우'],
    },
    {
      id: 'info-process',
      subTab: 'process',
      icon: Clock,
      title: '개인회생 절차',
      badge: '진행 흐름',
      desc: '신청서 접수 즉시 금지명령으로 빚 독촉이 멈추며, 회생위원 선임과 법원의 개시결정을 거쳐 현실적인 변제계획안 인가까지 이어집니다.',
      points: ['접수 후 평균 3~7일 내 금지명령', '법원 보정 권고 정밀 방어', '인가 결정 후 신용회복 개시'],
    },
    {
      id: 'info-docs',
      subTab: 'docs',
      icon: FileText,
      title: '준비서류',
      badge: '필수 서류',
      desc: '주민등록등본, 소득 증빙자료, 재산 소명서류, 부채증명서 등이 필요하며, 대리인 사무소에서 무료 발급 대행을 원스톱으로 지원합니다.',
      points: ['기본 인적 사항 및 주민등록 서류', '근로/사업 소득 및 통장 거래내역', '금융기관 부채증명서 발급 대행'],
    },
  ];

  return (
    <section id="home-core-info-section" className="bg-[#F7F8FA] border-y border-[#E5E7EB] py-14 sm:py-18 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-2">
          <span className="text-xs font-bold text-[#D7AE66] uppercase tracking-wider">
            ESSENTIAL GUIDE
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#151C2C] tracking-tight">
            개인회생 핵심 정보 4가지
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            복잡한 법률 용어를 알기 쉽게 정리했습니다. 꼭 확인해야 할 4가지 기초 정보를 차근차근 살펴보세요.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-xs hover:shadow-lg hover:border-[#D7AE66] transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#151C2C] text-[#D7AE66] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-amber-50 text-[#151C2C] border border-[#D7AE66]/30">
                      {card.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-lg font-bold text-[#151C2C] mb-2 group-hover:text-[#D7AE66] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed min-h-[54px]">
                      {card.desc}
                    </p>
                  </div>

                  {/* Checkpoints */}
                  <ul className="space-y-1.5 text-[11px] text-gray-700 pt-2 border-t border-gray-100">
                    {card.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D7AE66] shrink-0"></span>
                        <span className="truncate">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 자세히 보기 CTA Button */}
                <div className="pt-5 mt-2">
                  <button
                    onClick={() => onNavigate('rehab', card.subTab)}
                    className="w-full py-2.5 px-3 rounded-xl bg-gray-50 hover:bg-[#151C2C] text-gray-800 hover:text-[#D7AE66] font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer border border-gray-200 hover:border-[#151C2C]"
                  >
                    <span>자세히 보기</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
