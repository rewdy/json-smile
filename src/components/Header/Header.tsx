import React from "react";

import "./Header.scss";

export const Header: React.FC = () => {
  return (
    <header className="header-page">
      <div className="site-title h1">
        <span className="carrot">JSON Smile</span>
      </div>
      <div className="site-tagline">Make your jsons happy!</div>
    </header>
  );
};
