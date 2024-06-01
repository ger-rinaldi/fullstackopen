const InputText = ({ label, value, setValue }) => {
  return (
    <>
      {label}:{' '}
      <input value={value} onChange={(event) => setValue(event.target.value)} />
    </>
  );
};

export default InputText;
