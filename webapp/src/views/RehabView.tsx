import React, { useState, useEffect } from 'react';
import { PageId, RehabSubTab } from '../types';
import { ContentPageLayout, BreadcrumbItem, RelatedCard, FaqItem, SubTabItem } from '../components/common/ContentPageLayout';
import { RehabOverviewContent } from '../components/rehab/RehabOverviewContent';
import { RehabQualificationContent } from '../components/rehab/RehabQualificationContent';
import { RehabProcessContent } from '../components/rehab/RehabProcessContent';
import { RehabDocsContent } from '../components/rehab/RehabDocsContent';
import { RehabCounselContent } from '../components/rehab/RehabCounselContent';

interface RehabViewProps {
  onNavigate: (page: PageId, subTab?: string) => void;
  onOpenQuickCounsel: () => void;
  initialTab?: RehabSubTab;
}

export const RehabView: React.FC<RehabViewProps> = ({
  onNavigate,
  onOpenQuickCounsel,
  initialTab = 'overview',
}) => {
  const [activeTab, setActiveTab] = useState<RehabSubTab>(initialTab);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  const tabs: SubTabItem[] = [
    { id: 'overview', label: '1. 개인회생이란' },
    { id: 'qualification', label: '2. 개인회생 자격' },
    { id: 'process', label: '3. 개인회생 절차' },
    { id: 'docs', label: '4. 준비서류' },
    { id: 'counsel', label: '5. 개인회생 상담' },
  ];

  // Tab configurations
  const getTabConfig = (tab: RehabSubTab) => {
    switch (tab) {
      case 'overview':
        return {
          badgeText: '법정 채무 조정 제도',
          title: '개인회생이란? 원금 최대 90% 탕감과 법적 보호',
          intro: '성실하지만 불운한 채무자를 위한 국가 법률 제도. 매월 소득에서 최저생계비를 제외한 금액을 36개월간 성실히 변제하면 남은 원금과 이자를 최대 90%까지 합법적으로 면책받을 수 있습니다.',
          breadcrumbs: [
            { label: '개인회생', pageId: 'rehab' as PageId, subTab: 'overview' },
            { label: '개인회생이란' },
          ],
          keyTakeaways: [
            '채권자의 동의 없이도 법원의 강제 인가 결정으로 채무가 조정됩니다.',
            '이자 100% 면제 및 원금 최대 90%까지 합법적으로 감면받을 수 있습니다.',
            '신청 즉시 금지명령으로 급여·통장 압류와 빚 독촉 전화가 전면 차단됩니다.',
            '공무원, 교사, 의사, 기업 임원 등 사회적·직업적 자격이 그대로 유지됩니다.',
          ],
          relatedCards: [
            {
              title: '내가 신청 자격에 해당하는지 확인하기',
              desc: '소득 요건, 채무 한도, 재산 평가 기준을 내 상황과 대조해 보세요.',
              tag: '자격 요건',
              pageId: 'rehab' as PageId,
              subTab: 'qualification',
            },
            {
              title: '신청부터 면책까지 7단계 절차 보기',
              desc: '금지명령 발령부터 개시결정, 인가까지 걸리는 기간과 절차 안내.',
              tag: '진행 절차',
              pageId: 'rehab' as PageId,
              subTab: 'process',
            },
            {
              title: '1분 회생 자가진단 계산기',
              desc: '월 예상 소득과 채무액을 입력하여 예상 탕감액을 확인해보세요.',
              tag: '자가진단',
              pageId: 'diagnosis' as PageId,
            },
          ],
          faqs: [
            {
              q: '개인회생을 신청하면 직장이나 가족에게 통보가 가나요?',
              a: '전혀 가지 않습니다. 법원 서류 송달지는 신청 대리인(진주개인파산 지원센터) 사무소로 지정되므로 자택이나 직장으로 우편물이 발송되지 않으며, 직장에 통보되는 법적 절차도 없습니다.',
            },
            {
              q: '신용회복위원회 워크아웃과 무엇이 다른가요?',
              a: '신용회복위원회는 채권 금융기관의 동의(50% 이상)가 필수이며 원금 감면이 제한적이지만, 법원 개인회생은 채권자 동의 없이 법원이 강제로 원금을 최대 90%까지 면책한다는 결정적인 차이가 있습니다.',
            },
            {
              q: '주식이나 코인, 도박으로 발생한 빚도 개인회생이 되나요?',
              a: '가능합니다. 특히 서울회생법원, 수원회생법원, 부산회생법원 등 주요 법원의 실무준칙에 따라 주식·가상화폐 투자 손실금을 변제금에 불리하게 산입하지 않도록 조력해 드립니다.',
            },
          ],
        };

      case 'qualification':
        return {
          badgeText: '신청 적격 자가진단',
          title: '개인회생 신청 자격: 내 상황도 신청 가능할까요?',
          intro: '지속적인 소득이 있는 급여소득자, 영업소득자, 아르바이트생이라면 누구나 신청할 수 있습니다. 4대 핵심 요건과 소득 형태별 인정 기준을 직접 비교해보세요.',
          breadcrumbs: [
            { label: '개인회생', pageId: 'rehab' as PageId, subTab: 'overview' },
            { label: '개인회생 자격' },
          ],
          keyTakeaways: [
            '4대 보험 미가입자, 파트타임, 배달라이더도 소득 증빙만 되면 가능합니다.',
            '총 채무액은 무담보 10억 원, 담보부 15억 원 이하(최소 1,000만 원 이상 권장)입니다.',
            '부동산·예금 등 보유한 총 재산보다 빚(원리금)이 더 많아야 합니다.',
            '과거 면책 이력이 있더라도 5년(회생) 또는 7년(파산)이 경과했다면 재신청 가능합니다.',
          ],
          relatedCards: [
            {
              title: '개인회생 준비서류 체크리스트',
              desc: '소득 및 재산 소명에 필요한 필수 서류를 확인하고 체크해보세요.',
              tag: '준비서류',
              pageId: 'rehab' as PageId,
              subTab: 'docs',
            },
            {
              title: '소득이 전혀 없다면? 개인파산 자격 확인',
              desc: '고령, 중증 질환 등으로 소득 활동이 어렵다면 파산 면책을 검토하세요.',
              tag: '개인파산',
              pageId: 'bankruptcy' as PageId,
              subTab: 'qualification',
            },
            {
              title: '실제 직장인/사업자 탕감 성공사례',
              desc: '나와 비슷한 상황의 의뢰인들이 어떻게 빚을 탕감받았는지 확인하세요.',
              tag: '성공사례',
              pageId: 'story' as PageId,
            },
          ],
          faqs: [
            {
              q: '이직한 지 한 달밖에 안 되었거나 아르바이트 중인데 신청할 수 있나요?',
              a: '네, 가능합니다. 최근 입사자라도 1회 이상 급여 수령 내역과 근로계약서, 또는 고용주의 급여지급확인서를 통해 향후 반복적인 소득 발생을 증명하면 신청 자격이 부여됩니다.',
            },
            {
              q: '배우자 명의로 집이나 차량이 있는데 제가 회생 신청할 수 있나요?',
              a: '네, 가능합니다. 원칙적으로 부부별산제가 적용되나, 법원에 따라 배우자 재산의 50%를 신청인의 청산가치에 반영하도록 심사할 수 있으므로 전문 대리인의 정밀 소명이 중요합니다.',
            },
            {
              q: '세금(국세, 지방세, 건강보험료) 체납도 개인회생에 포함되나요?',
              a: '포함됩니다. 다만 조세 채권은 ‘우선변제채권’으로 분류되어 전액 변제되어야 하므로, 변제기간 초반에 우선 상환되도록 변제계획안을 정교하게 설계해야 합니다.',
            },
          ],
        };

      case 'process':
        return {
          badgeText: '7단계 원스톱 로드맵',
          title: '개인회생 절차: 신청부터 인가·면책까지 타임라인',
          intro: '신청서 접수 즉시 금지명령으로 독촉을 차단하고, 꼼꼼한 보정서 대응으로 개시결정과 인가결정까지 흔들림 없이 완주할 수 있도록 전 과정을 안내합니다.',
          breadcrumbs: [
            { label: '개인회생', pageId: 'rehab' as PageId, subTab: 'overview' },
            { label: '개인회생 절차' },
          ],
          keyTakeaways: [
            '접수 후 3~7일 내 금지명령 발령으로 일체의 빚 독촉과 압류가 법적으로 금지됩니다.',
            '법원 회생위원의 보정권고에 어떻게 대응하느냐에 따라 월 변제금이 결정됩니다.',
            '개시결정 후 1회 채권자집회에 참석하며, 통상 질문 없이 10~15분 내 종료됩니다.',
            '인가결정이 확정되면 신용불량 정보가 해제되어 정상적인 금융거래가 가능해집니다.',
          ],
          relatedCards: [
            {
              title: '단계별 제출 서류 확인하기',
              desc: '신청 시와 보정 시 필요한 서류를 체크리스트로 미리 점검하세요.',
              tag: '서류 안내',
              pageId: 'rehab' as PageId,
              subTab: 'docs',
            },
            {
              title: '개인회생 1:1 맞춤 상담 신청',
              desc: '내 관할 법원의 성향과 예상 인가 기간을 전문 변호사와 상담하세요.',
              tag: '비공개 상담',
              pageId: 'rehab' as PageId,
              subTab: 'counsel',
            },
            {
              title: '최신 법원 실무 개정 뉴스 확인',
              desc: '서울/수원/부산회생법원의 2026년 최신 준칙 변화를 확인하세요.',
              tag: '법률 뉴스',
              pageId: 'news' as PageId,
            },
          ],
          faqs: [
            {
              q: '법원에 직접 출석해야 하는 일이 몇 번이나 있나요?',
              a: '전체 절차 중 단 1회, 개시결정 이후 열리는 ‘채권자집회’에만 10~15분 정도 출석하시면 됩니다. 그 외 모든 서류 접수와 보정 대응은 법률 대리인이 전자소송으로 전담합니다.',
            },
            {
              q: '신청 후 금지명령이 기각되는 경우도 있나요?',
              a: '최근 대출(최근 1년 이내 채무) 비중이 지나치게 높거나 과거 회생 폐지 이력이 잦은 경우 금지명령이 기각될 수 있습니다. 이때는 신속한 개시결정 신청과 소명 자료 보강으로 대응합니다.',
            },
            {
              q: '변제금 납부 중 갑자기 직장을 잃거나 소득이 줄면 어떻게 되나요?',
              a: '실직, 질병, 임금 삭감 등의 중대한 사유 발생 시 법원에 ‘변제계획안 변경 신청’ 또는 특별면책 신청을 통해 월 변제금을 낮추거나 유예할 수 있습니다.',
            },
          ],
        };

      case 'docs':
        return {
          badgeText: '서류 발급 원스톱 가이드',
          title: '개인회생 준비서류 체크리스트: 한 번에 끝내는 서류 안내',
          intro: '인적 서류, 소득 서류, 재산 서류, 채무 서류까지 누락 없이 꼼꼼하게 챙길 수 있도록 체크리스트를 제공합니다. 복잡한 서류는 대리인 무료 대행 발급을 지원합니다.',
          breadcrumbs: [
            { label: '개인회생', pageId: 'rehab' as PageId, subTab: 'overview' },
            { label: '준비서류' },
          ],
          keyTakeaways: [
            '주민등록등본·초본·가족관계증명서는 반드시 주민번호 뒷자리가 공개된 [상세]로 발급해야 합니다.',
            '정부24 및 홈택스를 이용하면 대부분의 공문서를 인터넷으로 즉시 무료 발급할 수 있습니다.',
            '각 금융기관 부채증명서는 대리인 사무소에서 위임장으로 원스톱 무료 발급 대행이 가능합니다.',
            '크레딧포유 신용정보 조회를 통해 잊고 있던 누락 채권을 사전에 100% 방지할 수 있습니다.',
          ],
          relatedCards: [
            {
              title: '서류 준비 후 진행되는 절차 보기',
              desc: '서류가 접수된 후 금지명령과 인가까지의 타임라인을 확인하세요.',
              tag: '진행 절차',
              pageId: 'rehab' as PageId,
              subTab: 'process',
            },
            {
              title: '서류 발급 대행 무료 상담 신청',
              desc: '바쁜 일상으로 직접 서류를 떼기 어려운 분들을 위한 대행 서비스.',
              tag: '간편 상담',
              pageId: 'rehab' as PageId,
              subTab: 'counsel',
            },
            {
              title: '개인회생 자격 요건 다시 점검',
              desc: '서류 준비 전 소득과 채무 요건을 다시 한번 대조해보세요.',
              tag: '자격 점검',
              pageId: 'rehab' as PageId,
              subTab: 'qualification',
            },
          ],
          faqs: [
            {
              q: '발급받은 서류의 유효기간은 얼마인가요?',
              a: '법원에 제출하는 공문서는 신청 접수일 기준 1개월 이내에 발급된 서류여야 합니다. 너무 일찍 떼어두면 재발급이 필요할 수 있으므로 상담 후 안내에 따라 발급하시는 것이 좋습니다.',
            },
            {
              q: '지인이나 개인에게 빌린 사채/차용증도 포함할 수 있나요?',
              a: '네, 가능합니다. 계좌 이체 내역서, 차용증, 카카오톡/문자 대화 내용 등 채무 발생 사실을 입증할 수 있는 자료를 제출하면 개인 채권자도 채권자목록에 포함됩니다.',
            },
            {
              q: '서류를 떼러 갈 시간이 없는 직장인인데 어떡하나요?',
              a: '정부24 전자문서지갑 또는 진주개인파산 지원센터의 행정서류 대행 발급 서비스를 이용하시면 동사무소나 세무서에 방문하지 않고도 간편하게 서류를 취합할 수 있습니다.',
            },
          ],
        };

      case 'counsel':
      default:
        return {
          badgeText: '1:1 비공개 맞춤 솔루션',
          title: '개인회생 1:1 비공개 상담 신청: 부담 없이 확인하세요',
          intro: '신용조회 기록이 전혀 남지 않는 100% 비공개 무료 법률상담. 나의 채무 상태와 소득에서 실질적으로 얼마가 탕감될 수 있는지 전문가와 확인해보세요.',
          breadcrumbs: [
            { label: '개인회생', pageId: 'rehab' as PageId, subTab: 'overview' },
            { label: '개인회생 상담' },
          ],
          keyTakeaways: [
            '상담만으로 신용점수 하락이나 금융 거래 제한이 발생하지 않습니다.',
            '비공개 원칙으로 가족, 직장, 지인 누구에게도 상담 사실이 알려지지 않습니다.',
            '수임료는 부담 없는 무이자 분납 제도를 지원하여 초기 목돈 부담을 덜어드립니다.',
            '기각 시 수임료 100% 전액 환불 보장 약정서를 교부해 드립니다.',
          ],
          relatedCards: [
            {
              title: '1분 회생 자가진단 계산기',
              desc: '상담 전 내 예상 탕감액과 변제금을 미리 계산해보세요.',
              tag: '계산기',
              pageId: 'diagnosis' as PageId,
            },
            {
              title: '개인회생 진행 절차 타임라인',
              desc: '상담 이후 사건 수임부터 최종 면책까지의 흐름을 확인하세요.',
              tag: '진행 절차',
              pageId: 'rehab' as PageId,
              subTab: 'process',
            },
            {
              title: '실제 의뢰인 신용회복 경험담',
              desc: '다중채무를 극복하고 새 삶을 찾은 의뢰인들의 진솔한 후기.',
              tag: '경험담',
              pageId: 'story' as PageId,
            },
          ],
          faqs: [
            {
              q: '상담 비용이나 신용조회 비용이 발생하나요?',
              a: '초기 1:1 맞춤 진단 및 자격 검토 상담은 일체의 비용이 없는 100% 무료 상담입니다. 신용조회 기록도 남지 않으니 안심하셔도 됩니다.',
            },
            {
              q: '수임료는 한 번에 다 내야 하나요?',
              a: '아닙니다. 채무로 어려운 의뢰인의 경제적 사정을 고려하여 수임료는 3~5개월 무이자 분납이 가능하며, 1회 차 소액 착수금만으로 즉시 법원 접수 및 금지명령을 진행합니다.',
            },
            {
              q: '사무실에 직접 방문하기 어려운 지방 거주자도 가능한가요?',
              a: '네, 가능합니다. 대법원 전자소송 시스템을 이용하므로 전국 모든 지방법원 사건을 방문 없이 비대면(전화, 카카오톡, 우편, 팩스)으로 완벽하게 처리해 드립니다.',
            },
          ],
        };
    }
  };

  const currentConfig = getTabConfig(activeTab);

  return (
    <ContentPageLayout
      breadcrumbs={currentConfig.breadcrumbs}
      badgeText={currentConfig.badgeText}
      title={currentConfig.title}
      intro={currentConfig.intro}
      tabs={tabs}
      activeTab={activeTab}
      onTabChange={(tabId) => setActiveTab(tabId as RehabSubTab)}
      keyTakeaways={currentConfig.keyTakeaways}
      relatedCards={currentConfig.relatedCards}
      ctaTitle="내 상황에 맞는 개인회생 방법이 궁금하다면"
      ctaDescription="채무 규모, 재산 상황, 소득 형태에 따라 가장 적합한 변제 시나리오가 다릅니다. 비공개 법률 상담을 통해 현재 처한 조건에서의 실질적인 해결 가능성을 객관적으로 확인해보세요."
      faqs={currentConfig.faqs}
      onNavigate={onNavigate}
      onOpenQuickCounsel={onOpenQuickCounsel}
    >
      {activeTab === 'overview' && <RehabOverviewContent />}
      {activeTab === 'qualification' && <RehabQualificationContent />}
      {activeTab === 'process' && <RehabProcessContent />}
      {activeTab === 'docs' && <RehabDocsContent />}
      {activeTab === 'counsel' && <RehabCounselContent />}
    </ContentPageLayout>
  );
};
