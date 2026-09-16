import React, { useState, useEffect } from 'react';
import { PageId, BankruptcySubTab } from '../types';
import { ContentPageLayout, BreadcrumbItem, RelatedCard, FaqItem, SubTabItem } from '../components/common/ContentPageLayout';
import { BankruptcyOverviewContent } from '../components/bankruptcy/BankruptcyOverviewContent';
import { BankruptcyQualificationContent } from '../components/bankruptcy/BankruptcyQualificationContent';
import { BankruptcyProcessContent } from '../components/bankruptcy/BankruptcyProcessContent';
import { BankruptcyDocsContent } from '../components/bankruptcy/BankruptcyDocsContent';
import { BankruptcyCounselContent } from '../components/bankruptcy/BankruptcyCounselContent';

interface BankruptcyViewProps {
  onNavigate: (page: PageId, subTab?: string) => void;
  onOpenQuickCounsel: () => void;
  initialTab?: BankruptcySubTab;
}

export const BankruptcyView: React.FC<BankruptcyViewProps> = ({
  onNavigate,
  onOpenQuickCounsel,
  initialTab = 'overview',
}) => {
  const [activeTab, setActiveTab] = useState<BankruptcySubTab>(initialTab);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  const tabs: SubTabItem[] = [
    { id: 'overview', label: '1. 개인파산이란' },
    { id: 'qualification', label: '2. 개인파산 자격' },
    { id: 'process', label: '3. 개인파산 절차' },
    { id: 'docs', label: '4. 준비서류' },
    { id: 'counsel', label: '5. 개인파산 상담' },
  ];

  // Tab configurations for Bankruptcy
  const getTabConfig = (tab: BankruptcySubTab) => {
    switch (tab) {
      case 'overview':
        return {
          badgeText: '채무 100% 전액 탕감 제도',
          title: '개인파산이란? 원금·이자 100% 법적 면책과 신용 회복',
          intro: '고령, 중증 질환, 장애, 사업 실패 등으로 더 이상 빚을 갚을 소득 활동이 불가능한 분들을 위한 제도입니다. 법원의 면책 결정을 통해 모든 채무(원금 및 이자 100%)의 변제 책임을 합법적으로 면제받습니다.',
          breadcrumbs: [
            { label: '개인파산', pageId: 'bankruptcy' as PageId, subTab: 'overview' },
            { label: '개인파산이란' },
          ],
          keyTakeaways: [
            '변제금 납부 없이 법원의 면책 허가 결정으로 모든 빚이 일시에 전액 탕감됩니다.',
            '면책 확정 시 파산선고로 인한 모든 사회적·법적 신분 불이익이 즉시 복권됩니다.',
            '가족에게 빚이 상속되거나 대물림되는 것을 법적으로 완벽하게 차단합니다.',
            '임차보증금(소액보증금)과 6개월 생계비(최대 1,110만 원)는 면제재산으로 보호됩니다.',
          ],
          relatedCards: [
            {
              title: '파산 면책 신청 자격 자가점검',
              desc: '소득 불능 요건과 면책불허가 사유 유무를 직접 점검해보세요.',
              tag: '자격 요건',
              pageId: 'bankruptcy' as PageId,
              subTab: 'qualification',
            },
            {
              title: '소득이 있다면? 개인회생과 비교하기',
              desc: '매달 조금이라도 소득이 있다면 재산을 지키는 개인회생을 검토하세요.',
              tag: '개인회생',
              pageId: 'rehab' as PageId,
              subTab: 'overview',
            },
            {
              title: '파산 절차 및 관재인 조사 로드맵',
              desc: '파산선고부터 관재인 면담, 면책결정까지의 타임라인을 확인하세요.',
              tag: '진행 절차',
              pageId: 'bankruptcy' as PageId,
              subTab: 'process',
            },
          ],
          faqs: [
            {
              q: '파산선고를 받으면 호적이나 가족관계등록부에 빨간 줄이 남나요?',
              a: '전혀 남지 않습니다. 과거와 달리 호적(가족관계등록부)에 기재되지 않으며, 법원의 면책 결정이 확정되면 신용정보원의 파산 기록도 전액 삭제되어 정상적인 사회생활이 가능합니다.',
            },
            {
              q: '파산하면 살고 있는 집의 보증금도 모두 빼앗기나요?',
              a: '아닙니다. 주택임대차보호법상 소액임차보증금(서울 5,500만 원, 과밀억제권역 4,800만 원 등)과 6개월간 최저생계비(1,110만 원)는 법적으로 압류 및 환가가 금지되는 ‘면제재산’으로 전액 보호됩니다.',
            },
            {
              q: '파산신청을 하면 자녀나 가족에게 불이익이 가나요?',
              a: '가족에게는 어떠한 법적·경제적 불이익도 없습니다. 채무는 신청인 본인의 고유한 채무이며, 연좌제는 대한민국 헌법상 엄격히 금지되어 있습니다.',
            },
          ],
        };

      case 'qualification':
        return {
          badgeText: '지급불능 객관적 입증',
          title: '개인파산 자격: 내 상황도 파산 면책이 가능할까요?',
          intro: '객관적으로 빚을 갚을 소득 활동이 불가능한 ‘지급불능’ 상태를 입증할 수 있다면 신청할 수 있습니다. 4대 핵심 요건과 면제재산 기준, 면책불허가 사유를 비교해보세요.',
          breadcrumbs: [
            { label: '개인파산', pageId: 'bankruptcy' as PageId, subTab: 'overview' },
            { label: '개인파산 자격' },
          ],
          keyTakeaways: [
            '소득이 전혀 없거나, 월 소득이 1인 가구 최저생계비(약 140만 원)에 미달해야 합니다.',
            '만 60세 이상 고령, 중증 질환 또는 장애, 미성년 자녀 다수 부양 등이 주요 인정 사유입니다.',
            '본인 명의 재산이 채무액에 비해 현저히 적거나 없어야 합니다.',
            '도박·낭비성 채무 비중이 지나치게 높지 않아야 하며, 있을 경우 재량면책 법리 방어가 필요합니다.',
          ],
          relatedCards: [
            {
              title: '파산 필수 준비서류 체크리스트',
              desc: '진단서, 수급자증명서, 무소득사실증명 등 소명서류 목록 확인.',
              tag: '준비서류',
              pageId: 'bankruptcy' as PageId,
              subTab: 'docs',
            },
            {
              title: '개인파산 1:1 맞춤 무료상담',
              desc: '현재 내 상황에서 면책 가능성이 얼마나 되는지 변호사와 진단하세요.',
              tag: '무료 진단',
              pageId: 'bankruptcy' as PageId,
              subTab: 'counsel',
            },
            {
              title: '정기 소득이 있다면? 개인회생 자격 보기',
              desc: '아르바이트나 직장인 소득이 있다면 회생 제도를 대조해보세요.',
              tag: '개인회생',
              pageId: 'rehab' as PageId,
              subTab: 'qualification',
            },
          ],
          faqs: [
            {
              q: '20~30대 젊은 나이인데도 개인파산이 가능한가요?',
              a: '원칙적으로 젊은 층은 근로 능력이 있다고 보아 개인회생을 권고하지만, 희귀난치성 질환, 중증 장애, 또는 정신과 장기 치료 등 실질적으로 일할 수 없는 객관적 진단서가 있다면 파산 면책이 가능합니다.',
            },
            {
              q: '배우자 명의로 재산이 조금 있는데 제가 파산할 수 있나요?',
              a: '부부별산제 원칙상 배우자 재산은 본인 재산이 아닙니다. 다만 그 재산의 형성 자금이 채무자로부터 유입된 것이 아님을 소명해야 하므로 전문 대리인의 치밀한 준비가 필요합니다.',
            },
            {
              q: '과거에 개인회생이나 파산을 신청했다가 기각된 적이 있는데 재신청 가능한가요?',
              a: '네, 가능합니다. 기각되거나 폐지된 사건은 재신청에 법적 제한이 없으므로, 기각 사유를 철저히 보완하여 즉시 다시 신청할 수 있습니다.',
            },
          ],
        };

      case 'process':
        return {
          badgeText: '파산관재인 조사 철저 대비',
          title: '개인파산 절차: 신청부터 관재인 조사·최종 면책까지',
          intro: '파산신청서 접수부터 파산관재인 선임, 꼼꼼한 재산·거래내역 조사 대응, 채권자집회를 거쳐 최종 면책결정에 이르기까지 안전하게 완주할 수 있도록 전 과정을 안내합니다.',
          breadcrumbs: [
            { label: '개인파산', pageId: 'bankruptcy' as PageId, subTab: 'overview' },
            { label: '개인파산 절차' },
          ],
          keyTakeaways: [
            '파산신청서와 면책신청서를 동시에 접수하여 신속하게 절차를 진행합니다.',
            '파산선고 시 법원 파산관재인이 선임되며 약 30~50만 원의 예납금이 발생합니다.',
            '파산관재인의 과거 3~5년 금융 거래내역 조사를 철저히 소명하는 것이 면책의 열쇠입니다.',
            '최종 면책 결정이 확정되면 모든 빚이 0원으로 소멸하고 법적으로 즉시 복권됩니다.',
          ],
          relatedCards: [
            {
              title: '파산 소명에 필요한 서류 체크하기',
              desc: '관재인이 집중 요구하는 과거 재산 소명 서류를 미리 확인하세요.',
              tag: '서류 안내',
              pageId: 'bankruptcy' as PageId,
              subTab: 'docs',
            },
            {
              title: '파산 전문 변호사 직통 상담',
              desc: '관할 법원별 파산관재인 성향과 소요 기간을 맞춤 상담해 드립니다.',
              tag: '전담 상담',
              pageId: 'bankruptcy' as PageId,
              subTab: 'counsel',
            },
            {
              title: '실제 파산 면책 성공사례 확인',
              desc: '까다로운 관재인 조사를 극복하고 면책받은 실제 사례.',
              tag: '성공사례',
              pageId: 'story' as PageId,
            },
          ],
          faqs: [
            {
              q: '파산관재인과의 면담은 어떻게 진행되나요?',
              a: '법원이 지정한 변호사(파산관재인) 사무실에 출석하여 약 15~30분간 질문을 받습니다. 과거 재산 처분 내역과 채무 발생 경위를 묻는데, 진주개인파산이 사전 모의 코칭과 예상 답변서를 완벽히 준비해 드립니다.',
            },
            {
              q: '신청부터 최종 면책까지 총 기간은 얼마나 걸리나요?',
              a: '관할 법원과 재산 환가 필요 여부에 따라 다르나, 통상 6개월에서 1년 내외가 소요됩니다. 재산이 전혀 없는 무재산 사건의 경우 더욱 빠르게 종결됩니다.',
            },
            {
              q: '채권자가 파산 면책에 대해 이의신청을 하면 어떻게 되나요?',
              a: '채권자가 이의를 제기하더라도 법률적으로 타당한 면책불허가 사유가 입증되지 않는 한 법원은 기각 처리하고 면책을 허가합니다. 대리인이 법리적 반박 답변서를 제출합니다.',
            },
          ],
        };

      case 'docs':
        return {
          badgeText: '근로무능력·재산소명 가이드',
          title: '개인파산 준비서류 체크리스트: 면책을 결정짓는 필수 서류',
          intro: '파산은 소득 활동이 어려운 사유와 과거 5~10년간의 재산 처분 내역을 완벽히 소명해야 합니다. 체크리스트를 통해 누락 없이 준비할 수 있도록 지원합니다.',
          breadcrumbs: [
            { label: '개인파산', pageId: 'bankruptcy' as PageId, subTab: 'overview' },
            { label: '준비서류' },
          ],
          keyTakeaways: [
            '소득이 없음을 증명하는 국세청 무소득사실증명원과 건강보험 자격득실확인서가 필수입니다.',
            '질병이 원인인 경우 종합병원 진단서, 소견서, 진료비 영수증을 꼼꼼히 구비해야 합니다.',
            '과거 5~10년간 전국 부동산·자동차 세목별 과세증명서로 재산 처분 내역을 소명합니다.',
            '복잡하고 많은 금융기관 부채증명서는 대리인 무료 대행 발급을 지원합니다.',
          ],
          relatedCards: [
            {
              title: '파산 진행 절차 확인하기',
              desc: '서류 접수 후 파산선고와 관재인 조사 단계를 타임라인으로 확인하세요.',
              tag: '진행 절차',
              pageId: 'bankruptcy' as PageId,
              subTab: 'process',
            },
            {
              title: '서류 발급 무료 대행 상담 신청',
              desc: '어려운 관공서 서류 발급, 법률사무소에서 대신 발급해 드립니다.',
              tag: '대행 상담',
              pageId: 'bankruptcy' as PageId,
              subTab: 'counsel',
            },
            {
              title: '개인파산 자격 요건 다시 점검',
              desc: '서류 제출 전 파산 자격 요건을 다시 한번 대조해보세요.',
              tag: '자격 점검',
              pageId: 'bankruptcy' as PageId,
              subTab: 'qualification',
            },
          ],
          faqs: [
            {
              q: '예전에 폐업한 사업자 서류나 오래된 통장을 어떻게 찾아야 하나요?',
              a: '홈택스를 통해 폐업사실증명원을 즉시 조회할 수 있으며, 금융결제원 ‘어카운트인포(계좌정보통합관리)’를 통해 해지된 계좌를 포함한 전 금융권 계좌 내역을 한 번에 열람할 수 있습니다.',
            },
            {
              q: '친척이나 지인 집에 얹혀살고 있는데 거주 증명은 어떻게 하나요?',
              a: '집주인(또는 임차인인 친척)이 작성하는 ‘무상거주사실확인서’와 해당 주택의 임대차계약서 사본을 제출하면 법원에서 정상 거주로 인정합니다.',
            },
            {
              q: '서류 발급에 드는 비용이 부담스러운데 지원받을 수 있나요?',
              a: '정부24, 홈택스, 대법원 전자가족시스템 등을 이용하면 대부분의 공문서는 수수료 없이 무료로 발급받으실 수 있습니다.',
            },
          ],
        };

      case 'counsel':
      default:
        return {
          badgeText: '100% 비공개 법률 진단',
          title: '개인파산 1:1 비공개 상담 신청: 빚 없는 새 삶의 시작',
          intro: '신용조회 기록이 남지 않는 100% 비공개 무료 법률상담. 나의 현재 조건에서 면책 결정이 가능한지, 기각 리스크는 없는지 파산 전문 변호사와 확인해보세요.',
          breadcrumbs: [
            { label: '개인파산', pageId: 'bankruptcy' as PageId, subTab: 'overview' },
            { label: '개인파산 상담' },
          ],
          keyTakeaways: [
            '상담만으로 신용점수 하락이나 금융 거래 제한이 일체 발생하지 않습니다.',
            '가족이나 직장, 지인 누구에게도 상담 및 신청 사실이 통보되지 않습니다.',
            '면책 불허가 가능성이 높은 경우 무리한 신청을 절대 유도하지 않습니다.',
            '기각 시 수임료 100% 전액 환불 보장 약정서를 교부해 드립니다.',
          ],
          relatedCards: [
            {
              title: '파산 신청 자격 자가점검',
              desc: '상담 전 내 상황이 파산 요건에 맞는지 스스로 확인해보세요.',
              tag: '자가점검',
              pageId: 'bankruptcy' as PageId,
              subTab: 'qualification',
            },
            {
              title: '개인파산 절차 타임라인',
              desc: '신청부터 최종 면책까지 걸리는 기간과 흐름을 확인하세요.',
              tag: '진행 절차',
              pageId: 'bankruptcy' as PageId,
              subTab: 'process',
            },
            {
              title: '개인회생 vs 개인파산 전격 비교',
              desc: '소득 여부에 따라 나에게 더 유리한 제도를 비교해 보세요.',
              tag: '제도 비교',
              pageId: 'rehab' as PageId,
              subTab: 'overview',
            },
          ],
          faqs: [
            {
              q: '파산 상담을 받으면 바로 사건을 진행해야 하나요?',
              a: '아닙니다. 충분히 설명을 들으시고 가족과 상의하신 뒤 신중하게 결정하실 수 있으며, 상담만 받고 진행하지 않으셔도 일체의 비용이 발생하지 않습니다.',
            },
            {
              q: '수임료나 법원 비용 분납이 가능한가요?',
              a: '네, 가능합니다. 경제적으로 어려운 의뢰인의 형편을 고려하여 수임료 무이자 분납 제도를 운영하고 있으며, 기초생활수급자 등 취약계층의 경우 법원 송달료 지원 제도도 연계해 드립니다.',
            },
            {
              q: '전국 어디서나 상담 및 사건 진행이 가능한가요?',
              a: '네, 가능합니다. 대법원 전자소송 시스템을 통해 서울, 경기, 부산, 대구, 대전, 광주 등 전국 모든 지방법원 사건을 방문 없이 원스톱 비대면으로 신속하게 처리해 드립니다.',
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
      onTabChange={(tabId) => setActiveTab(tabId as BankruptcySubTab)}
      keyTakeaways={currentConfig.keyTakeaways}
      relatedCards={currentConfig.relatedCards}
      ctaTitle="내 상황에 맞는 개인파산 방법이 궁금하다면"
      ctaDescription="소득 유무, 건강 상태, 부양가족, 과거 재산 내역에 따라 면책 가능성과 최적의 진행 방식이 완전히 달라집니다. 비공개 법률 상담을 통해 안전한 면책 가능성을 객관적으로 확인해보세요."
      faqs={currentConfig.faqs}
      onNavigate={onNavigate}
      onOpenQuickCounsel={onOpenQuickCounsel}
    >
      {activeTab === 'overview' && <BankruptcyOverviewContent />}
      {activeTab === 'qualification' && <BankruptcyQualificationContent />}
      {activeTab === 'process' && <BankruptcyProcessContent />}
      {activeTab === 'docs' && <BankruptcyDocsContent />}
      {activeTab === 'counsel' && <BankruptcyCounselContent />}
    </ContentPageLayout>
  );
};
