import { forwardRef } from "react";

const Checkbox = forwardRef((props, ref) => {
  return (
    <div className="col col-sm-6 col-lg-3">
      <div className="form-check form-switch m-1">
        <input
          type="checkbox"
          role="switch"
          className="form-check-input"
          id={props.buttonId}
          autoComplete="off"
          defaultChecked={props.defaultSelection}
          ref={ref}
          onClick={props.action}
        />
        <label className="form-check-label" htmlFor={props.buttonId}>
          {props.children}
        </label>
      </div>
    </div>
  );
});

export default Checkbox;
