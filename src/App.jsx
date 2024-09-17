import "./App.css";
import Generator from "./components/Generator";
import WelcomePage from "./components/WelcomePage";
import { useState } from "react";

function App() {
  
  const [isVisited, setIsVisited] = useState(false);

  if (isVisited) {
    return <Generator/>;
  }

  return (
    <>
      <WelcomePage setIsVisited={setIsVisited}>
        <p><span>CV Resume</span> is a simple, light and <i>fast</i> APP for create you professional resume.</p>
      </WelcomePage>
    </>
  );
}

export default App;
