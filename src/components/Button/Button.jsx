import "./Button.css";

export default function Button({ icon, alt, variant, small, color, ...props }) {
  const Icon = icon;
  const btnVariant = variant ? `btn--var-${variant}` : "";
  const btnSize = small ? "btn--small" : "";
  const btnColor = color ? `btn--col-${color}` : "";
  const iconSize = small ? 20 : 24;

  return (
    <button {...props} className={`btn ${btnVariant} ${btnSize} ${btnColor}`}>
      {icon && (
        <div className="btn__icon">
          <Icon size={iconSize} />
        </div>
      )}
      {alt && <div className="btn__body">{alt}</div>}
    </button>
  );
}
