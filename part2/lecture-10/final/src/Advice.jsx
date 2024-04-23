import { useAdvice } from "./useAdvice";

function Advice() {
  const { isLoading, advice, getAdvice } = useAdvice();

  return (
    <>
      <div>{isLoading ? "Loading..." : advice}</div>
      <button onClick={getAdvice}>Get Advice</button>
    </>
  );
}

export default Advice;
