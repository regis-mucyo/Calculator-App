import { useState } from "react";
const Calculator = () => {
  const [defaultNum, setDefaultNum] = useState<string[]>(["0"]);
  const [numbers, setNumbers] = useState<string[]>([]);
  const [firstInput, setFirstInput] = useState<string[]>([]);
  const [trackInput, setTrackInput] = useState(false);
  const [calSign, setCalSign] = useState("");
  const [secondInput, setSecondInput] = useState<string[]>([]);

  const handleNum = (e: React.MouseEvent<HTMLButtonElement>) => {
    const currentNum = e.currentTarget.textContent;
    setNumbers((prev) =>
      numbers.length >= 12 ? numbers : [...prev, currentNum],
    );
    if (trackInput) {
      setSecondInput((prev) => [...prev, currentNum]);
    } else {
      setFirstInput((prev) => [...prev, currentNum]);
    }
  };
  const handleSign = (e: React.MouseEvent<HTMLButtonElement>) => {
    const currentSign = e.currentTarget.textContent;

    if (!trackInput) {
      setFirstInput(numbers.join("").split(" "));
      setTrackInput(true);
      setNumbers([]);
      setCalSign(currentSign);
    }

    if (secondInput.length !== 0) {
      switch (calSign) {
        case "+":
          setFirstInput([
            `${Number(firstInput.slice(0, 12).join("")) + Number(secondInput.slice(0, 12).join(""))}`,
          ]);

          setSecondInput([]);
          setTrackInput(false);
          setCalSign("");
          setNumbers([
            `${Number(firstInput.slice(0, 12).join("")) + Number(secondInput.slice(0, 12).join(""))}`,
          ]);
          break;
        case "-":
          setFirstInput([
            `${Number(firstInput.slice(0, 12).join("")) - Number(secondInput.slice(0, 12).join(""))}`,
          ]);
          setSecondInput([]);
          setTrackInput(false);
          setNumbers([
            `${Number(firstInput.slice(0, 12).join("")) - Number(secondInput.slice(0, 12).join(""))}`,
          ]);
          setCalSign("");
          break;
        case "/":
          setFirstInput([
            `${Number(firstInput.slice(0, 12).join("")) / Number(secondInput.slice(0, 12).join(""))}`,
          ]);
          setSecondInput([]);
          setTrackInput(false);
          setCalSign("");
          setNumbers([
            `${Number(firstInput.slice(0, 12).join("")) / Number(secondInput.slice(0, 12).join(""))}`,
          ]);
          break;
        case "x":
          setFirstInput([
            `${Number(firstInput.slice(0, 12).join("")) * Number(secondInput.slice(0, 12).join(""))}`,
          ]);
          setSecondInput([]);
          setTrackInput(false);
          setCalSign("");
          setNumbers([
            `${Number(firstInput.slice(0, 12).join("")) * Number(secondInput.slice(0, 12).join(""))}`,
          ]);
          break;
      }
    }
  };

  const handleSecondSign = (e: React.MouseEvent<HTMLButtonElement>) => {
    const currentSign = e.currentTarget.textContent;
    if (currentSign === "=") {
      switch (calSign) {
        case "+":
          setSecondInput([]);
          setFirstInput([
            `${Number(firstInput.slice(0, 12).join("")) + Number(secondInput.slice(0, 12).join(""))}`,
          ]);
          setTrackInput(false);
          setCalSign("");
          setNumbers([
            `${Number(firstInput.slice(0, 12).join("")) + Number(secondInput.slice(0, 12).join(""))}`,
          ]);
          break;
        case "-":
          setFirstInput([
            `${Number(firstInput.slice(0, 12).join("")) - Number(secondInput.slice(0, 12).join(""))}`,
          ]);
          setSecondInput([]);
          setTrackInput(false);
          setCalSign("");
          setNumbers([
            `${Number(firstInput.slice(0, 12).join("")) - Number(secondInput.slice(0, 12).join(""))}`,
          ]);
          break;
        case "/":
          setFirstInput([
            `${Number(firstInput.slice(0, 12).join("")) / Number(secondInput.slice(0, 12).join(""))}`,
          ]);
          setSecondInput([]);
          setTrackInput(false);
          setCalSign("");
          setNumbers([
            `${Number(firstInput.slice(0, 12).join("")) / Number(secondInput.slice(0, 12).join(""))}`,
          ]);
          break;
        case "x":
          setFirstInput([
            `${Number(firstInput.slice(0, 12).join("")) * Number(secondInput.slice(0, 12).join(""))}`,
          ]);
          setSecondInput([]);
          setTrackInput(false);
          setCalSign("");
          setNumbers([
            `${Number(firstInput.slice(0, 12).join("")) * Number(secondInput.slice(0, 12).join(""))}`,
          ]);
          break;
      }
    }
    if (currentSign === "AC") {
      setNumbers([]);
      setFirstInput([]);
      setTrackInput(false);
      setSecondInput([]);
      setDefaultNum(["0"]);
    }
    if (currentSign === "+/-") {
      const negative = `${-Math.abs(Number(numbers.join("").split(" ")))}`;
      setNumbers([negative]);
    }
    if (currentSign === "%") {
      const perc = `${Number(numbers.join("").split(" ")) / 100}`;
      setNumbers([perc]);
    }
  };
  return (
    <>
      <section className="my-2 mx-5 md:mx-60 lg:mx-120">
        <main className="bg-gray-500 h-14 ">
          {numbers.join("").includes("-") ? (
            <p className="text-right text-white text-4xl relative top-2 right-3 overflow-hidden">
              {numbers.length >= 12 ? numbers : numbers}
            </p>
          ) : (
            <p className="text-right text-white text-4xl relative top-2 right-3 overflow-hidden">
              {firstInput.length === 0
                ? defaultNum
                : trackInput
                  ? secondInput.length !== 0
                    ? secondInput.length >= 12
                      ? numbers
                      : secondInput
                    : firstInput.length >= 12
                      ? numbers
                      : firstInput
                  : numbers.length >= 12
                    ? numbers
                    : numbers}
            </p>
          )}
        </main>
        <section className="bg-gray-100 grid grid-cols-4 ">
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              handleSecondSign(e);
            }}
            className="border border-gray-400 p-7 text-3xl font-medium"
          >
            AC
          </button>
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              handleSecondSign(e);
            }}
            className=" border border-gray-400 text-3xl font-medium"
          >
            +/-
          </button>
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              handleSecondSign(e);
            }}
            className=" border border-gray-400 text-3xl font-medium"
          >
            %
          </button>
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              handleSign(e);
            }}
            className=" border border-gray-400 text-3xl font-medium bg-orange-500 text-white"
          >
            /
          </button>
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              handleNum(e);
              // test(e);
            }}
            className=" border border-gray-400 p-7 text-3xl font-medium"
          >
            7
          </button>
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              handleNum(e);
              // test(e);
            }}
            className=" border border-gray-400 text-3xl font-medium"
          >
            8
          </button>
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              handleNum(e);
              // test(e);
            }}
            className=" border border-gray-400 text-3xl font-medium"
          >
            9
          </button>
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              handleSign(e);
            }}
            className=" border border-gray-400 text-3xl font-medium bg-orange-500  text-white"
          >
            x
          </button>
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              handleNum(e);
            }}
            className=" border border-gray-400 p-7 text-3xl font-medium"
          >
            4
          </button>
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              handleNum(e);
            }}
            className=" border border-gray-400 text-3xl font-medium"
          >
            5
          </button>
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              handleNum(e);
            }}
            className=" border border-gray-400 text-3xl font-medium"
          >
            6
          </button>
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              handleSign(e);
            }}
            className=" border border-gray-400 text-3xl font-medium bg-orange-500  text-white"
          >
            -
          </button>
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              handleNum(e);
            }}
            className=" border border-gray-400 p-7 text-3xl font-medium"
          >
            1
          </button>
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              handleNum(e);
            }}
            className=" border border-gray-400 p-7 text-3xl font-medium"
          >
            2
          </button>
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              handleNum(e);
            }}
            className=" border border-gray-400 text-3xl font-medium"
          >
            3
          </button>
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              handleSign(e);
            }}
            className=" border border-gray-400 text-3xl font-medium bg-orange-500  text-white"
          >
            +
          </button>
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              handleNum(e);
            }}
            className=" border border-gray-400 col-span-2 p-7 text-3xl font-medium"
          >
            0
          </button>
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              handleNum(e);
            }}
            className=" border border-gray-400 text-3xl font-medium"
          >
            .
          </button>
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              handleSecondSign(e);
            }}
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
