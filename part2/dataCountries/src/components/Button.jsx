const Button = ({ country, setMatchedCountry }) => {
  return <button onClick={() => setMatchedCountry(country)}> show</button>;
};

export default Button;
