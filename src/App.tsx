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
      <header className="App-header">json smile</header>
      <main>
        {error && (
          <div className="error">{error}</div>
        )}
        <textarea
          value={input}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setInput(e.target.value);
          }}
          className="codes"
        />
        <button type="button" onClick={makePretty} className="btn">
          Make it smile 😊
        </button>
      </main>
    </div>
  );
}

export default App;
