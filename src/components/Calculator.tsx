import { useState } from "react";

const Calculator = () => {
  const [rightSide, setRightSide] = useState("");
  const [track, setTrack] = useState("");
  const [leftSide, setLeftSide] = useState("");
  const [final, setFinal] = useState("");
  const handleRight = (e: React.MouseEvent<HTMLButtonElement>) => {
    const text = e.currentTarget.textContent;

    setTrack((prev) => `${prev}${text}`);
    if (track.includes("+")) {
      setLeftSide((prev) => `${prev}${text === "+" ? "" : text}`);
    } else {
      setRightSide((prev) => `${prev}${text === "+" ? "" : text}`);
    }
    if (track[track.length - 1] === "+") {
      setFinal(rightSide + leftSide);
    }
  };

  // console.log(track);
  console.log("The Right numbers:" + rightSide);
  console.log("The left numbers:" + leftSide);
  return (
    <>
      <section>
        <p>{`Right Side Numbers (${rightSide})`}</p>
        <p>{`Left Side Numbers (${leftSide})`}</p>
        <p>Tracking : {track}</p>
        <p>Final Answer : {final}</p>
        <section>
          <button onClick={handleRight}>1</button>
          <button onClick={handleRight}>2</button>
          <button onClick={handleRight}>3</button>
          <button onClick={handleRight}>+</button> <br />
          <button>=</button>
        </section>
      </section>
    </>
  );
};
export default Calculator;
