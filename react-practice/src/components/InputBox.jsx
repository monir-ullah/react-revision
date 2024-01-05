/* eslint-disable react/prop-types */
function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  selectedCurrency,
  currencyOptions = [],
  // amountDisable = false,
}) {
  return (
    <div className="w-full flex gap-6 bg-slate-100 py-5 px-5 rounded -mb-3">
      <div className="w-1/2">
        <label htmlFor="currencyFrom" className="w-full">
          {label}
        </label>
        <input
          type="number"
          value={amount}
          min={0}
          step={0.01}
          onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
          // disabled={amountDisable}
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
          value={selectedCurrency}
          className="w-full py-2 px-5 rounded my-2"
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
