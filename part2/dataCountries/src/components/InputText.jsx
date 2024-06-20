const InputText = ({ label, value, setValue, setMatchedCountry }) => {
  return (
    <>
      {label}:{' '}
      <input
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          setMatchedCountry(null);
        }}
      />
    </>
  );
};

export default InputText;
