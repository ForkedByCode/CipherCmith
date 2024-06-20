import "bootstrap/dist/css/bootstrap.css";
import Checkbox from "../Checkbox/Checkbox";
import { useState, useRef } from "react";

function Form() {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("WELCOME150");
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const passLenRef = useRef(null);

  function handleClick() {
    const value = parseInt(passLenRef.current.value, 10);
    if (value < 4 || value > 20 || isNaN(value)) {
      alert("Please enter a value between 4-20");
    } else {
      console.log(value);
    }
  }

  return (
    <>
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
          <Checkbox buttonId="button1" defaultSelection={true}>
            Uppercase
          </Checkbox>

          <Checkbox buttonId="button2" defaultSelection={false}>
            Lowercase
          </Checkbox>

          <Checkbox buttonId="button3" defaultSelection={false}>
            Numbers
          </Checkbox>

          <Checkbox buttonId="button4" defaultSelection={false}>
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
          onClick={handleClick}
        >
          Submit
        </button>
        <button
          type="button"
          className="btn btn-primary m-1"
          onClick={copyToClipboard}
        >
          {isCopied ? "Copied" : "Copy"}
        </button>
      </form>
    </>
  );
}

export default Form;
