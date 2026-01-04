/*
  1. Bind the input/select to the states
  2. Change the circle styles based on the states

  tips: circle size and rotate style:
  height: 0px,
  width: 0px,
  lineHeight: 0px,
  transform: `rotate(0deg)`,
*/

function MyApp() {
  return (
    <main>
      <label>
        Purple
        <input type="checkbox" />
      </label>

      <label>
        text color
        <select>
          <option value="" selected>
            White
          </option>
          <option value="text-black">Black</option>
          <option value="text-orange">Orange</option>
        </select>
      </label>

      <label>
        Circle Size
        <input type="number" value="150" />
      </label>

      <label>
        Circle Rotate
        <input type="number" value="0" />
      </label>
      <div className="circle">Hi!</div>
    </main>
  );
}

const appEl = document.querySelector("#app");
const root = ReactDOM.createRoot(appEl);

root.render(<MyApp />);
