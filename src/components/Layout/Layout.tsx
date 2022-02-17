import React from "react";

import "./Layout.scss";

import { Header } from "../";

const Component: React.FC = ({ children }) => {
  return (
    <div className="container">
      <div className="page">
        <Header />
        <main>{children}</main>
      </div>
      <div className="footer">
        <p className="text-center text-small">
          Made with joy by{" "}
          <a href="http://rewdy.lol" target="_blank" rel="noreferrer">
            rewdy
          </a>{" "}
          <span role="img" aria-label="joy">
            😂
          </span>
        </p>
      </div>
    </div>
  );
};

export default Component;
