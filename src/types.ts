export type NavigationSection = 
  | 'home' 
  | 'about' 
  | 'roadmap' 
  | 'news' 
  | 'resources' 
  | 'faq';

export interface RoadmapStep {
  id: number;
  stepNumber: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  duration: string;
  keyActors: string[];
  deliverables: string[];
  tips: string;
  checklist: string[];
}

export type NewsCategory = '전체' | '공지사항' | '프로젝트 소식' | '참여 지자체·학교 이야기';

export interface NewsItem {
  id: string;
  category: '공지사항' | '프로젝트 소식' | '참여 지자체·학교 이야기';
  title: string;
  date: string;
  thumbnail?: string;
  summary: string;
  content: string;
  author: string;
  views: number;
  featured?: boolean;
  tags: string[];
}

export type ResourceCategory = '전체' | '사업 안내' | '아동권리교육' | '아동참여활동' | '운영 양식' | '홍보자료';

export type FileType = 'PDF' | 'PPTX' | 'DOCX' | 'HWP';

export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  category: '사업 안내' | '아동권리교육' | '아동참여활동' | '운영 양식' | '홍보자료';
  fileType: FileType;
  fileSize: string;
  date: string;
  downloadCount: number;
  isImportant?: boolean;
}

export type FaqCategory = '전체' | '사업 참여' | '사업 운영' | '예산' | '아동권리교육' | '아동참여 및 의견제안' | '기타';

export interface FaqItem {
  id: string;
  category: '사업 참여' | '사업 운영' | '예산' | '아동권리교육' | '아동참여 및 의견제안' | '기타';
  question: string;
  answer: string;
  relatedDoc?: string;
}

export interface InquiryFormData {
  name: string;
  organizationType: '지방자치단체' | '초등학교' | '교육지원청' | '일반시민/연구자' | '기타';
  organizationName: string;
  contact: string;
  email: string;
  subject: string;
  message: string;
}
