function Checkbox() {
  return (
    <>
      <div
        className="btn-group d-flex flex-column"
        role="group"
        aria-label="Basic checkbox toggle button group"
      >
        <input
          type="checkbox"
          className="btn-check"
          id="btncheck1"
          autocomplete="off"
        />
        <label className="btn btn-outline-primary" for="btncheck1">
          Uppercase
        </label>

        <input
          type="checkbox"
          className="btn-check"
          id="btncheck2"
          autocomplete="off"
        />
        <label className="btn btn-outline-primary" for="btncheck2">
          Lowercase
        </label>

        <input
          type="checkbox"
          className="btn-check"
          id="btncheck3"
          autocomplete="off"
        />
        <label className="btn btn-outline-primary" for="btncheck3">
          Symbols
        </label>

        <input
          type="checkbox"
          className="btn-check"
          id="btncheck4"
          autocomplete="off"
        />
        <label className="btn btn-outline-primary" for="btncheck4">
          Numbers
        </label>
      </div>
    </>
  );
}

export default Checkbox;
