const Icon = ({ type }) => {
  const icons = {
    success: '✔️',
    warning: '⚠️',
    error: '❌',
    default: 'ℹ️',
  };

  return <span>{icons[type] || icons.default}</span>;
};

export default Icon;
