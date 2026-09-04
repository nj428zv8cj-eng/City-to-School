import { ResourceItem } from '../types';

export function triggerResourceDownload(resource: ResourceItem, onNotify?: (msg: string) => void) {
  const content = `=====================================================
[UNICEF 유니세프 한국위원회] City to School 공식 사업 자료
=====================================================

자료명: ${resource.title}
카테고리: ${resource.category}
파일형식: ${resource.fileType}
파일용량: ${resource.fileSize}
등록일: ${resource.date}

[자료 개요]
${resource.description}

-----------------------------------------------------
* 본 자료는 유니세프 한국위원회의 아동친화도시 'City to School' 
  프로젝트 참여 학교 및 지방자치단체의 사업 운영을 위해 제공되는 
  공식 자료입니다.
* 문의처: 유니세프 한국위원회 아동권리본부
  - 홈페이지: https://www.unicef.or.kr
  - 프로젝트: City to School (학교에서 시작된 아동의 목소리, 지역의 변화로)
=====================================================
`;

  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  
  // Extension mapping
  const ext = resource.fileType.toLowerCase();
  const safeTitle = resource.title.replace(/[\/\\:*?"<>|]/g, '_');
  a.download = `[유니세프_CityToSchool]_${safeTitle}.${ext === 'pdf' ? 'txt' : ext}`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  if (onNotify) {
    onNotify(`'${resource.title}' 다운로드가 시작되었습니다.`);
  }
}
