import React from "react";
import { Status } from "models";

import "./Status.scss";

type StatusProps = {
  status?: Status;
  closer?: () => void;
};

export const StatusDisplay: React.FC<StatusProps> = ({ status, closer }) => {
  if (!status) return null;

  const classList = ["status", `status-${status.type}`];

  const CloserButton = () => {
    if (!closer) return null;

    return (
      <div>
        <button
          type="button"
          className="btn btn-naked"
          onClick={() => closer()}
        >
          <span role="img" aria-label="close alert">
            ❎
          </span>
        </button>
      </div>
    );
  };

  return (
    <div className={classList.join(" ")}>
      <div>{status.message}</div>
      <CloserButton />
    </div>
  );
};
