import React from "react";
import Login from "./components/Login";

const App: React.FC = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        overflow: "hidden",
        margin: 0,
        padding: 0,
      }}
    >
      <Login />
    </div>
  );
};

export default App;
