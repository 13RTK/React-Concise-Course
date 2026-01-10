/*
  1. Migrate all the project to vite scaffold
  2. Abstract CircleProperty component from circle size and circle rotate
  
  More: Create TogglePurple and TextColor components

  tips: circle size and rotate style:
  height: 0px,
  width: 0px,
  lineHeight: 0px,
  transform: `rotate(0deg)`,
*/

function MyApp() {
  const [isPurple, setIsPurple] = React.useState(false);
  const [textColor, setTextColor] = React.useState("");

  const circleClasses = `${isPurple ? "purple" : ""} ${textColor}`;

  const [size, setSize] = React.useState(150);
  const [rotate, setRotate] = React.useState(0);

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

      <label>
        Circle Size
        <input
          type="number"
          value={size}
          onChange={(event) => setSize(event.target.value)}
        />
      </label>

      <label>
        Circle Rotate
        <input
          type="number"
          value={rotate}
          onChange={(event) => setRotate(event.target.value)}
        />
      </label>
      <div className={`circle ${circleClasses}`} style={circleStyles}>
        Hi!
      </div>
    </main>
  );
}

const appEl = document.querySelector("#app");
const root = ReactDOM.createRoot(appEl);

root.render(<MyApp />);
