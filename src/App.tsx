import React, { useState } from "react";

import "./App.scss";

function App() {
  const [error, setError] = useState<string>();
  const [input, setInput] = useState("");

  const makePretty = () => {
    setError(undefined);
    if (!input) return;
    try {
      const json = JSON.parse(input);
      setInput(JSON.stringify(json, null, 2));
    } catch (err) {
      console.log("Bad json", err);
      setError(err.toString());
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-title">json smile</div>
        <div className="App-tagline">Super simple JSON formatter. Make your json smile 😍.</div>
      </header>
      <main>
        {error && <div className="error">{error}</div>}
        <textarea
          value={input}
          placeholder={"Paste JSON here"}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setInput(e.target.value);
          }}
          onPaste={() => setTimeout(makePretty, 100)}
          className="codes"
        />
        <p>
          <button type="button" onClick={makePretty} className="btn btn-block">
            Make it smile 😊
          </button>
        </p>
      </main>
    </div>
  );
}

export default App;
