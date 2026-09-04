import React, { useState } from 'react';
import { X, Send, Building2, School, CheckCircle2, HeartHandshake, PhoneCall } from 'lucide-react';
import { InquiryFormData } from '../types';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitSuccess: (msg: string) => void;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  onSubmitSuccess
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    organizationType: '지방자치단체',
    organizationName: '',
    contact: '',
    email: '',
    subject: '2026 City to School 사업 참여 및 운영 문의',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      onSubmitSuccess(`문의가 성공적으로 접수되었습니다. (${formData.organizationName} 담당자님, 검토 후 등록하신 연락처로 회신드리겠습니다.)`);
      onClose();
    }, 600);
  };

  return (
    <div
      id="inquiry-modal-backdrop"
      className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="inquiry-modal-content"
        className="bg-white rounded-[24px] max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 mb-5 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#009EDB] flex items-center justify-center">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-slate-900">
                City to School 사업 참여 문의
              </h3>
              <p className="text-xs text-slate-400">
                지자체 공무원 및 초등학교 교직원 1:1 전담 상담 창구
              </p>
            </div>
          </div>
          <button
            id="inquiry-modal-close-btn"
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-50 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Notice badge */}
        <div className="bg-[#F8FBFF] border border-slate-100 rounded-[16px] p-3 mb-5 text-xs text-slate-600 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#009EDB] shrink-0" />
          <span>
            유니세프 한국위원회 아동친화도시 담당관이 내용을 확인 후 1영업일 이내로 연락드립니다.
          </span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
          {/* Org Type Selection */}
          <div>
            <label className="block font-bold text-slate-700 mb-1.5 text-xs">
              소속 기관 구분 <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {(['지방자치단체', '초등학교', '교육지원청', '기타'] as const).map((type) => (
                <button
                  type="button"
                  key={type}
                  onClick={() => setFormData({ ...formData, organizationType: type })}
                  className={`py-2 px-2.5 rounded-full font-semibold text-xs border text-center transition-all cursor-pointer ${
                    formData.organizationType === type
                      ? 'bg-[#009EDB] text-white border-[#009EDB] shadow-2xs'
                      : 'bg-[#F8FBFF] text-slate-600 border-slate-100 hover:bg-slate-100'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Org Name */}
            <div>
              <label className="block font-bold text-slate-700 mb-1 text-xs">
                기관명 / 학교명 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="예: 서울 성북구청 / 숭덕초등학교"
                value={formData.organizationName}
                onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#F8FBFF] border border-slate-100 rounded-full text-xs focus:outline-none focus:ring-2 focus:ring-[#009EDB] focus:bg-white transition-colors"
              />
            </div>

            {/* Name */}
            <div>
              <label className="block font-bold text-slate-700 mb-1 text-xs">
                담당자 성명 및 직책 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="예: 홍길동 주무관 / 김선생 교사"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#F8FBFF] border border-slate-100 rounded-full text-xs focus:outline-none focus:ring-2 focus:ring-[#009EDB] focus:bg-white transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Contact */}
            <div>
              <label className="block font-bold text-slate-700 mb-1 text-xs">
                연락처 (직통 또는 휴대전화) <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                placeholder="02-123-4567 또는 010-0000-0000"
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#F8FBFF] border border-slate-100 rounded-full text-xs focus:outline-none focus:ring-2 focus:ring-[#009EDB] focus:bg-white transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-bold text-slate-700 mb-1 text-xs">
                공식 이메일 <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="example@korea.kr 또는 sen.go.kr"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#F8FBFF] border border-slate-100 rounded-full text-xs focus:outline-none focus:ring-2 focus:ring-[#009EDB] focus:bg-white transition-colors"
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="block font-bold text-slate-700 mb-1 text-xs">
              문의 제목
            </label>
            <input
              type="text"
              required
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-[#F8FBFF] border border-slate-100 rounded-full text-xs focus:outline-none focus:ring-2 focus:ring-[#009EDB] focus:bg-white transition-colors"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block font-bold text-slate-700 mb-1 text-xs">
              문의 내용 및 참여 희망 사항 <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              rows={3}
              placeholder="예: 2026년도 하반기 참여 학교 공모 일정과 지자체 매칭 지원 요건, 예산 지원 범위에 대해 문의드립니다."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-[#F8FBFF] border border-slate-100 rounded-[16px] text-xs focus:outline-none focus:ring-2 focus:ring-[#009EDB] focus:bg-white leading-relaxed transition-colors"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-full font-semibold text-slate-500 hover:bg-slate-100 text-xs transition-colors cursor-pointer"
            >
              취소
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-white bg-[#009EDB] hover:bg-[#0089bd] transition-all text-xs shadow-xs cursor-pointer disabled:opacity-50"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{isSubmitting ? '접수 처리 중...' : '문의 접수하기'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
