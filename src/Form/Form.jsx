import "bootstrap/dist/css/bootstrap.css";
import Checkbox from "../Checkbox/Checkbox";

function Form() {
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
          />
        </div>

        <div className="mb-3 row mx-auto">
          <div className="col col-sm-6 col-lg-3">
            <Checkbox buttonId="button1" defaultSelection={true}>
              Uppercase
            </Checkbox>
          </div>
          <div className="col col-sm-6 col-lg-3">
            <Checkbox buttonId="button2" defaultSelection={false}>
              Lowercase
            </Checkbox>
          </div>
          <div className="col col-sm-6 col-lg-3">
            <Checkbox buttonId="button3" defaultSelection={false}>
              Numbers
            </Checkbox>
          </div>
          <div className="col col-sm-6 col-lg-3">
            <Checkbox buttonId="button4" defaultSelection={false}>
              Symbols
            </Checkbox>
          </div>
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

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
