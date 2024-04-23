import { useTime } from "./useTime";

function Time() {
  const { currentTime } = useTime();

  return <div>{currentTime}</div>;
}

export default Time;
