import React, { useState } from 'react';
import { X, LogIn, Building2, School } from 'lucide-react';

export interface UserSession {
  name: string;
  role: '지자체 담당자' | '학교 교원' | '유니세프 관리자';
  organization: string;
}

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: UserSession) => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess
}) => {
  const [role, setRole] = useState<'지자체' | '학교'>('지자체');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const userObj: UserSession = {
        name: email ? (email.includes('@') ? email.split('@')[0] : email) : (role === '지자체' ? '성북구청 아동친화팀' : '서울성북초 교원'),
        role: role === '지자체' ? '지자체 담당자' : '학교 교원',
        organization: role === '지자체' ? '서울시 성북구' : '성북초등학교'
      };
      onLoginSuccess(userObj);
      onClose();
    }, 500);
  };

  return (
    <div
      id="login-modal-backdrop"
      className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="login-modal-content"
        className="bg-white rounded-[24px] max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-100 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 mb-5 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#009EDB] flex items-center justify-center">
              <LogIn className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-slate-900">
                City to School 포털 로그인
              </h3>
            </div>
          </div>
          <button
            id="close-login-modal-btn"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Role Segmented Tabs */}
        <div className="grid grid-cols-2 gap-1.5 p-1 bg-slate-100 rounded-xl mb-5 text-xs font-semibold text-slate-600">
          <button
            type="button"
            onClick={() => { setRole('지자체'); }}
            className={`flex items-center justify-center gap-1 py-2.5 rounded-lg transition-all ${
              role === '지자체' ? 'bg-white text-[#009EDB] shadow-2xs font-bold' : 'hover:text-slate-900'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            지자체
          </button>
          <button
            type="button"
            onClick={() => { setRole('학교'); }}
            className={`flex items-center justify-center gap-1 py-2.5 rounded-lg transition-all ${
              role === '학교' ? 'bg-white text-[#009EDB] shadow-2xs font-bold' : 'hover:text-slate-900'
            }`}
          >
            <School className="w-3.5 h-3.5" />
            학교
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              아이디
            </label>
            <input
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="아이디를 입력하세요"
              className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#009EDB] focus:bg-white transition-all text-slate-800 placeholder:text-slate-400"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              비밀번호
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#009EDB] focus:bg-white transition-all text-slate-800 placeholder:text-slate-400"
            />
          </div>

          <div className="flex items-center justify-between text-xs pt-1">
            <label className="flex items-center gap-1.5 text-slate-600 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded text-[#009EDB] focus:ring-[#009EDB] border-slate-300"
              />
              로그인 상태 유지
            </label>
            <button
              type="button"
              onClick={() => alert('등록된 공직자/업무용 이메일로 비밀번호 재설정 안내가 발송됩니다.')}
              className="text-slate-500 hover:text-[#009EDB] transition-colors"
            >
              비밀번호 찾기
            </button>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-[#009EDB] hover:bg-[#007fb1] active:bg-[#00709c] transition-all shadow-md shadow-[#009EDB]/25 flex items-center justify-center gap-2 cursor-pointer"
          >
            {isSubmitting ? '로그인 중...' : '로그인'}
          </button>
        </form>

        {/* Quick Demo Accounts for Testing */}
        <div className="mt-5 pt-4 border-t border-slate-100">
          <p className="text-[11px] font-bold text-slate-400 mb-2.5 text-center">
            ⚡ 테스트 / 미리보기 원클릭 로그인
          </p>
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => {
                onLoginSuccess({
                  name: '유니세프 관리자',
                  role: '유니세프 관리자',
                  organization: '유니세프 한국위원회'
                });
                onClose();
              }}
              className="px-2 py-2 text-xs font-semibold bg-blue-50/80 text-[#009EDB] hover:bg-blue-100/80 rounded-xl transition-colors border border-blue-100 text-center"
            >
              유니세프 관리자
            </button>
            <button
              type="button"
              onClick={() => {
                onLoginSuccess({
                  name: '성북구청 아동친화팀',
                  role: '지자체 담당자',
                  organization: '서울시 성북구'
                });
                onClose();
              }}
              className="px-2 py-2 text-xs font-semibold bg-slate-50 text-slate-700 hover:bg-slate-100 rounded-xl transition-colors border border-slate-200 text-center"
            >
              지자체 담당자
            </button>
            <button
              type="button"
              onClick={() => {
                onLoginSuccess({
                  name: '성북초 담당교사',
                  role: '학교 교원',
                  organization: '성북초등학교'
                });
                onClose();
              }}
              className="px-2 py-2 text-xs font-semibold bg-slate-50 text-slate-700 hover:bg-slate-100 rounded-xl transition-colors border border-slate-200 text-center"
            >
              학교 교원
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
