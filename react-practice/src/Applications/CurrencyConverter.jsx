import InputBox from "../components/InputBox";

function CurrencyConverter() {
  return (
    <div
      className="w-screen grid h-screen justify-center items-center opacity-90 "
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

        <InputBox />
      </div>
    </div>
  );
}

export default CurrencyConverter;
