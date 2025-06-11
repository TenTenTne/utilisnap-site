import React, { useState } from "react";

export default function AdsenseCalc() {
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("blog");
  const [visitors, setVisitors] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const estimateRevenue = () => {
    if (!url.trim()) {
      alert("URL을 입력해주세요.");
      return;
    }

    let hostname: string;
    try {
      hostname = new URL(url).hostname.toLowerCase();
    } catch {
      alert("올바른 URL을 입력하세요.");
      return;
    }

    const rpmMap: Record<string, number> = {
      blog: 1.2,
      news: 2.0,
      ecommerce: 3.5,
      tool: 2.8,
      educational: 1.8,
    };

    const ctrMap: Record<string, number> = {
      blog: 0.013,
      news: 0.012,
      ecommerce: 0.02,
      tool: 0.018,
      educational: 0.015,
    };

    const rpm = rpmMap[category] || 1.2;
    const ctr = ctrMap[category] || 0.015;

    let finalVisitors = parseInt(visitors);
    if (!finalVisitors || finalVisitors <= 0) {
      if (hostname.includes("tistory")) finalVisitors = 50;
      else if (hostname.includes("naver")) finalVisitors = 100;
      else if (hostname.includes("velog")) finalVisitors = 80;
      else if (hostname.includes("github.io")) finalVisitors = 40;
      else finalVisitors = 30;
    }

    const dailyRevenue = (finalVisitors / 1000) * rpm;
    const monthlyRevenue = dailyRevenue * 30;

    const formatted = `
      <strong>${hostname}</strong> 사이트 분석 결과:<br>
      ▶ 카테고리: ${category}<br>
      ▶ 일일 방문자 수: ${Math.round(finalVisitors)}명<br>
      ▶ 평균 CTR: ${(ctr * 100).toFixed(2)}%<br>
      ▶ 적용된 RPM: <strong>$${rpm.toFixed(2)}</strong><br>
      ▶ 💸 <strong>일일 수익: $${dailyRevenue.toFixed(2)}</strong><br>
      ▶ 📈 <strong>월간 수익: $${monthlyRevenue.toFixed(2)}</strong>
    `;
    setResult(formatted);
  };

  return (
    <div style={{ padding: "2rem", maxWidth: 700, margin: "auto" }}>
      <h1 style={{ textAlign: "center" }}>📊 AdSense 수익 계산기</h1>

      <label style={labelStyle}>🔧 사이트 카테고리</label>
      <select value={category} onChange={(e) => setCategory(e.target.value)} style={inputStyle}>
        <option value="blog">개인 블로그</option>
        <option value="news">뉴스/매거진</option>
        <option value="ecommerce">쇼핑몰/상품</option>
        <option value="tool">웹 도구/유틸리티</option>
        <option value="educational">교육 콘텐츠</option>
      </select>

      <label style={labelStyle}>🌐 웹사이트 URL</label>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="예: https://example.com"
        style={inputStyle}
      />

      <label style={labelStyle}>👥 일일 방문자 수 (선택)</label>
      <input
        type="number"
        value={visitors}
        onChange={(e) => setVisitors(e.target.value)}
        placeholder="예: 100"
        style={inputStyle}
      />

      <button onClick={estimateRevenue} style={buttonStyle}>
        💰 예상 수익 계산
      </button>

      {result && (
        <div
          className="result"
          style={{
            marginTop: "2rem",
            padding: "1rem",
            background: "#d1ecf1",
            borderLeft: "6px solid #0c5460",
            borderRadius: "8px",
            fontFamily: "'Courier New', monospace",
          }}
          dangerouslySetInnerHTML={{ __html: result }}
        />
      )}

      <footer style={{ marginTop: "3rem", fontSize: "0.95rem", color: "#444", borderTop: "1px dashed #aaa", paddingTop: "1.5rem" }}>
        <h2>AdSense 수익 계산기란?</h2>
        <p>
          웹사이트와 블로그의 <strong>일일 방문자 수</strong>와 <strong>카테고리</strong>를 기반으로 Google AdSense의 <strong>예상 수익</strong>을 계산해주는 도구입니다.
        </p>
        <p>
          추정치는 정확하지 않을 수 있으나, 전반적인 <strong>수익 가능성 분석</strong>에 매우 유용합니다.
        </p>
      </footer>
    </div>
  );
}

const labelStyle = { fontWeight: "bold", marginTop: "1rem", display: "block" };
const inputStyle = {
  padding: "0.6rem",
  marginTop: "0.3rem",
  width: "100%",
  fontSize: "1rem",
  border: "2px solid #555",
  borderRadius: "0.4rem",
  backgroundColor: "#fafafa",
  boxShadow: "inset 2px 2px 3px #ddd",
};
const buttonStyle = {
  backgroundColor: "#444",
  color: "white",
  marginTop: "1.2rem",
  padding: "0.7rem",
  width: "100%",
  fontWeight: "bold",
  border: "none",
  borderRadius: "0.4rem",
  cursor: "pointer",
};
