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
      className="w-screen grid h-screen justify-center items-center opacity-90 py-14"
      style={{
        backgroundImage: `url("https://cdn.pixabay.com/photo/2017/07/30/10/00/economy-2553884_1280.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto backdrop-blur-sm bg-white/30 p-10 rounded-md 	drop-shadow-2xl">
        <h1 className="text-3xl text-slate-100 font-semibold	pb-5 text-center">
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
            className="bg-blue-600 w-1/4 hover:bg-blue-800 -mb-3 py-2 px-5 text-slate-100  rounded-md relative shadow-lg"
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
          <button className="w-full bg-blue-600 rounded-md hover:bg-blue-800 py-3 text-slate-100 shadow-lg my-5">
            Convert Currency {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CurrencyConverter;
