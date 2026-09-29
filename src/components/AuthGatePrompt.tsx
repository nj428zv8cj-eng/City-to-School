import React from 'react';
import { Lock, LogIn, ShieldAlert, ArrowLeft } from 'lucide-react';

interface AuthGatePromptProps {
  sectionTitle: string;
  onOpenLogin: () => void;
  onBackToHome: () => void;
  onQuickLogin?: () => void;
}

export const AuthGatePrompt: React.FC<AuthGatePromptProps> = ({
  sectionTitle,
  onOpenLogin,
  onBackToHome,
  onQuickLogin
}) => {
  return (
    <div className="max-w-xl mx-auto py-16 px-4 text-center">
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-md">
        <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#009EDB] flex items-center justify-center mx-auto mb-6 shadow-xs">
          <Lock className="w-8 h-8" />
        </div>

        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-600 border border-amber-200/60 mb-3">
          <ShieldAlert className="w-3.5 h-3.5" />
          회원 전용 서비스
        </span>

        <h3 className="text-2xl font-extrabold text-slate-900 mb-3 tracking-tight">
          '{sectionTitle}' 열람 안내
        </h3>

        <p className="text-slate-500 text-sm leading-relaxed mb-8 break-keep">
          본 메뉴는 City to School 참여 지자체 및 학교 회원만 열람하실 수 있습니다.<br />
          로그인 후 이용해 주시기 바랍니다.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
          <button
            onClick={onOpenLogin}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-[#009EDB] hover:bg-[#007fb1] shadow-md shadow-[#009EDB]/25 transition-all cursor-pointer"
          >
            <LogIn className="w-4 h-4" />
            로그인하기
          </button>
          <button
            onClick={onBackToHome}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-slate-600 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            메인 페이지로 이동
          </button>
        </div>

        {onQuickLogin && (
          <div className="pt-4 border-t border-slate-100">
            <button
              onClick={onQuickLogin}
              className="text-xs font-semibold text-[#009EDB] hover:text-[#007fb1] hover:underline cursor-pointer inline-flex items-center gap-1"
            >
              ⚡ 미리보기/테스트용 계정으로 즉시 잠금 해제하기
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
