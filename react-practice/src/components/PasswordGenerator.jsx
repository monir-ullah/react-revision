/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [passLength, setPassLength] = useState(10);
  const [allowNumber, setAllowNumber] = useState(false);
  const [allowSpecialChar, setAllowSpecialChar] = useState(false);

  const passwordFieldReference = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const number = "1234567890";
    const specialChar = "`!@#$%^&*()_+-={}[]|\\:;\"'<>,.?/";

    if (allowNumber) str += number;
    if (allowSpecialChar) str += specialChar;

    for (let i = 0; i < passLength; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [passLength, allowNumber, allowSpecialChar]);

  useEffect(() => {
    generatePassword();
  }, [passLength, allowNumber, allowSpecialChar]);

  const copyToClipBoard = () => {
    window.navigator.clipboard.writeText(password);
    passwordFieldReference.current.select();

    toast("Password successfully copied to your clipboard", {
      style: {
        color: "#22c55e",
      },
    });
  };

  return (
    <div className="w-screen grid h-screen justify-center items-center">
      <div className="container mx-auto  w-full ">
        <h1 className="text-3xl text-gray-800 font-semibold	 text-center">
          Password Generator with React <span>(Project 2)</span>
        </h1>

        <div className="mt-5">
          <div className="w-full py-5 flex justify-between">
            <input
              type="text"
              name="passwordField"
              readOnly
              ref={passwordFieldReference}
              value={password}
              className="border-slate-200 px-5 py-2 rounded-l-lg w-3/4 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 bg-slate-200"
            />
            <button
              onClick={copyToClipBoard}
              className="rounded-r-lg shadow-md px-5 hover:bg-green-500 py-2 text-yellow-50 bg-slate-500 w-1/4"
            >
              Copy
            </button>
            <Toaster />
          </div>
          <div className="flex justify-between">
            <div>
              <input
                type="range"
                id="stringLengthRange"
                onChange={(event) => setPassLength(event.target.value)}
                name="stringLengthRange"
                min={6}
              />
              <label
                htmlFor="stringLengthRange"
                id="stringLengthRange"
                className="ml-2"
              >
                Length: {passLength}
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="allowNumber"
                name="allowNumber"
                defaultChecked={allowSpecialChar}
                onChange={() => {
                  setAllowNumber((prev) => {
                    return !prev;
                  });
                }}
              />
              <label htmlFor="allowNumber" id="allowNumber" className="ml-2">
                Include Number?
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                name="allowSpecialChar"
                id="allowSpecialChar"
                defaultChecked={allowNumber}
                onChange={() => {
                  setAllowSpecialChar((prev) => {
                    return !prev;
                  });
                }}
              />
              <label
                htmlFor="allowSpecialChar"
                id="allowSpecialChar"
                className="ml-2"
              >
                Include Character?
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
