import React from "react";
import { Navbar, Homepage, Companies, Features } from "./components";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Homepage />
        <Companies />
        <Features />
      </main>
    </>
  );
}

export default App;
