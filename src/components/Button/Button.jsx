import "./Button.css";

export default function Button({ icon, variant, alt, small, color, ...props }) {
  const Icon = icon;
  return (
    <button
      {...props}
      className={`btn ${variant ? variant : ""} ${small ? "small" : ""} ${
        color ? color : ""
      }`}
    >
      {icon && (
        <div className="btn-icon">
          <Icon size={small ? 20 : 24} />
        </div>
      )}
      {alt && <div className="btn-alt">{alt}</div>}
    </button>
  );
}
