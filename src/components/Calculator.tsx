import { useState } from "react";

const Calculator = () => {
  const [current, setCurrent] = useState(0);
  const [num, setNum] = useState<string>("");
  const [control, setControl] = useState(true);
  const [firstNum, setFirstNum] = useState<string[]>([]);
  const [secondNum, setSecondNum] = useState("");
  const [calculation, setCalculation] = useState("");
  const [trackNum, setTrackNum] = useState(false);
  const handleClicks = (e: React.MouseEvent<HTMLButtonElement>) => {
    const signs = ["+", "-", "x", "/"];
    const currentValue = e.currentTarget.textContent;

    if (currentValue === "AC") {
      setControl(true);
      setNum("");
      setCurrent(0);
      setFirstNum([]);
      setSecondNum("");
    } else if (
      currentValue === "+" ||
      currentValue === "-" ||
      currentValue === "/" ||
      currentValue === "x"
    ) {
      // setCalculation(currentValue);
      setTrackNum(true);
      setFirstNum(num.split("").filter((e) => Number(e)));
    } else if (trackNum) {
      setSecondNum((prev) => prev.concat(currentValue));
    } else {
      setControl(false);
    }
    setNum((prev) => prev.concat(currentValue));
  };

  // console.log(firstNum);
  // console.log(secondNum.split("").filter((e) => Number(e)));
  // console.log(secondNum.length === 0 ? true : false);
  // // console.log(control);
  // // console.log(num.split("").filter((e) => Number(e)));
  // console.log(calculation);
  // console.log(num.split("").filter((e) => Number(e)));
  // console.log(trackNum);
  // console.log(control);

  return (
    <>
      <section className="my-11">
        <main className="bg-gray-500 h-14 ">
          <p className="text-right text-white text-4xl relative top-1.5 right-2.5">
            {secondNum.length === 0
              ? control
                ? current
                : num.split("").filter((e) => Number(e))
              : secondNum.split("").filter((e) => Number(e))}
          </p>
        </main>
        <section className="bg-gray-100 grid grid-cols-4 ">
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              handleClicks(e);
            }}
            className="border border-gray-400 p-7 text-3xl font-medium"
          >
            AC
          </button>
          <button className=" border border-gray-400 text-3xl font-medium">
            +/-
          </button>
          <button className=" border border-gray-400 text-3xl font-medium">
            %
          </button>
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              handleClicks(e);
            }}
            className=" border border-gray-400 text-3xl font-medium bg-orange-500 text-white"
          >
            /
          </button>
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              handleClicks(e);
            }}
            className=" border border-gray-400 p-7 text-3xl font-medium"
          >
            7
          </button>
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              handleClicks(e);
            }}
            className=" border border-gray-400 text-3xl font-medium"
          >
            8
          </button>
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              handleClicks(e);
            }}
            className=" border border-gray-400 text-3xl font-medium"
          >
            9
          </button>
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              handleClicks(e);
            }}
            className=" border border-gray-400 text-3xl font-medium bg-orange-500  text-white"
          >
            x
          </button>
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              handleClicks(e);
            }}
            className=" border border-gray-400 p-7 text-3xl font-medium"
          >
            4
          </button>
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              handleClicks(e);
            }}
            className=" border border-gray-400 text-3xl font-medium"
          >
            5
          </button>
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              handleClicks(e);
            }}
            className=" border border-gray-400 text-3xl font-medium"
          >
            6
          </button>
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              handleClicks(e);
            }}
            className=" border border-gray-400 text-3xl font-medium bg-orange-500  text-white"
          >
            -
          </button>
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              handleClicks(e);
            }}
            className=" border border-gray-400 p-7 text-3xl font-medium"
          >
            1
          </button>
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              handleClicks(e);
            }}
            className=" border border-gray-400 p-7 text-3xl font-medium"
          >
            2
          </button>
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              handleClicks(e);
            }}
            className=" border border-gray-400 text-3xl font-medium"
          >
            3
          </button>
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              handleClicks(e);
            }}
            className=" border border-gray-400 text-3xl font-medium bg-orange-500  text-white"
          >
            +
          </button>
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              handleClicks(e);
            }}
            className=" border border-gray-400 col-span-2 p-7 text-3xl font-medium"
          >
            0
          </button>
          <button
            onClick={() => {}}
            className=" border border-gray-400 text-3xl font-medium"
          >
            .
          </button>
          <button
            onClick={() => {}}
            className=" border border-gray-400 text-3xl font-medium bg-orange-500  text-white"
          >
            =
          </button>
        </section>
      </section>
    </>
  );
};

export default Calculator;
