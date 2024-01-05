import { useState } from "react";
import useCurrencyInfo from "../hooks/useCurrencyInfo";

function InputBox() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("bdt");

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  return (
    <form
      className="flex flex-col items-center"
      onSubmit={(e) => {
        e.preventDefault();
        setConvertedAmount((amount * currencyInfo[to]).toFixed(2));
      }}
    >
      <div className="w-full flex gap-6 bg-slate-100 py-5 px-5 rounded -mb-3">
        <div className="w-1/2">
          <label htmlFor="currencyFrom" className="w-full">
            From
          </label>
          <input
            type="number"
            value={amount}
            min={0}
            step={0.01}
            onChange={(e) => setAmount(e.target.value)}
            name="currencyFrom"
            id="currencyFrom"
            className="w-full py-2 px-5 rounded my-2"
          />
        </div>
        <div className="w-1/2 text-end">
          <label htmlFor="currencyType" className="w-full text-center">
            Currency Type
          </label>
          <select
            name=""
            id="currencyType"
            value={from}
            className="w-full py-2 px-5 rounded my-2"
            onChange={(e) => {
              setFrom(e.target.value);
            }}
          >
            {options.map((currency) => (
              <option key={currency} value={currency}>
                {currency.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/*  Swap Button  */}

      <button
        onClick={() => {
          setFrom(to);
          setTo(from);
          setAmount(convertedAmount);
          setConvertedAmount(amount);
        }}
        className="bg-blue-600 w-1/4 hover:bg-blue-800 py-2 px-5 text-slate-100  rounded-md relative shadow-lg"
      >
        Swap
      </button>

      <div className="w-full flex gap-6 bg-slate-100 py-5 px-5 rounded -mt-3 ">
        <div className="w-1/2">
          <label htmlFor="currencyFrom" className="w-full">
            To
          </label>
          <input
            type="number"
            min={0}
            readOnly
            value={convertedAmount}
            onChange={(e) => {
              setTo(e.target.value);
            }}
            name="currencyFrom"
            id="currencyFrom"
            className="w-full py-2 px-5 rounded my-2"
          />
        </div>
        <div className="w-1/2 text-end">
          <label htmlFor="currencyType" className="w-full text-center">
            Currency Type
          </label>
          <select
            name=""
            id="currencyType"
            value={to}
            className="w-full py-2 px-5 rounded my-2"
            onChange={(e) => {
              setTo(e.target.value);
            }}
          >
            {options.map((currency) => (
              <option key={currency} value={currency}>
                {currency.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button className="w-full bg-blue-600 rounded-md hover:bg-blue-800 py-3 text-slate-100 shadow-lg my-5">
        Convert Currency {from.toUpperCase()} to {to.toUpperCase()}
      </button>
    </form>
  );
}

export default InputBox;
