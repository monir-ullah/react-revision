import { useState } from "react";
import "./App.css";

function CounterApp() {
  const [count, setCount] = useState(0);
  const [textColor, setTextColor] = useState("black");
  const [color, setColor] = useState("#f1f1f1");

  // This will add value
  const addValue = () => {
    setCount(count + 1);
  };

  // remove Value

  const removeValue = () => {
    if (count === 0) {
      alert("You can not remove value");
      return;
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div
      className="w-screen grid h-screen justify-center items-center"
      style={{ backgroundColor: color }}
    >
      <div className="container mx-auto ">
        <h1
          className="text-3xl text-yellow-800 font-semibold	 text-center"
          style={{ color: textColor }}
        >
          Counter App with React <span>( Project 1 )</span>
        </h1>
        <h1
          className="text-9xl font-black text-center"
          style={{ color: textColor }}
        >
          {count ? count : 0}
        </h1>
        <div className="text-center">
          <button
            className="btn-style hover:bg-green-500 hover:text-white hover:border-none drop-shadow-lg "
            onClick={addValue}
          >
            Add Value
          </button>

          <button
            className="btn-style hover:bg-red-500 hover:text-white hover:border-none drop-shadow-lg"
            onClick={removeValue}
          >
            Remove Value
          </button>
        </div>
        <div className="mt-4 text-center bg-white rounded-full py-2 drop-shadow-lg">
          <button
            onClick={() => {
              setColor("red");
              setTextColor("white");
            }}
            className="bg-red-500 hover:bg-red-600 drop-shadow-lg	px-5 py-2 mx-10 my-2 rounded-full text-white"
          >
            Red
          </button>
          <button
            onClick={() => {
              setColor("green");
              setTextColor("white");
            }}
            className="bg-green-500  hover:bg-green-600 drop-shadow-lg px-5 py-2 mx-10 my-2 rounded-full text-white"
          >
            Green
          </button>

          <button
            onClick={() => {
              setColor("blue");
              setTextColor("white");
            }}
            className="bg-blue-500 hover:bg-blue-600 drop-shadow-lg	px-5 py-2 mx-10 my-2 rounded-full text-white "
          >
            blue
          </button>

          <button
            onClick={() => {
              setColor("yellow");
              setTextColor("green");
            }}
            className="bg-yellow-500 hover:bg-yellow-600 drop-shadow-lg	px-5 py-2 mx-10 my-2 rounded-full text-white"
          >
            yellow
          </button>
        </div>
      </div>
    </div>
  );
}

export default CounterApp;
