import "bootstrap/dist/css/bootstrap.css";
import Checkbox from "../Checkbox/Checkbox";

function Form() {
  return (
    <>
      <div className="container w-25 p-0">
        <form>
          <div className="mb-3">
            <label for="passwordLength" className="form-label">
              Password Length
            </label>
            <input
              type="number"
              className="form-control"
              id="passwordLength"
              aria-describedby="passwordLength"
            />
            {/* <div id="passwordLength" className="form-text">
              We'll never share your email with anyone else.
            </div> */}
          </div>
          {/* checkbox */}

          <div className="mb-3">
            <label for="generatedPassword" className="form-label">
              Password
            </label>
            <input
              type="text"
              className="form-control"
              id="generatedPassword"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
