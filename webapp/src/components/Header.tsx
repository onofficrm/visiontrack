import React, { useState, useRef, useEffect } from 'react';
import { PageId, DeviceMode, RehabSubTab, BankruptcySubTab } from '../types';
import {
  ShieldCheck,
  PhoneCall,
  Menu,
  X,
  Calculator,
  ChevronDown,
  ChevronRight,
  Lock,
  Layers,
  Map,
  FileCode,
  Laptop,
  Tablet,
  Smartphone,
  Sparkles,
  HelpCircle,
  CheckCircle,
  FileText,
  Clock,
  MessageSquare,
  Scale,
  Code2,
  Copy,
  Check,
} from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId, subTab?: string) => void;
  onOpenQuickCounsel: () => void;
  deviceMode: DeviceMode;
  onChangeDeviceMode: (mode: DeviceMode) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenQuickCounsel,
  deviceMode,
  onChangeDeviceMode,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'rehab' | 'bankruptcy' | null>(null);
  const [mobileRehabOpen, setMobileRehabOpen] = useState(false);
  const [mobileBankruptcyOpen, setMobileBankruptcyOpen] = useState(false);

  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menu: 'rehab' | 'bankruptcy') => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleNavClick = (page: PageId, subTab?: string) => {
    onNavigate(page, subTab);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* prototype bar removed */}

      {/* 2. Top Reassurance Strip (3초 신뢰성 부여: 100% 비밀보장, 전자소송, 야간상담) */}
      <div
        id="header-top-strip"
        className="bg-[#111723] text-slate-300 text-xs py-1.5 px-4 border-b border-[#1E283C]"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3 text-xs">
            <div className="flex items-center gap-1.5 text-slate-200">
              <Lock className="w-3.5 h-3.5 text-[#D7AE66]" />
              <span className="font-semibold text-white">100% 비공개 보장</span>
            </div>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="hidden sm:inline text-slate-300">
              전국 법원 비대면 전자소송 지원
            </span>
            <span className="text-slate-600 hidden md:inline">•</span>
            <span className="hidden md:inline text-[#D7AE66] font-medium">
              수임료 무이자 분납 가능
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <span className="text-slate-400 hidden sm:inline">
              지금 접수 시 10분 내 전담팀 배정
            </span>
            <a
              href="tel:050369821000"
              className="flex items-center gap-1 text-[#D7AE66] hover:text-[#e4c281] font-bold tracking-tight transition-colors"
              title="대표 전화상담 연결"
            >
              <PhoneCall className="w-3 h-3 text-[#D7AE66]" />
              <span className="text-xs font-semibold">0503-6982-1000</span>
            </a>
          </div>
        </div>
      </div>

      {/* 3. Main Desktop & Mobile Header (Height: ~68px, Strict User Intent) */}
      <header
        id="main-site-header"
        className="sticky top-0 z-40 bg-[#151C2C] text-white border-b border-[#222E46] shadow-md transition-all"
        style={{ height: '68px' }}
      >
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 flex items-center justify-between">
          {/* Left: 사이트 로고 & 브랜드명 */}
          <div className="flex items-center">
            <button
              id="header-logo-brand"
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2.5 sm:gap-3 text-left group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D7AE66]/50 rounded-lg p-1"
              aria-label="진주개인파산 홈으로 이동"
            >
              {/* Logo Emblem Icon */}
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#1E293B] to-[#0D131F] border border-[#D7AE66]/60 flex items-center justify-center shadow-md group-hover:border-[#D7AE66] group-hover:scale-[1.02] transition-all">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#D7AE66]" />
              </div>

              {/* Brand Name & Tagline */}
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-lg sm:text-xl font-black tracking-tight text-white group-hover:text-[#D7AE66] transition-colors">
                    진주개인파산
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-semibold bg-[#252f44] text-[#D7AE66] px-1.5 py-0.5 rounded border border-[#D7AE66]/30">
                    진주안심상담
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 font-normal leading-none mt-0.5 hidden xs:block">
                  개인회생·파산 전문 무료법률상담
                </p>
              </div>
            </button>
          </div>

          {/* Center: Desktop Navigation Bar */}
          <nav
            id="desktop-navigation"
            className="hidden lg:flex items-center gap-1 xl:gap-1.5 h-full"
            aria-label="주요 메뉴"
          >
            {/* 1. 개인회생 (Mega Menu / Dropdown) */}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => handleMouseEnter('rehab')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                id="nav-menu-rehab"
                onClick={() => handleNavClick('rehab', 'overview')}
                className={`px-3.5 py-2 text-sm font-semibold rounded-lg flex items-center gap-1 transition-all cursor-pointer ${
                  currentPage === 'rehab' || activeDropdown === 'rehab'
                    ? 'text-[#D7AE66] bg-[#222E46] font-bold shadow-xs'
                    : 'text-slate-200 hover:text-white hover:bg-[#202B3F]'
                }`}
                aria-expanded={activeDropdown === 'rehab'}
                aria-haspopup="true"
              >
                <span>개인회생</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === 'rehab' ? 'rotate-180 text-[#D7AE66]' : 'text-slate-400'
                  }`}
                />
              </button>

              {/* 개인회생 Mega Dropdown Menu */}
              {activeDropdown === 'rehab' && (
                <div
                  id="dropdown-menu-rehab"
                  className="absolute top-[64px] left-0 w-80 bg-[#172033] border border-[#2D3C5A] rounded-2xl shadow-2xl p-3 z-50 animate-fadeIn"
                  onMouseEnter={() => handleMouseEnter('rehab')}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Top Dropdown Header */}
                  <div className="px-3 pt-2 pb-2 mb-2 border-b border-[#25324C] flex items-center justify-between">
                    <span className="text-xs font-bold text-[#D7AE66] flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      개인회생 상세 안내
                    </span>
                    <span className="text-[10px] text-slate-400 bg-[#25324C] px-1.5 py-0.5 rounded">
                      최대 90% 탕감
                    </span>
                  </div>

                  {/* 5개 필수 하위 메뉴: 개인회생이란, 개인회생 자격, 개인회생 절차, 준비서류, 개인회생 상담 */}
                  <div className="space-y-1">
                    <button
                      id="subnav-rehab-overview"
                      onClick={() => handleNavClick('rehab', 'overview')}
                      className="w-full text-left p-2.5 rounded-xl text-slate-200 hover:text-white hover:bg-[#232F46] transition-all flex items-start gap-3 group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#25324C] text-[#D7AE66] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#D7AE66] group-hover:text-[#151C2C] transition-colors">
                        <HelpCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold group-hover:text-[#D7AE66] transition-colors">
                          개인회생이란
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          제도 취지, 압류 금지 명령 및 혜택 안내
                        </div>
                      </div>
                    </button>

                    <button
                      id="subnav-rehab-qualification"
                      onClick={() => handleNavClick('rehab', 'qualification')}
                      className="w-full text-left p-2.5 rounded-xl text-slate-200 hover:text-white hover:bg-[#232F46] transition-all flex items-start gap-3 group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#25324C] text-[#D7AE66] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#D7AE66] group-hover:text-[#151C2C] transition-colors">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold group-hover:text-[#D7AE66] transition-colors">
                          개인회생 자격
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          소득 요건, 총채무 한도(무담보 10억 등) 체크
                        </div>
                      </div>
                    </button>

                    <button
                      id="subnav-rehab-process"
                      onClick={() => handleNavClick('rehab', 'process')}
                      className="w-full text-left p-2.5 rounded-xl text-slate-200 hover:text-white hover:bg-[#232F46] transition-all flex items-start gap-3 group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#25324C] text-[#D7AE66] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#D7AE66] group-hover:text-[#151C2C] transition-colors">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold group-hover:text-[#D7AE66] transition-colors">
                          개인회생 절차
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          신청부터 금지명령, 개시결정, 인가까지
                        </div>
                      </div>
                    </button>

                    <button
                      id="subnav-rehab-docs"
                      onClick={() => handleNavClick('rehab', 'docs')}
                      className="w-full text-left p-2.5 rounded-xl text-slate-200 hover:text-white hover:bg-[#232F46] transition-all flex items-start gap-3 group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#25324C] text-[#D7AE66] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#D7AE66] group-hover:text-[#151C2C] transition-colors">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold group-hover:text-[#D7AE66] transition-colors">
                          준비서류
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          소득증빙, 부채증명서, 서류발급 대행 안내
                        </div>
                      </div>
                    </button>
                  </div>

                  {/* 5번째 메뉴: 개인회생 상담 */}
                  <div className="pt-2 mt-2 border-t border-[#25324C]">
                    <button
                      id="subnav-rehab-counsel"
                      onClick={() => handleNavClick('rehab', 'counsel')}
                      className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#D7AE66] to-[#c59c53] text-[#151C2C] font-bold text-xs flex items-center justify-between hover:shadow-md transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-1.5">
                        <MessageSquare className="w-4 h-4" />
                        <span>개인회생 1:1 안심상담</span>
                      </div>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 2. 개인파산 (Mega Menu / Dropdown) */}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => handleMouseEnter('bankruptcy')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                id="nav-menu-bankruptcy"
                onClick={() => handleNavClick('bankruptcy', 'overview')}
                className={`px-3.5 py-2 text-sm font-semibold rounded-lg flex items-center gap-1 transition-all cursor-pointer ${
                  currentPage === 'bankruptcy' || activeDropdown === 'bankruptcy'
                    ? 'text-[#D7AE66] bg-[#222E46] font-bold shadow-xs'
                    : 'text-slate-200 hover:text-white hover:bg-[#202B3F]'
                }`}
                aria-expanded={activeDropdown === 'bankruptcy'}
                aria-haspopup="true"
              >
                <span>개인파산</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === 'bankruptcy' ? 'rotate-180 text-[#D7AE66]' : 'text-slate-400'
                  }`}
                />
              </button>

              {/* 개인파산 Mega Dropdown Menu */}
              {activeDropdown === 'bankruptcy' && (
                <div
                  id="dropdown-menu-bankruptcy"
                  className="absolute top-[64px] left-0 w-80 bg-[#172033] border border-[#2D3C5A] rounded-2xl shadow-2xl p-3 z-50 animate-fadeIn"
                  onMouseEnter={() => handleMouseEnter('bankruptcy')}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Top Dropdown Header */}
                  <div className="px-3 pt-2 pb-2 mb-2 border-b border-[#25324C] flex items-center justify-between">
                    <span className="text-xs font-bold text-[#D7AE66] flex items-center gap-1">
                      <Scale className="w-3.5 h-3.5" />
                      개인파산 및 면책 안내
                    </span>
                    <span className="text-[10px] text-slate-400 bg-[#25324C] px-1.5 py-0.5 rounded">
                      원금 100% 면책
                    </span>
                  </div>

                  {/* 5개 필수 하위 메뉴: 개인파산이란, 개인파산 자격, 개인파산 절차, 준비서류, 개인파산 상담 */}
                  <div className="space-y-1">
                    <button
                      id="subnav-bankrupt-overview"
                      onClick={() => handleNavClick('bankruptcy', 'overview')}
                      className="w-full text-left p-2.5 rounded-xl text-slate-200 hover:text-white hover:bg-[#232F46] transition-all flex items-start gap-3 group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#25324C] text-[#D7AE66] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#D7AE66] group-hover:text-[#151C2C] transition-colors">
                        <HelpCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold group-hover:text-[#D7AE66] transition-colors">
                          개인파산이란
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          파산선고와 면책 제도의 차이, 빚 전액 소멸
                        </div>
                      </div>
                    </button>

                    <button
                      id="subnav-bankrupt-qualification"
                      onClick={() => handleNavClick('bankruptcy', 'qualification')}
                      className="w-full text-left p-2.5 rounded-xl text-slate-200 hover:text-white hover:bg-[#232F46] transition-all flex items-start gap-3 group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#25324C] text-[#D7AE66] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#D7AE66] group-hover:text-[#151C2C] transition-colors">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold group-hover:text-[#D7AE66] transition-colors">
                          개인파산 자격
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          지급불능 상태, 고령·질병·소득 단절 판단 기준
                        </div>
                      </div>
                    </button>

                    <button
                      id="subnav-bankrupt-process"
                      onClick={() => handleNavClick('bankruptcy', 'process')}
                      className="w-full text-left p-2.5 rounded-xl text-slate-200 hover:text-white hover:bg-[#232F46] transition-all flex items-start gap-3 group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#25324C] text-[#D7AE66] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#D7AE66] group-hover:text-[#151C2C] transition-colors">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold group-hover:text-[#D7AE66] transition-colors">
                          개인파산 절차
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          파산신청, 관재인 면담, 면책결정 흐름
                        </div>
                      </div>
                    </button>

                    <button
                      id="subnav-bankrupt-docs"
                      onClick={() => handleNavClick('bankruptcy', 'docs')}
                      className="w-full text-left p-2.5 rounded-xl text-slate-200 hover:text-white hover:bg-[#232F46] transition-all flex items-start gap-3 group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#25324C] text-[#D7AE66] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#D7AE66] group-hover:text-[#151C2C] transition-colors">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold group-hover:text-[#D7AE66] transition-colors">
                          준비서류
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          재산목록 소명, 진술서, 부채증명서 완벽 대비
                        </div>
                      </div>
                    </button>
                  </div>

                  {/* 5번째 메뉴: 개인파산 상담 */}
                  <div className="pt-2 mt-2 border-t border-[#25324C]">
                    <button
                      id="subnav-bankrupt-counsel"
                      onClick={() => handleNavClick('bankruptcy', 'counsel')}
                      className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#D7AE66] to-[#c59c53] text-[#151C2C] font-bold text-xs flex items-center justify-between hover:shadow-md transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-1.5">
                        <MessageSquare className="w-4 h-4" />
                        <span>개인파산 1:1 안심상담</span>
                      </div>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 3. 신용회복 경험담 (/story - 그누보드 게시판 1) */}
            <button
              id="nav-menu-story"
              onClick={() => handleNavClick('story')}
              className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                currentPage === 'story'
                  ? 'text-[#D7AE66] bg-[#222E46] font-bold shadow-xs'
                  : 'text-slate-200 hover:text-white hover:bg-[#202B3F]'
              }`}
            >
              <span>신용회복 경험담</span>
              <span className="text-[10px] text-[#D7AE66]/80 font-mono bg-[#202B3F] px-1 py-0.2 rounded border border-[#D7AE66]/20">
                /story
              </span>
            </button>

            {/* 4. 뉴스/정보 (/news - 그누보드 게시판 2) */}
            <button
              id="nav-menu-news"
              onClick={() => handleNavClick('news')}
              className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                currentPage === 'news'
                  ? 'text-[#D7AE66] bg-[#222E46] font-bold shadow-xs'
                  : 'text-slate-200 hover:text-white hover:bg-[#202B3F]'
              }`}
            >
              <span>뉴스/정보</span>
              <span className="text-[10px] text-[#D7AE66]/80 font-mono bg-[#202B3F] px-1 py-0.2 rounded border border-[#D7AE66]/20">
                /news
              </span>
            </button>

            {/* 5. 자가진단 (3초 인지: 내가 대상인지 바로 확인 유도 배지) */}
            <button
              id="nav-menu-diagnosis"
              onClick={() => handleNavClick('diagnosis')}
              className={`ml-1 px-3.5 py-1.5 text-sm font-bold rounded-lg flex items-center gap-1.5 transition-all cursor-pointer border ${
                currentPage === 'diagnosis'
                  ? 'text-[#151C2C] bg-[#D7AE66] border-[#D7AE66] shadow-sm'
                  : 'text-[#D7AE66] bg-[#D7AE66]/10 hover:bg-[#D7AE66]/20 border-[#D7AE66]/40 hover:border-[#D7AE66]'
              }`}
            >
              <div className="relative">
                <Calculator className="w-4 h-4" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full animate-ping"></span>
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-500 rounded-full"></span>
              </div>
              <span>1분 자가진단</span>
            </button>
          </nav>

          {/* Right: 전화상담 CTA & 상담신청 버튼 (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            {/* 전화상담 CTA */}
            <a
              id="header-cta-phone"
              href="tel:050369821000"
              className="flex items-center gap-2 px-3 py-2 rounded-xl text-left text-slate-200 hover:text-[#D7AE66] hover:bg-[#202B3F] transition-all group"
              title="전화상담 연결"
            >
              <div className="w-8 h-8 rounded-lg bg-[#202B3F] border border-slate-700 flex items-center justify-center text-[#D7AE66] group-hover:border-[#D7AE66]/60 transition-colors">
                <PhoneCall className="w-4 h-4" />
              </div>
              <div className="leading-tight">
                <div className="text-[10px] text-slate-400 font-medium">야간·주말 상담가능</div>
                <div className="text-sm font-bold text-white group-hover:text-[#D7AE66] tracking-tight">
                  0503-6982-1000
                </div>
              </div>
            </a>

            {/* 상담신청 버튼 (핵심 전환 목표) */}
            <button
              id="btn-header-counsel-apply"
              onClick={() => handleNavClick('consultation')}
              className="px-4 xl:px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D7AE66] to-[#C59C53] hover:from-[#e4c281] hover:to-[#D7AE66] active:scale-[0.98] text-[#151C2C] font-extrabold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <Lock className="w-4 h-4" />
              <span>상담신청</span>
            </button>
          </div>

          {/* Mobile Right: 간편 상담 & 햄버거 토글 버튼 */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* 모바일 상단 퀵 전화 버튼 */}
            <a
              id="btn-mobile-quick-call"
              href="tel:050369821000"
              className="p-2 text-[#D7AE66] hover:text-white bg-[#222E46] rounded-lg transition-colors flex items-center justify-center"
              aria-label="전화상담 연결"
            >
              <PhoneCall className="w-4 h-4" />
            </a>

            {/* 모바일 상단 상담신청 버튼 */}
            <button
              id="btn-mobile-counsel-header"
              onClick={onOpenQuickCounsel}
              className="px-3 py-1.5 rounded-lg bg-[#D7AE66] text-[#151C2C] font-bold text-xs shadow-xs"
            >
              상담신청
            </button>

            {/* 햄버거 메뉴 토글 버튼 */}
            <button
              id="btn-mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-200 hover:text-white hover:bg-[#222E46] rounded-lg transition-colors cursor-pointer"
              aria-label="모바일 메뉴 열기/닫기"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* 4. Mobile Navigation Drawer & Overlay (사용자 요청 메뉴 순서 정확히 준수) */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-overlay"
          className="lg:hidden fixed inset-0 top-[68px] z-50 bg-black/70 backdrop-blur-xs flex flex-col justify-start animate-fadeIn"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            id="mobile-nav-drawer"
            className="w-full bg-[#151C2C] border-b border-[#25324C] max-h-[calc(100vh-68px)] overflow-y-auto px-4 py-5 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Top Conversion Box */}
            <div className="p-3.5 bg-[#1C263A] rounded-xl border border-[#2D3C5A] flex items-center justify-between gap-3">
              <div>
                <div className="text-xs font-bold text-white">채무로 힘드시다면 주저하지 마세요</div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  100% 비밀보장 • 신용조회 기록 없음
                </div>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuickCounsel();
                }}
                className="px-3 py-2 rounded-lg bg-[#D7AE66] text-[#151C2C] font-extrabold text-xs shrink-0 shadow-xs"
              >
                무료상담 신청
              </button>
            </div>

            {/* Mobile Navigation List (메뉴 순서: 개인회생 -> 개인파산 -> 신용회복 경험담 -> 뉴스/정보 -> 자가진단 -> 상담신청) */}
            <nav className="space-y-2 text-sm font-medium" aria-label="모바일 전체 메뉴">
              {/* 1. 개인회생 (아코디언 토글) */}
              <div className="border border-[#222E46] rounded-xl overflow-hidden bg-[#182133]">
                <button
                  id="mobile-rehab-toggle"
                  onClick={() => setMobileRehabOpen(!mobileRehabOpen)}
                  className="w-full flex items-center justify-between px-4 py-3.5 text-slate-100 font-bold hover:bg-[#202B3F] transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#D7AE66]" />
                    <span>개인회생</span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform ${
                      mobileRehabOpen ? 'rotate-180 text-[#D7AE66]' : ''
                    }`}
                  />
                </button>

                {mobileRehabOpen && (
                  <div className="bg-[#121A2A] px-3 py-2 space-y-1 border-t border-[#222E46] text-xs">
                    <button
                      onClick={() => handleNavClick('rehab', 'overview')}
                      className="w-full text-left py-2 px-3 rounded-lg text-slate-300 hover:text-white hover:bg-[#1D273B] flex items-center justify-between"
                    >
                      <span>• 개인회생이란</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                    </button>
                    <button
                      onClick={() => handleNavClick('rehab', 'qualification')}
                      className="w-full text-left py-2 px-3 rounded-lg text-slate-300 hover:text-white hover:bg-[#1D273B] flex items-center justify-between"
                    >
                      <span>• 개인회생 자격</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                    </button>
                    <button
                      onClick={() => handleNavClick('rehab', 'process')}
                      className="w-full text-left py-2 px-3 rounded-lg text-slate-300 hover:text-white hover:bg-[#1D273B] flex items-center justify-between"
                    >
                      <span>• 개인회생 절차</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                    </button>
                    <button
                      onClick={() => handleNavClick('rehab', 'docs')}
                      className="w-full text-left py-2 px-3 rounded-lg text-slate-300 hover:text-white hover:bg-[#1D273B] flex items-center justify-between"
                    >
                      <span>• 준비서류</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                    </button>
                    <button
                      onClick={() => handleNavClick('rehab', 'counsel')}
                      className="w-full text-left py-2 px-3 rounded-lg text-[#D7AE66] font-bold hover:bg-[#1D273B] flex items-center justify-between"
                    >
                      <span>• 개인회생 상담 신청</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#D7AE66]" />
                    </button>
                  </div>
                )}
              </div>

              {/* 2. 개인파산 (아코디언 토글) */}
              <div className="border border-[#222E46] rounded-xl overflow-hidden bg-[#182133]">
                <button
                  id="mobile-bankrupt-toggle"
                  onClick={() => setMobileBankruptcyOpen(!mobileBankruptcyOpen)}
                  className="w-full flex items-center justify-between px-4 py-3.5 text-slate-100 font-bold hover:bg-[#202B3F] transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Scale className="w-4 h-4 text-[#D7AE66]" />
                    <span>개인파산</span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform ${
                      mobileBankruptcyOpen ? 'rotate-180 text-[#D7AE66]' : ''
                    }`}
                  />
                </button>

                {mobileBankruptcyOpen && (
                  <div className="bg-[#121A2A] px-3 py-2 space-y-1 border-t border-[#222E46] text-xs">
                    <button
                      onClick={() => handleNavClick('bankruptcy', 'overview')}
                      className="w-full text-left py-2 px-3 rounded-lg text-slate-300 hover:text-white hover:bg-[#1D273B] flex items-center justify-between"
                    >
                      <span>• 개인파산이란</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                    </button>
                    <button
                      onClick={() => handleNavClick('bankruptcy', 'qualification')}
                      className="w-full text-left py-2 px-3 rounded-lg text-slate-300 hover:text-white hover:bg-[#1D273B] flex items-center justify-between"
                    >
                      <span>• 개인파산 자격</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                    </button>
                    <button
                      onClick={() => handleNavClick('bankruptcy', 'process')}
                      className="w-full text-left py-2 px-3 rounded-lg text-slate-300 hover:text-white hover:bg-[#1D273B] flex items-center justify-between"
                    >
                      <span>• 개인파산 절차</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                    </button>
                    <button
                      onClick={() => handleNavClick('bankruptcy', 'docs')}
                      className="w-full text-left py-2 px-3 rounded-lg text-slate-300 hover:text-white hover:bg-[#1D273B] flex items-center justify-between"
                    >
                      <span>• 준비서류</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                    </button>
                    <button
                      onClick={() => handleNavClick('bankruptcy', 'counsel')}
                      className="w-full text-left py-2 px-3 rounded-lg text-[#D7AE66] font-bold hover:bg-[#1D273B] flex items-center justify-between"
                    >
                      <span>• 개인파산 상담 신청</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#D7AE66]" />
                    </button>
                  </div>
                )}
              </div>

              {/* 3. 신용회복 경험담 (/story) */}
              <button
                id="mobile-nav-story"
                onClick={() => handleNavClick('story')}
                className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl border border-[#222E46] bg-[#182133] text-slate-100 font-bold hover:bg-[#202B3F] transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#D7AE66]" />
                  <span>신용회복 경험담</span>
                </div>
                <span className="text-[11px] font-mono text-[#D7AE66] bg-[#121A2A] px-2 py-0.5 rounded border border-[#D7AE66]/30">
                  /story
                </span>
              </button>

              {/* 4. 뉴스/정보 (/news) */}
              <button
                id="mobile-nav-news"
                onClick={() => handleNavClick('news')}
                className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl border border-[#222E46] bg-[#182133] text-slate-100 font-bold hover:bg-[#202B3F] transition-colors"
              >
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#D7AE66]" />
                  <span>뉴스/정보</span>
                </div>
                <span className="text-[11px] font-mono text-[#D7AE66] bg-[#121A2A] px-2 py-0.5 rounded border border-[#D7AE66]/30">
                  /news
                </span>
              </button>

              {/* 5. 자가진단 (1분 탕감률 계산기) */}
              <button
                id="mobile-nav-diagnosis"
                onClick={() => handleNavClick('diagnosis')}
                className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl border border-[#D7AE66]/50 bg-[#D7AE66]/15 text-[#D7AE66] font-extrabold hover:bg-[#D7AE66]/25 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-[#D7AE66]" />
                  <span>1분 자가진단 (자격·탕감률 확인)</span>
                </div>
                <span className="text-[10px] bg-[#D7AE66] text-[#151C2C] px-1.5 py-0.5 rounded font-black">
                  추천
                </span>
              </button>

              {/* 6. 상담신청 */}
              <button
                id="mobile-nav-counsel"
                onClick={() => handleNavClick('consultation')}
                className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-gradient-to-r from-[#D7AE66] to-[#C59C53] text-[#151C2C] font-black text-sm shadow-md active:scale-98 transition-transform cursor-pointer"
              >
                <Lock className="w-4 h-4" />
                <span>비밀 무료상담 신청하기</span>
              </button>
            </nav>

            {/* Mobile Footer Info inside Drawer */}
            <div className="pt-3 border-t border-[#222E46] flex flex-col gap-2 text-xs text-slate-400">
              <div className="flex items-center justify-between">
                <span>전화문의</span>
                <a href="tel:050369821000" className="text-[#D7AE66] font-bold">
                  0503-6982-1000
                </a>
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-500">
                <span>상담시간</span>
                <span>평일 09:00 - 21:00 / 야간·주말 접수가능</span>
              </div>
            </div>
          </div>
        </div>
      )}

      </>
  );
};
