import React, { useState } from 'react';
import {
  FileCode,
  FolderTree,
  Terminal,
  Copy,
  Check,
  Code2,
  Cpu,
  Layers,
  Sparkles,
} from 'lucide-react';

export const CursorGuideView: React.FC = () => {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const copyCode = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(id);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const codeSnippets = {
    folderTree: `gnuboard5/
├── theme/
│   └── hope_partner/
│       ├── head.php                  # 공통 헤더 (68px) & GNB & 메가메뉴 & 모바일 드로어
│       ├── tail.php                  # 공통 푸터 & 모바일 고정 하단 CTA 바 (58px)
│       ├── index.php                 # 메인 랜딩 템플릿
│       ├── page.php                  # 정적 페이지 라우터 (rehab, bankruptcy, diagnosis)
│       ├── counsel_update.php        # 상담신청 DB 저장 및 카카오 알림톡 발송
│       ├── css/
│       │   └── style.css             # Tailwind 빌드된 반응형 CSS
│       └── skin/
│           └── board/
│               ├── story/            # [게시판 1] 실제 탕감 경험담 스킨 (/story)
│               │   ├── list.skin.php # 카드형 전후 채무 비교 리스트
│               │   └── view.skin.php # 상세 사연 및 의뢰인 후기 뷰
│               └── news/             # [게시판 2] 회생 정보 및 법률 칼럼 스킨 (/news)
│                   ├── list.skin.php # 칼럼형 리스트 & 태그 필터
│                   └── view.skin.php # 본문 뷰 & 하단 상담 CTA`,

    headPhpSnippet: `<?php
// theme/hope_partner/head.php
if (!defined('_GNUBOARD_')) exit;
include_once(G5_THEME_PATH.'/head.sub.php');
?>
<!-- 1. 상단 안심/신뢰 알림 바 -->
<div id="top-notice-bar" class="bg-[#111723] text-slate-300 text-xs py-1.5 px-4 border-b border-[#1E283C]">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
        <div class="flex items-center gap-3">
            <span class="text-[#D7AE66] font-bold">100% 비공개 보장</span>
            <span class="text-slate-600 hidden sm:inline">•</span>
            <span class="hidden sm:inline">전국 법원 비대면 전자소송 지원</span>
            <span class="text-slate-600 hidden md:inline">•</span>
            <span class="hidden md:inline text-[#D7AE66]">수임료 무이자 분납</span>
        </div>
        <div class="flex items-center gap-2">
            <span class="text-slate-400 hidden sm:inline">대표전화</span>
            <a href="tel:050369821000" class="text-[#D7AE66] font-bold">0503-6982-1000</a>
        </div>
    </div>
</div>

<!-- 2. 메인 헤더 (높이: 68px) -->
<header id="header" class="sticky top-0 z-40 bg-[#151C2C] text-white border-b border-[#222E46] shadow-md h-[68px]">
    <div class="max-w-7xl mx-auto h-full px-4 sm:px-6 flex items-center justify-between">
        <!-- 왼쪽: 로고 & 브랜드명 -->
        <a href="<?php echo G5_URL; ?>" class="flex items-center gap-2.5 group">
            <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#1E293B] border border-[#D7AE66]/60 flex items-center justify-center text-[#D7AE66]">
                <i class="fa fa-shield"></i>
            </div>
            <div>
                <div class="flex items-center gap-1.5">
                    <span class="text-lg sm:text-xl font-black text-white group-hover:text-[#D7AE66]">진주개인파산</span>
                    <span class="text-[10px] bg-[#252f44] text-[#D7AE66] px-1.5 py-0.5 rounded border border-[#D7AE66]/30 font-semibold">안심지원센터</span>
                </div>
                <p class="text-[11px] text-slate-400 font-normal">진주·사천·창원지방법원(진주지원) 전문 안심상담</p>
            </div>
        </a>

        <!-- 가운데: Desktop Navigation (개인회생, 개인파산, 신용회복 경험담, 뉴스/정보, 자가진단) -->
        <nav class="hidden lg:flex items-center gap-1.5 h-full">
            <!-- 개인회생 Dropdown -->
            <div class="relative h-full flex items-center group">
                <a href="<?php echo G5_BBS_URL; ?>/page.php?pid=rehab" class="px-3.5 py-2 text-sm font-semibold rounded-lg text-slate-200 hover:text-white hover:bg-[#202B3F] flex items-center gap-1">
                    <span>개인회생</span>
                    <i class="fa fa-chevron-down text-xs text-slate-400 group-hover:rotate-180 transition-transform"></i>
                </a>
                <div class="dropdown-menu hidden group-hover:block absolute top-[64px] left-0 w-72 bg-[#172033] border border-[#2D3C5A] rounded-2xl shadow-2xl p-3 z-50">
                    <a href="<?php echo G5_BBS_URL; ?>/page.php?pid=rehab&tab=overview" class="block p-2.5 rounded-xl hover:bg-[#232F46] text-xs font-bold text-slate-200">개인회생이란</a>
                    <a href="<?php echo G5_BBS_URL; ?>/page.php?pid=rehab&tab=qualification" class="block p-2.5 rounded-xl hover:bg-[#232F46] text-xs font-bold text-slate-200">개인회생 자격</a>
                    <a href="<?php echo G5_BBS_URL; ?>/page.php?pid=rehab&tab=process" class="block p-2.5 rounded-xl hover:bg-[#232F46] text-xs font-bold text-slate-200">개인회생 절차</a>
                    <a href="<?php echo G5_BBS_URL; ?>/page.php?pid=rehab&tab=docs" class="block p-2.5 rounded-xl hover:bg-[#232F46] text-xs font-bold text-slate-200">준비서류</a>
                    <div class="border-t border-[#25324C] my-1"></div>
                    <a href="<?php echo G5_BBS_URL; ?>/write.php?bo_table=counsel" class="block p-2.5 rounded-xl bg-[#D7AE66] text-[#151C2C] text-xs font-extrabold text-center">개인회생 1:1 상담신청</a>
                </div>
            </div>

            <!-- 개인파산 Dropdown -->
            <div class="relative h-full flex items-center group">
                <a href="<?php echo G5_BBS_URL; ?>/page.php?pid=bankruptcy" class="px-3.5 py-2 text-sm font-semibold rounded-lg text-slate-200 hover:text-white hover:bg-[#202B3F] flex items-center gap-1">
                    <span>개인파산</span>
                    <i class="fa fa-chevron-down text-xs text-slate-400 group-hover:rotate-180 transition-transform"></i>
                </a>
                <div class="dropdown-menu hidden group-hover:block absolute top-[64px] left-0 w-72 bg-[#172033] border border-[#2D3C5A] rounded-2xl shadow-2xl p-3 z-50">
                    <a href="<?php echo G5_BBS_URL; ?>/page.php?pid=bankruptcy&tab=overview" class="block p-2.5 rounded-xl hover:bg-[#232F46] text-xs font-bold text-slate-200">개인파산이란</a>
                    <a href="<?php echo G5_BBS_URL; ?>/page.php?pid=bankruptcy&tab=qualification" class="block p-2.5 rounded-xl hover:bg-[#232F46] text-xs font-bold text-slate-200">개인파산 자격</a>
                    <a href="<?php echo G5_BBS_URL; ?>/page.php?pid=bankruptcy&tab=process" class="block p-2.5 rounded-xl hover:bg-[#232F46] text-xs font-bold text-slate-200">개인파산 절차</a>
                    <a href="<?php echo G5_BBS_URL; ?>/page.php?pid=bankruptcy&tab=docs" class="block p-2.5 rounded-xl hover:bg-[#232F46] text-xs font-bold text-slate-200">준비서류</a>
                    <div class="border-t border-[#25324C] my-1"></div>
                    <a href="<?php echo G5_BBS_URL; ?>/write.php?bo_table=counsel" class="block p-2.5 rounded-xl bg-[#D7AE66] text-[#151C2C] text-xs font-extrabold text-center">개인파산 1:1 상담신청</a>
                </div>
            </div>

            <!-- 신용회복 경험담 (/story) -->
            <a href="<?php echo G5_BBS_URL; ?>/board.php?bo_table=story" class="px-3.5 py-2 text-sm font-semibold rounded-lg text-slate-200 hover:text-white hover:bg-[#202B3F]">
                신용회복 경험담
            </a>

            <!-- 뉴스/정보 (/news) -->
            <a href="<?php echo G5_BBS_URL; ?>/board.php?bo_table=news" class="px-3.5 py-2 text-sm font-semibold rounded-lg text-slate-200 hover:text-white hover:bg-[#202B3F]">
                뉴스/정보
            </a>

            <!-- 자가진단 (강조 뱃지) -->
            <a href="<?php echo G5_BBS_URL; ?>/page.php?pid=diagnosis" class="ml-1 px-3.5 py-1.5 text-sm font-bold rounded-lg text-[#D7AE66] bg-[#D7AE66]/10 border border-[#D7AE66]/40 hover:bg-[#D7AE66]/20 flex items-center gap-1.5">
                <i class="fa fa-calculator"></i>
                <span>1분 자가진단</span>
            </a>
        </nav>

        <!-- 오른쪽: 전화상담 CTA & 상담신청 버튼 -->
        <div class="hidden lg:flex items-center gap-3">
            <a href="tel:050369821000" class="flex items-center gap-2 px-3 py-2 rounded-xl text-slate-200 hover:text-[#D7AE66]">
                <div class="w-8 h-8 rounded-lg bg-[#202B3F] border border-slate-700 flex items-center justify-center text-[#D7AE66]">
                    <i class="fa fa-phone"></i>
                </div>
                <div class="leading-tight">
                    <div class="text-[10px] text-slate-400">야간·주말 상담가능</div>
                    <div class="text-sm font-bold text-white">0503-6982-1000</div>
                </div>
            </a>
            <a href="<?php echo G5_BBS_URL; ?>/write.php?bo_table=counsel" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D7AE66] to-[#C59C53] text-[#151C2C] font-extrabold text-sm shadow-md hover:brightness-110">
                상담신청
            </a>
        </div>

        <!-- 모바일: 햄버거 토글 버튼 -->
        <div class="flex items-center gap-2 lg:hidden">
            <a href="tel:050369821000" class="p-2 text-[#D7AE66] bg-[#222E46] rounded-lg"><i class="fa fa-phone"></i></a>
            <button id="btn-mobile-menu" type="button" class="p-2 text-slate-200 bg-[#222E46] rounded-lg" onclick="toggleMobileMenu()">
                <i class="fa fa-bars"></i>
            </button>
        </div>
    </div>
</header>`,

    storyListSkin: `<?php
// theme/hope_partner/skin/board/story/list.skin.php
if (!defined('_GNUBOARD_')) exit;
add_stylesheet('<link rel="stylesheet" href="'.$board_skin_url.'/style.css">', 0);
?>

<div class="max-w-7xl mx-auto px-4 sm:px-6 py-8">
    <!-- 카테고리 필터 탭 -->
    <div class="flex items-center gap-2 overflow-x-auto pb-4 mb-6 border-b border-gray-200">
        <a href="<?php echo get_pretty_url($bo_table); ?>" 
           class="px-4 py-2 rounded-xl text-xs font-bold <?php echo !$sca ? 'bg-[#151C2C] text-[#D7AE66]' : 'bg-gray-100 text-gray-700'; ?>">
            전체
        </a>
        <?php foreach ($categories as $cat) { ?>
            <a href="<?php echo get_pretty_url($bo_table, '', 'sca='.urlencode($cat)); ?>" 
               class="px-4 py-2 rounded-xl text-xs font-bold <?php echo $sca == $cat ? 'bg-[#151C2C] text-[#D7AE66]' : 'bg-gray-100 text-gray-700'; ?>">
                <?php echo $cat; ?>
            </a>
        <?php } ?>
    </div>

    <!-- 탕감 성공사례 반응형 카드 그리드 -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <?php for ($i=0; $i<count($list); $i++) { 
            $court = $list[$i]['wr_1']; // 신청 법원
            $orig_debt = number_format((int)$list[$i]['wr_2']); // 기존 채무
            $relief_debt = number_format((int)$list[$i]['wr_3']); // 탕감 금액
            $relief_rate = $list[$i]['wr_4']; // 탕감률 (%)
            $monthly_pay = $list[$i]['wr_5']; // 확정 월 변제금
        ?>
        <div class="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-xs hover:shadow-lg hover:border-[#D7AE66] transition-all">
            <div class="flex items-center justify-between gap-2 mb-3">
                <span class="text-xs font-bold px-2.5 py-0.5 bg-gray-100 text-gray-800 rounded">
                    <?php echo $list[$i]['ca_name']; ?>
                </span>
                <span class="text-xs font-extrabold px-2.5 py-0.5 bg-[#EBFBEE] text-[#2B8A3E] rounded-md">
                    <?php echo $relief_rate; ?>% 탕감 인가
                </span>
            </div>

            <h3 class="text-base font-bold text-[#151C2C] mb-3">
                <a href="<?php echo $list[$i]['href']; ?>" class="hover:text-[#D7AE66]">
                    <?php echo $list[$i]['subject']; ?>
                </a>
            </h3>

            <!-- 채무 비교 박스 -->
            <div class="grid grid-cols-2 gap-2 bg-[#F7F8FA] p-3 rounded-xl text-xs mb-3">
                <div>
                    <div class="text-[10px] text-gray-400">기존 채무총액</div>
                    <div class="font-bold text-gray-700 line-through"><?php echo $orig_debt; ?>원</div>
                </div>
                <div class="border-l border-gray-200 pl-3">
                    <div class="text-[10px] text-[#2B8A3E] font-bold">최종 탕감액</div>
                    <div class="font-black text-[#2B8A3E]"><?php echo $relief_debt; ?>원</div>
                </div>
            </div>

            <div class="flex items-center justify-between text-xs text-gray-400 pt-2 border-t border-gray-100">
                <span><?php echo $court; ?></span>
                <a href="<?php echo $list[$i]['href']; ?>" class="font-bold text-[#151C2C] hover:text-[#D7AE66]">
                    상세보기 →
                </a>
            </div>
        </div>
        <?php } ?>
    </div>
</div>`,

    indexPhpSnippet: `<?php
// theme/hope_partner/index.php
if (!defined('_GNUBOARD_')) exit;
include_once(G5_THEME_PATH.'/head.php');
?>
<!-- [1] Hero Section: 공감형 헤드카피, 듀얼 CTA, 1:1 상담 사진 -->
<section class="bg-[#151C2C] text-white pt-10 pb-16 px-4 sm:px-6">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div class="lg:col-span-7 space-y-6">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E293B] text-[#D7AE66] text-xs font-semibold">
                <i class="fa fa-lock"></i> 100% 비공개 안심상담
            </div>
            <h1 class="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.25]">
                혼자 고민하지 마세요.<br>
                <span class="text-[#D7AE66]">개인회생</span>, 지금부터 차근차근 알아보세요.
            </h1>
            <p class="text-slate-300 text-sm sm:text-base max-w-xl">
                현재 상황에 맞는 회생 가능성과 진행 방법을 상담을 통해 확인해보세요.
            </p>
            <div class="flex flex-wrap gap-3 pt-2">
                <a href="<?php echo G5_BBS_URL; ?>/write.php?bo_table=counsel" class="px-6 py-3.5 rounded-xl bg-[#D7AE66] text-[#151C2C] font-black text-sm">무료 상담 신청</a>
                <a href="<?php echo G5_BBS_URL; ?>/page.php?pid=diagnosis" class="px-6 py-3.5 rounded-xl bg-[#202B40] text-white border border-slate-700 font-bold text-sm">자가진단</a>
            </div>
        </div>
        <div class="lg:col-span-5">
            <img src="<?php echo G5_THEME_URL; ?>/img/counseling_hero.jpg" alt="전문 상담" class="rounded-3xl shadow-2xl w-full">
        </div>
    </div>
</section>

<!-- [2] 핵심 문제 해결 5대 상황별 카드 -->
<!-- [3] 개인회생 핵심 정보 4가지 카드 -->
<!-- [4] 개인회생 진행 과정 7단계 타임라인 -->
<!-- [5] 자가진단 CTA ("내 상황도 개인회생이 가능할까요?") -->
<!-- [6] 중간 상담 CTA ("현재 상황을 정확하게 확인하고 싶다면...") -->

<!-- [7] 신용회복 경험담 최신글 (/story 연동) -->
<?php echo latest('theme/story_latest', 'story', 4, 40); ?>

<!-- [8] 뉴스/정보 최신글 (/news 연동) -->
<?php echo latest('theme/news_latest', 'news', 4, 40); ?>

<!-- [9] FAQ 아코디언 -->
<!-- [10] Final CTA: 상담 신청 폼 -->

<?php
include_once(G5_THEME_PATH.'/tail.php');
?>`,

    counselUpdate: `<?php
// theme/hope_partner/counsel_update.php
include_once('./_common.php');

$name = clean_xss_tags(trim($_POST['name']));
$phone = clean_xss_tags(trim($_POST['phone']));
$service_type = clean_xss_tags(trim($_POST['service_type']));
$debt_amount = clean_xss_tags(trim($_POST['debt_amount']));
$call_time = clean_xss_tags(trim($_POST['call_time']));
$notes = clean_xss_tags(trim($_POST['notes']));

if (!$name || !$phone) {
    alert('성함과 안심 연락처를 입력해 주세요.');
}

// 1. 그누보드 상담신청 전용 테이블 저장
$sql = " INSERT INTO g5_counsel_request 
            SET name = '{$name}',
                phone = '{$phone}',
                service_type = '{$service_type}',
                debt_amount = '{$debt_amount}',
                call_time = '{$call_time}',
                notes = '{$notes}',
                ip = '{$_SERVER['REMOTE_ADDR']}',
                reg_date = '".G5_TIME_YMDHIS."' ";
sql_query($sql);

// 2. 담당 변호사에게 즉시 비공개 알림 통보 (카카오 알림톡 또는 SMS API)
// send_aligo_sms($phone, "진주개인파산 비공개 상담신청 접수완료");

alert('비밀상담 신청이 성공적으로 접수되었습니다. 지정하신 시간에 조용히 연락드리겠습니다.', G5_URL);
?>`,
  };

  return (
    <div className="space-y-12 pb-24 max-w-7xl mx-auto px-4 sm:px-6 pt-6">
      {/* Header Banner */}
      <div className="bg-[#151C2C] text-white rounded-3xl p-8 sm:p-12 border border-[#252f44]">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#202B40] border border-[#D7AE66]/50 text-[#D7AE66] text-xs font-bold">
            <Terminal className="w-3.5 h-3.5" />
            <span>DEVELOPER QUICK-START GUIDE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Cursor IDE & 그누보드 5 개발 구현 가이드
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            디자인 결과를 Cursor에 가져가서 그누보드 5 테마 및 게시판 2개(/story, /news)로 그대로 구현할 수 있는 파일 트리와 PHP/HTML 코드 템플릿입니다.
          </p>
        </div>
      </div>

      {/* 1. FOLDER ARCHITECTURE */}
      <section className="bg-white border border-[#E5E7EB] rounded-3xl p-8 space-y-4 shadow-xs">
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <div className="flex items-center gap-2">
            <FolderTree className="w-5 h-5 text-[#D7AE66]" />
            <h2 className="text-xl font-bold text-[#151C2C]">1. 그누보드 5 테마 권장 폴더 구조</h2>
          </div>
          <button
            onClick={() => copyCode(codeSnippets.folderTree, 'tree')}
            className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50"
          >
            {copiedSection === 'tree' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedSection === 'tree' ? '복사됨' : '구조 복사'}</span>
          </button>
        </div>
        <pre className="bg-[#0F141F] text-slate-200 p-5 rounded-2xl text-xs font-mono overflow-x-auto leading-relaxed">
          {codeSnippets.folderTree}
        </pre>
      </section>

      {/* 2. HEADER & NAVIGATION TEMPLATE (head.php) */}
      <section className="bg-white border border-[#E5E7EB] rounded-3xl p-8 space-y-4 shadow-xs">
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-[#D7AE66]" />
            <h2 className="text-xl font-bold text-[#151C2C]">
              2. 헤더 & 내비게이션 템플릿 (theme/hope_partner/head.php)
            </h2>
          </div>
          <button
            onClick={() => copyCode(codeSnippets.headPhpSnippet, 'head')}
            className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer"
          >
            {copiedSection === 'head' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedSection === 'head' ? '복사됨' : 'head.php 코드 복사'}</span>
          </button>
        </div>
        <p className="text-xs text-gray-500">
          높이 68px, 3초 인식 UX(회생정보, 1분 자가진단, 100% 비밀상담), 메가 드롭다운 및 모바일 햄버거 메뉴가 포함된 그누보드 5 시맨틱 템플릿입니다.
        </p>
        <pre className="bg-[#0F141F] text-sky-300 p-5 rounded-2xl text-xs font-mono overflow-x-auto leading-relaxed max-h-96">
          {codeSnippets.headPhpSnippet}
        </pre>
      </section>

      {/* 2-1. MAIN HOMEPAGE 10-SECTION TEMPLATE (index.php) */}
      <section className="bg-white border border-[#E5E7EB] rounded-3xl p-8 space-y-4 shadow-xs">
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#D7AE66]" />
            <h2 className="text-xl font-bold text-[#151C2C]">
              3. 메인 홈페이지 10대 전환 섹션 템플릿 (theme/hope_partner/index.php)
            </h2>
          </div>
          <button
            onClick={() => copyCode(codeSnippets.indexPhpSnippet, 'index')}
            className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer"
          >
            {copiedSection === 'index' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedSection === 'index' ? '복사됨' : 'index.php 코드 복사'}</span>
          </button>
        </div>
        <p className="text-xs text-gray-500">
          실제 상담 전환을 위해 설계된 10대 핵심 섹션(Hero, 5대 문제해결, 핵심정보 4개, 7단계 타임라인, 자가진단, 신용회복 경험담 /story, 뉴스 /news, FAQ, Final CTA)을 그누보드 5에 그대로 매핑한 템플릿입니다.
        </p>
        <pre className="bg-[#0F141F] text-amber-100 p-5 rounded-2xl text-xs font-mono overflow-x-auto leading-relaxed max-h-96">
          {codeSnippets.indexPhpSnippet}
        </pre>
      </section>

      {/* 4. BOARD 1 SKIN TEMPLATE */}
      <section className="bg-white border border-[#E5E7EB] rounded-3xl p-8 space-y-4 shadow-xs">
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-[#D7AE66]" />
            <h2 className="text-xl font-bold text-[#151C2C]">
              4. 게시판 1: /story 카드형 리스트 스킨 (list.skin.php)
            </h2>
          </div>
          <button
            onClick={() => copyCode(codeSnippets.storyListSkin, 'story')}
            className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer"
          >
            {copiedSection === 'story' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedSection === 'story' ? '복사됨' : 'PHP 코드 복사'}</span>
          </button>
        </div>
        <p className="text-xs text-gray-500">
          그누보드의 기본 여분 필드(wr_1~wr_5)를 채무액, 탕감률, 법원 데이터로 매핑하여 Cursor에서 즉시 붙여넣어 사용할 수 있습니다.
        </p>
        <pre className="bg-[#0F141F] text-emerald-300 p-5 rounded-2xl text-xs font-mono overflow-x-auto leading-relaxed max-h-96">
          {codeSnippets.storyListSkin}
        </pre>
      </section>

      {/* 5. FORM HANDLER SCRIPT */}
      <section className="bg-white border border-[#E5E7EB] rounded-3xl p-8 space-y-4 shadow-xs">
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#D7AE66]" />
            <h2 className="text-xl font-bold text-[#151C2C]">
              5. 상담신청 백엔드 핸들러 (counsel_update.php)
            </h2>
          </div>
          <button
            onClick={() => copyCode(codeSnippets.counselUpdate, 'counsel')}
            className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer"
          >
            {copiedSection === 'counsel' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedSection === 'counsel' ? '복사됨' : '핸들러 복사'}</span>
          </button>
        </div>
        <pre className="bg-[#0F141F] text-amber-200 p-5 rounded-2xl text-xs font-mono overflow-x-auto leading-relaxed">
          {codeSnippets.counselUpdate}
        </pre>
      </section>
    </div>
  );
};
