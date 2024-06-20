const CountryInfo = ({ country }) => {
  const langs = [];

  for (const lang in country.languages) {
    langs.push(<li key={lang}>{country.languages[lang]}</li>);
  }

  return (
    <>
      <h1>{country.name.common}</h1>
      <p>capital {country.capital}</p>
      <p>area {country.area}</p>
      <h2>languages: </h2>
      <ul>{langs}</ul>
      <img src={country.flags.png} alt='' />
    </>
  );
};

export default CountryInfo;
