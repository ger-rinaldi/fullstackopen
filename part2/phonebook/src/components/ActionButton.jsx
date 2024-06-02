const ActionButton = ({ message, clickAction }) => {
  return <button onClick={clickAction}>{message}</button>;
};

export default ActionButton;
