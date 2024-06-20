import Button from './Button';

const CountriesList = ({
  inputCountry,
  allCountriesData,
  setMatchedCountry,
}) => {
  if (allCountriesData === null) {
    return <p>Fetching data...</p>;
  }

  if (!inputCountry) {
    return <p>Specify a filter</p>;
  }

  const totalMatches = allCountriesData.reduce((acc, country) => {
    return country.name.common
      .toLowerCase()
      .startsWith(inputCountry.toLowerCase()) && inputCountry
      ? [...acc, country]
      : acc;
  }, []);

  console.log(totalMatches);

  if (totalMatches.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else if (totalMatches.length < 1) {
    return <p>No matches, specify another filter</p>;
  } else if (totalMatches.length === 1) {
    setMatchedCountry(totalMatches[0]);
  }

  return (
    <>
      {totalMatches.map((country) => (
        <>
          <p key={country.name.common}>
            {country.name.common}{' '}
            <Button
              country={country}
              setMatchedCountry={setMatchedCountry}
            ></Button>
          </p>
        </>
      ))}
    </>
  );
};

export default CountriesList;
