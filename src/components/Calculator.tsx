import { useState } from "react";

const Calculator = () => {
  const [rightSide, setRightSide] = useState<string | number>("");
  const [track, setTrack] = useState("");
  const [leftSide, setLeftSide] = useState<string | number>("");
  const [final, setFinal] = useState<string | number>("");
  const [answer, setAnswer] = useState(false);
  const [secondInput, setSecondInput] = useState(false);

  const handleRight = (e: React.MouseEvent<HTMLButtonElement>) => {
    const text = e.currentTarget.textContent;

    setTrack((prev) => `${prev}${text}`);
    if (track.includes("+")) {
      setLeftSide((prev) => `${prev}${text === "+" ? "" : text}`);
    } else {
      setRightSide((prev) => `${prev}${text === "+" ? "" : text}`);
    }
  };

  const handleSum = () => {
    const first = Number(rightSide);
    const secon = Number(leftSide);
    setFinal(first + secon);
  };

  const checkFinal = () => {
    if (final !== "") {
      setAnswer(true);
    }
  };

  const second = () => {
    if (leftSide !== "") setSecondInput(true);
  };
  return (
    <>
      <section>
        <p>This is the final answer : {answer ? final : rightSide} </p>
        <p>{`Right Side Numbers (${rightSide})`}</p>
        <p>{`Left Side Numbers (${leftSide})`}</p>
        <p>Tracking : {track}</p>
        <p>Final Answer : {final}</p>
        <section>
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              handleRight(e);
              second();
            }}
          >
            1
          </button>
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              handleRight(e);
              second();
            }}
          >
            2
          </button>
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              handleRight(e);
            }}
          >
            3
          </button>
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              handleRight(e);
              handleSum();
              checkFinal();
            }}
          >
            +
          </button>{" "}
          <br />
          <button
            onClick={() => {
              handleSum();
              second();
            }}
          >
            =
          </button>
        </section>
      </section>
    </>
  );
};
export default Calculator;
