function Checkbox({ defaultSelection, buttonId, children }) {
  return (
    <>
      <div className="col col-sm-6 col-lg-3">
        <div className="form-check form-switch m-1">
          <input
            type="checkbox"
            role="switch"
            className="form-check-input"
            id={buttonId}
            autoComplete="off"
            defaultChecked={defaultSelection}
          />
          <label className="form-check-label" htmlFor={buttonId}>
            {children}
          </label>
        </div>
      </div>
    </>
  );
}

export default Checkbox;
