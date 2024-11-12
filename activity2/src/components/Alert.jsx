import Icon from './Icon';

const resolveColorFromType = (type) => {
  const colors = {
    success: '#d4edda',
    warning: '#fff3cd',
    error: '#f8d7da',
    default: '#e2e3e5',
  };

  return colors[type] || colors.default;
};

const Alert = ({ title, type, message }) => (
  <div className="alert" style={{ backgroundColor: resolveColorFromType(type) }}>
    <h3 className="alert-title">
      <Icon type={type} />
      {title}
    </h3>
    {message && <p className="alert-message">{message}</p>}
  </div>
);

export default Alert;
