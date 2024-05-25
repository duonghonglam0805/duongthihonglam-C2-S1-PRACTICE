import React from "react";
import "./index.css";
import Card from "./components/Card";
import { AVAILABLE_STUDENT } from "./data.js";
function App() {
  return <>
  {/* Your code  here */}
  <header>
      <h1>My Class</h1>
  </header>
  <div class="cards-view">
      <div class="cards-grid">
  {AVAILABLE_STUDENT.map((student) => 
    <Card 
    key = {student.id}
    student={student}/>
  )}
  </div>
    </div>

  </>;
}

export default App;
