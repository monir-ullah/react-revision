import { useState } from "react";
import InputBox from "../components/InputBox";
import useCurrencyInfo from "../hooks/useCurrencyInfo";

function CurrencyConverter() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("bdt");

  const currencyInfo = useCurrencyInfo(from);

  const currencyOptions = Object.keys(currencyInfo);

  return (
    <div
      className="grid items-center justify-center w-screen h-screen opacity-90 py-14"
      style={{
        backgroundImage: `url("https://cdn.pixabay.com/photo/2017/07/30/10/00/economy-2553884_1280.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container p-10 mx-auto rounded-md backdrop-blur-sm bg-white/30 drop-shadow-2xl">
        <h1 className="pb-5 text-3xl font-semibold text-center text-slate-100">
          Currency Converter <span>(Project 3)</span>
        </h1>

        <form
          className="flex flex-col items-center"
          onSubmit={(e) => {
            e.preventDefault();
            setConvertedAmount((amount * currencyInfo[to]).toFixed(2));
          }}
        >
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={currencyOptions}
            onAmountChange={(amount) => setAmount(amount)}
            onCurrencyChange={(currency) => setFrom(currency)}
            selectedCurrency={from}
          />
          {/*  Swap Button  . Here I'm implementing the currency swap function with onClick handler */}

          <button
            onClick={() => {
              setFrom(to);
              setTo(from);
              setAmount(convertedAmount);
              setConvertedAmount(amount);
            }}
            className="relative w-1/4 px-5 py-2 -mb-3 bg-blue-600 rounded-md shadow-lg hover:bg-blue-800 text-slate-100"
          >
            Swap
          </button>
          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={currencyOptions}
            onAmountChange={(amount) => setAmount(amount)}
            onCurrencyChange={(currency) => setTo(currency)}
            selectedCurrency={to}
          />
          <button className="w-full py-3 my-5 mt-8 bg-blue-600 rounded-md shadow-lg hover:bg-blue-800 text-slate-100">
            Convert Currency {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CurrencyConverter;
