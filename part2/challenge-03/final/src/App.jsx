import { useState } from "react";
import AppInput from "./AppInput";
import "./App.css";

function App() {
  const [isPurple, setIsPurple] = useState("");
  const [textColor, setTextColor] = useState("");

  const [size, setSize] = useState(150);
  const [rotate, setRotate] = useState(0);

  const circleStyle = {
    height: `${size}px`,
    width: `${size}px`,
    lineHeight: `${size}px`,

    transform: `rotate(${rotate}deg)`,
  };

  return (
    <main>
      <label>
        Purple
        <input
          type="checkbox"
          value={isPurple}
          onChange={() => setIsPurple(!isPurple)}
        />
      </label>

      <label>
        text color
        <select
          onChange={(event) => setTextColor(event.target.value)}
          value={textColor}
        >
          <option value="">White</option>
          <option value="text-black">Black</option>
          <option value="text-orange">Orange</option>
        </select>
      </label>

      <AppInput value={size} setState={setSize}>
        Circle Size
      </AppInput>

      <AppInput value={rotate} setState={setRotate}>
        Circle Rotate
      </AppInput>

      <div
        className={`circle ${isPurple ? "purple" : ""} ${textColor}`}
        style={circleStyle}
      >
        Hi!
      </div>
    </main>
  );
}

export default App;
