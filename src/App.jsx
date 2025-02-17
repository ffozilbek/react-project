import React from "react";
import {
  Navbar,
  Homepage,
  Companies,
  Features,
  Meets,
  Users,
} from "./components";

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
        <Meets />
        <Users />
      </main>
    </>
  );
}

export default App;
