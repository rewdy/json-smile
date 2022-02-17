import React from "react";
import { useLocalStorageState } from "ahooks";
import { STATE_KEY } from "config";
import { parse } from "dirty-json";
import { Status } from "models";
import { Button, StatusDisplay } from "components";

import "./Form.scss";

export const Form: React.FC = () => {
  const [text, setText] = useLocalStorageState<string>(`${STATE_KEY} text`, {
    defaultValue: "",
  });
  const [status, setStatus] = React.useState<Status>();

  // Handlers
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Clear prev status
    clearStatus();

    // If there's no text, show an error
    if (text.trim() === "") {
      setStatus({
        type: "info",
        message: "😝 Oi! It looks like you haven't added your JSON! Lol.",
      });
      return;
    }

    // Do the formatting
    try {
      const cleaned = parse(text);
      setText(JSON.stringify(cleaned, null, 2));
    } catch (err) {
      setStatus({
        type: "error",
        message: "😵 Oh no! It looks like that maybe isn't valid JSON!?",
      });
      console.error("Could not format", err);
    }
  };

  const handleClear = () => {
    setText("");
    clearStatus();
  };

  const clearStatus = () => {
    setStatus(undefined);
  };

  return (
    <form onSubmit={onSubmit}>
      <StatusDisplay status={status} closer={clearStatus} />
      <div className="form-item">
        <label htmlFor="text-input">Your JSON</label>
        <textarea
          id="text-input"
          name="text-input"
          className="textarea textarea-tall"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste your json here..."
        />
      </div>
      <div className="form-actions text-center">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleClear}
        >
          Clear
        </button>
        <Button type="submit" color="primary" radiate>
          Make it sMiLE{" "}
          <span role="img" aria-label="kissy face">
            😘
          </span>
        </Button>
      </div>
    </form>
  );
};
