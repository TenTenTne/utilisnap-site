import React from "react";

export default function App() {
  return (
    <>
      <header style={{ background: '#111827', color: 'white', padding: '1rem 0', textAlign: 'center' }}>
        <h1>🛠️ 실용적인 웹 유틸리티 모음</h1>
      </header>

      <nav
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1.5rem',
          flexWrap: 'wrap',
          padding: '1rem',
          background: '#f3f4f6',
          borderBottom: '1px solid #ddd'
        }}
      >
        <a href="#" style={linkStyle}>홈</a>
        <a href="#" style={linkStyle}>텍스트 도구</a>
        <a href="#" style={linkStyle}>개발 도구</a>
        <a href="#" style={linkStyle}>변환기</a>
        <a href="#" style={linkStyle}>계산기</a>
        <a href="#" style={linkStyle}>기타</a>
      </nav>

      {/* AD_TOP */}

      <div style={{ maxWidth: 960, margin: '2rem auto', padding: '1rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>🔥 인기 유틸리티 Top 6</h2>
        <div style={gridStyle}>
          {tools.map((tool) => (
            <a key={tool.href} href={tool.href} style={cardStyle}>
              <h3 style={{ fontSize: '1.1rem', margin: '0.5rem 0' }}>{tool.title}</h3>
              <p>{tool.desc}</p>
            </a>
          ))}
        </div>
      </div>

      {/* AD_MID */}

      <footer
        style={{
          textAlign: 'center',
          fontSize: '0.9rem',
          color: '#777',
          padding: '2rem 0',
          borderTop: '1px solid #eee',
          marginTop: '3rem'
        }}
      >
        <p>ⓒ 2025 웹툴박스 | 실용적이고 빠른 온라인 유틸리티 모음</p>
        {/* AD_BOTTOM */}
      </footer>
    </>
  );
}

const linkStyle = {
  color: '#111827',
  textDecoration: 'none',
  fontWeight: 600
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
  gap: '1.5rem'
};

const cardStyle = {
  padding: '1.2rem',
  border: '1px solid #e5e7eb',
  borderRadius: '12px',
  textAlign: 'center',
  background: '#f9fafb',
  textDecoration: 'none',
  color: '#333',
  transition: 'box-shadow 0.2s'
};

const tools = [
  { href: '/charcount', title: '글자수 세기', desc: '문자 수, 단어 수를 빠르게 계산' },
  { href: '/datecalc', title: '날짜 계산기', desc: '두 날짜 간의 차이 계산' },
  { href: '/emoji-cleaner', title: '이모지 제거기', desc: '텍스트 내 이모지 자동 삭제' },
  { href: '/case-toggle', title: '대소문자 변환기', desc: '텍스트를 UPPER/lower Case로 변경' },
  { href: '/json-formatter', title: 'JSON 정렬기', desc: 'JSON을 보기 좋게 정리' },
  { href: '/adsense-calc', title: 'AdSense 수익 계산기', desc: '예상 광고 수익 간편 계산' }
];
