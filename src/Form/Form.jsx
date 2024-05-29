import "bootstrap/dist/css/bootstrap.css";
import Checkbox from "../Checkbox/Checkbox";

function Form() {
  return (
    <>
      <div className="container w-25 p-0">
        <form>
          <div className="mb-3 row mx-auto">
            <label
              for="passwordLength"
              className="form-label col-sm-12 col-lg-6 my-auto p-0"
            >
              Password Length
            </label>
            <input
              type="number"
              className="form-control col"
              id="passwordLength"
              aria-describedby="passwordLength"
            />
          </div>

          <section className="mb-3">
            <Checkbox />
          </section>

          <div className="mb-3 row mx-auto">
            <label
              for="generatedPassword"
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
      </div>
    </>
  );
}

export default Form;
