function Checkbox({ defaultSelection, buttonId, children }) {
  return (
    <>
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
    </>
  );
}

export default Checkbox;
