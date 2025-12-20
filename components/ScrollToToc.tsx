"use client";

import { useEffect, useState } from "react";

export function ScrollToToc() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // 1. 目次エリアの要素を取得
      const tocElement = document.getElementById("toc");
      
      if (!tocElement) {
        // もし目次が見つからない場合は、とりあえず300px基準にしておく
        if (window.scrollY > 300) setIsVisible(true);
        else setIsVisible(false);
        return;
      }

      // 2. 目次エリアの下端（bottom）の位置を計算
      // offsetTop: ページ最上部からの距離, offsetHeight: 要素の高さ
      const tocBottom = tocElement.offsetTop + tocElement.offsetHeight;

      // 3. 現在のスクロール位置が、目次より下に行ったらボタンを表示
      // 少し余裕を持たせるために +50px しています
      if (window.scrollY > tocBottom + 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    // 初回マウント時にも一度判定を実行（リロード時対策）
    toggleVisibility();

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToToc = () => {
    const tocElement = document.getElementById("toc");
    if (tocElement) {
      // 目次へスムーススクロール（ヘッダー等の被りを考慮して少し上にずらすなら -20 などを調整）
      // scrollIntoViewだと微調整が難しいので、window.scrollToを使います
      const top = tocElement.offsetTop - 20; // 20pxほど余白を空ける
      window.scrollTo({
        top: top,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollToToc}
      style={{
        position: "fixed",
        bottom: "32px",
        right: "32px",
        padding: "12px 20px",
        backgroundColor: "var(--accent)",
        color: "#fff",
        fontSize: "14px",
        fontWeight: "bold",
        border: "none",
        borderRadius: "999px",
        boxShadow: "0 4px 14px rgba(37, 99, 235, 0.3)",
        cursor: "pointer",
        zIndex: 1000,
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? "visible" : "hidden",
        transition: "opacity 0.3s ease, visibility 0.3s ease, transform 0.2s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
    >
      ↑ INDEX
    </button>
  );
}