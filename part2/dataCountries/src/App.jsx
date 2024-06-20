import { useState, useEffect } from 'react';
import countriesService from './services/countries';
import InputText from './components/InputText';
import CountriesList from './components/CountriesList';
import CountryInfo from './components/CountryInfo';

function App() {
  const [allCountriesData, setAllCountriesData] = useState(null);
  const [matchedCountry, setMatchedCountry] = useState(null);
  const [inputCountry, setInputCountry] = useState('');

  useEffect(() => {
    if (allCountriesData === null) {
      countriesService.getAll().then((countriesData) => {
        setAllCountriesData(countriesData);
      });
    }
  });

  return (
    <>
      <InputText
        label='find countries'
        value={inputCountry}
        setValue={setInputCountry}
        setMatchedCountry={setMatchedCountry}
      />

      {matchedCountry ? (
        <CountryInfo country={matchedCountry} />
      ) : (
        <CountriesList
          inputCountry={inputCountry}
          allCountriesData={allCountriesData}
          setMatchedCountry={setMatchedCountry}
        />
      )}
    </>
  );
}

export default App;
