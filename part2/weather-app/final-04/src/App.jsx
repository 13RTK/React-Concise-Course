import { useState } from "react";

import Container from "./components/Container";
import Forecast from "./components/Forecast";
import Home from "./components/Home";

function App() {
  const [isHome, setIsHome] = useState(true);

  return (
    <Container>
      {isHome ? (
        <Home setIsHome={setIsHome} />
      ) : (
        <Forecast setIsHome={setIsHome} />
      )}
    </Container>
  );
}

export default App;
