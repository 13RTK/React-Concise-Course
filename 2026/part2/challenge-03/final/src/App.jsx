/*
  More: Create TogglePurple and TextColor components

  tips: circle size and rotate style:
  height: 0px,
  width: 0px,
  lineHeight: 0px,
  transform: `rotate(0deg)`,
*/

import { useState } from "react";
import CircleProperty from "./CircleProperty.jsx";

function App() {
  const [isPurple, setIsPurple] = useState(false);
  const [textColor, setTextColor] = useState("");

  const circleClasses = `${isPurple ? "purple" : ""} ${textColor}`;

  const [size, setSize] = useState(150);
  const [rotate, setRotate] = useState(0);

  const circleStyles = {
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
          onChange={() => setIsPurple(!isPurple)}
          checked={isPurple}
        />
      </label>

      <label>
        text color
        <select
          value={textColor}
          onChange={(event) => setTextColor(event.target.value)}
        >
          <option value="" selected>
            White
          </option>
          <option value="text-black">Black</option>
          <option value="text-orange">Orange</option>
        </select>
      </label>

      <CircleProperty value={size} setValue={setSize}>
        Circle Size
      </CircleProperty>
      <CircleProperty value={rotate} setValue={setRotate}>
        Circle Rotate
      </CircleProperty>

      <div className={`circle ${circleClasses}`} style={circleStyles}>
        Hi!
      </div>
    </main>
  );
}

export default App;
