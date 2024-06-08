const Notification = ({ message }) => {
  if (message === null || message === undefined) {
    return null;
  }

  const style = { color: 'lightblue' };

  if (message.error) {
    style.color = 'red';
  }

  if (message.success) {
    style.color = 'green';
  }

  return (
    <div style={style} className='notification'>
      {message.msg}
    </div>
  );
};

export default Notification;
