import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/route";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<>Loading ...</>}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
