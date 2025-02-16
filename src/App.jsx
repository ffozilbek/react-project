import React from "react";
import { Navbar, Homepage, Companies } from "./components";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Homepage />
        <Companies />
      </main>
    </>
  );
}

export default App;
