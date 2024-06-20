import axios from 'axios';

const getAll = () => {
  return axios
    .get('https://studies.cs.helsinki.fi/restcountries/api/all', {
      timeout: 30000,
    })
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

const getCountry = (countryName) => {
  return axios
    .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${countryName}`)
    .then((response) => response.data);
};

export default { getAll, getCountry };
