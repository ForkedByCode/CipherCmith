import "bootstrap/dist/css/bootstrap.css";
import Checkbox from "../Checkbox/Checkbox";
import { useState, useRef } from "react";

function Form() {
  const [isCopied, setIsCopied] = useState(false);
  const [allowedChars, setAllowedChars] = useState([]);
  const passLenRef = useRef(null);
  const uppercaseRef = useRef(null);
  const lowercaseRef = useRef(null);
  const numbersRef = useRef(null);
  const symbolsRef = useRef(null);

  const copyToClipboard = () => {
    const password = document.getElementById("generatedPassword").value;
    if (!password) {
      alert("No password generated yet.");
      return;
    }

    navigator.clipboard
      .writeText(password)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
        alert("Failed to copy password to clipboard.");
      });
  };

  function handleGenerate() {
    const value = parseInt(passLenRef.current.value, 10);

    if (value < 4 || value > 20 || isNaN(value)) {
      alert("Please enter a value between 4-20 for password length.");
      return;
    }

    let newAllowedChars = [];

    if (uppercaseRef.current.checked) {
      newAllowedChars = newAllowedChars.concat(
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
      );
    }
    if (lowercaseRef.current.checked) {
      newAllowedChars = newAllowedChars.concat(
        "abcdefghijklmnopqrstuvwxyz".split("")
      );
    }
    if (numbersRef.current.checked) {
      newAllowedChars = newAllowedChars.concat("0123456789".split(""));
    }
    if (symbolsRef.current.checked) {
      newAllowedChars = newAllowedChars.concat(
        "!@#$%^&*()_+[]{}|;:',.<>/?".split("")
      );
    }

    if (newAllowedChars.length === 0) {
      alert("Please select at least one character type.");
      return;
    }

    let password = "";
    for (let i = 0; i < value; i++) {
      const randomIndex = Math.floor(Math.random() * newAllowedChars.length);
      password += newAllowedChars[randomIndex];
    }

    document.getElementById("generatedPassword").value = password;
  }

  return (
    <form className="container w-100 p-3">
      <div className="mb-3 row mx-auto">
        <label
          htmlFor="passwordLength"
          className="form-label col-sm-9 my-auto p-0"
        >
          Password Length
        </label>
        <input
          type="number"
          className="form-control col"
          id="passwordLength"
          min={4}
          max={20}
          placeholder="4 - 20"
          ref={passLenRef}
        />
      </div>

      <div className="mb-3 row mx-auto">
        <Checkbox
          buttonId="button1"
          defaultSelection={false}
          ref={uppercaseRef}
          action={() => {}}
        >
          Uppercase
        </Checkbox>

        <Checkbox
          buttonId="button2"
          defaultSelection={false}
          ref={lowercaseRef}
          action={() => {}}
        >
          Lowercase
        </Checkbox>

        <Checkbox
          buttonId="button3"
          defaultSelection={false}
          ref={numbersRef}
          action={() => {}}
        >
          Numbers
        </Checkbox>

        <Checkbox
          buttonId="button4"
          defaultSelection={false}
          ref={symbolsRef}
          action={() => {}}
        >
          Symbols
        </Checkbox>
      </div>

      <div className="mb-3 row mx-auto">
        <label
          htmlFor="generatedPassword"
          className="form-label col-sm-12 col-lg-6 my-auto p-0"
        >
          Password
        </label>
        <input
          type="text"
          className="form-control col"
          id="generatedPassword"
        />
      </div>

      <button
        type="button"
        className="btn btn-primary m-1"
        onClick={handleGenerate}
      >
        Generate Password
      </button>
      <button
        type="button"
        className="btn btn-primary m-1"
        onClick={copyToClipboard}
      >
        {isCopied ? "Copied" : "Copy"}
      </button>
    </form>
  );
}

export default Form;
