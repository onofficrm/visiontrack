import React, { useState } from 'react';
import { FAQ_LIST } from '../../data/mockData';
import { ChevronDown, HelpCircle, PhoneCall, Lock } from 'lucide-react';

interface HomeFaqSectionProps {
  onOpenQuickCounsel: () => void;
}

export const HomeFaqSection: React.FC<HomeFaqSectionProps> = ({ onOpenQuickCounsel }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="home-faq-section" className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-18">
      {/* Section Header */}
      <div className="text-center mb-10 sm:mb-12 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#151C2C] text-[#D7AE66] text-xs font-bold">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>FAQ & GUIDE</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#151C2C] tracking-tight">
          자주 묻는 질문 (FAQ)
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          개인회생을 고민하시는 의뢰인분들이 가장 많이 불안해하시고 질문해주신 내용을 모았습니다.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-3.5">
        {FAQ_LIST.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`bg-white border rounded-2xl overflow-hidden transition-all shadow-xs ${
                isOpen ? 'border-[#D7AE66] ring-1 ring-[#D7AE66]/30' : 'border-[#E5E7EB] hover:border-gray-300'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#151C2C] hover:bg-gray-50/70 transition-colors cursor-pointer"
                aria-expanded={isOpen}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={`w-6 h-6 rounded-full text-xs flex items-center justify-center font-black shrink-0 transition-colors ${
                      isOpen ? 'bg-[#D7AE66] text-[#151C2C]' : 'bg-[#151C2C] text-[#D7AE66]'
                    }`}
                  >
                    Q
                  </span>
                  <span className="leading-snug">{faq.q}</span>
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#D7AE66]' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-[#F7F8FA]/50 animate-fadeIn">
                  <div className="pl-9 space-y-2">
                    <p>{faq.a}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Subtle Help Note */}
      <div className="mt-8 p-4 rounded-2xl bg-gray-50 border border-gray-200 text-center flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <span className="text-gray-600">
          더 구체적이거나 개인적인 질문이 있으신가요?
        </span>
        <button
          onClick={onOpenQuickCounsel}
          className="font-bold text-[#151C2C] hover:text-[#D7AE66] flex items-center gap-1 cursor-pointer transition-colors"
        >
          <Lock className="w-3.5 h-3.5 text-[#D7AE66]" />
          <span>비공개로 1:1 질문하기 →</span>
        </button>
      </div>
    </section>
  );
};
