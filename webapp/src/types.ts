export type PageId =
  | 'home'
  | 'rehab'
  | 'bankruptcy'
  | 'story'
  | 'news'
  | 'diagnosis'
  | 'consultation'
  | 'design-system'
  | 'sitemap-ux'
  | 'cursor-guide';

export type RehabSubTab = 'overview' | 'qualification' | 'process' | 'docs' | 'counsel';
export type BankruptcySubTab = 'overview' | 'qualification' | 'process' | 'docs' | 'counsel';

export type DeviceMode = 'desktop' | 'tablet' | 'mobile';

export interface StoryCase {
  id: string;
  title: string;
  category: '직장인' | '개인사업자' | '주부' | '청년/프리랜서';
  debtorInfo: string;
  originalDebt: number; // in ten thousand KRW (만원)
  relievedDebt: number; // in ten thousand KRW (만원)
  reliefRate: number; // percentage, e.g. 87
  monthlyPayBefore: number; // in ten thousand KRW
  monthlyPayAfter: number; // in ten thousand KRW
  court: string;
  periodMonths: number;
  tags: string[];
  summary: string;
  content: string;
  clientReview: string;
  date: string;
  viewCount: number;
}

export interface NewsPost {
  id: string;
  title: string;
  category: '법률상식' | '최신개정' | '독촉대처' | '자주묻는질문';
  date: string;
  author: string;
  summary: string;
  content: string;
  viewCount: number;
  isImportant?: boolean;
}

export interface ConsultationFormData {
  name: string;
  phone: string;
  callTime: string;
  debtAmount: string;
  incomeType: string;
  overdueStatus: string;
  counselWish: string;
  notes: string;
  agreePrivacy: boolean;
}

export interface DiagnosisAnswers {
  hasRegularIncome: string;
  repaymentDifficulty: string;
  overdueStatus: string;
  debtVsAsset: string;
  priorityGoal: string;
}

export interface DiagnosisState {
  step: number;
  totalDebt: number; // in 만원
  assets: number; // in 만원
  monthlyIncome: number; // in 만원
  dependents: number;
  debtCause: string;
  occupation: string;
}
