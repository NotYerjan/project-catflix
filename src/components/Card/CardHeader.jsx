export default function CardHeader(props) {
  return (
    <div className="card-header">
      {props.avatar && <div className="card-avatar"></div>}
      <div>
        {props.title && <div className="card-title"></div>}
        {props.subtitle && <div className="card-subtitle"></div>}
      </div>

      {props.headerAction && <div className="card-header-actions"></div>}
    </div>
  );
}
