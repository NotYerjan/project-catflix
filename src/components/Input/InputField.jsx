import React from "react";
import "./InputField.css";
import Button from "../Button/Button";

export default function InputField({
  startIcon,
  actionIcon,
  label,
  multiline,
  color,
  ...props
}) {
  const inputColor = color ? `input--col-${color}` : "";

  return (
    <div className={`input ${inputColor}`}>
      {startIcon && <div className="input__icon">{startIcon}</div>}
      <div className="input__body">
        {multiline ? (
          <textarea
            rows="3"
            {...props}
            placeholder=" "
            id={label}
            className="input__body__input-field"
          ></textarea>
        ) : (
          <input
            type="text"
            {...props}
            placeholder=" "
            id={label}
            className="input__body__input-field"
          />
        )}
        <label htmlFor={label} className="input__body__label">
          {label}
        </label>
      </div>
      {actionIcon && <Button variant="icon" small icon={actionIcon} />}
    </div>
  );
}
