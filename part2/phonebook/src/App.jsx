import { useState, useEffect } from 'react';
import FilterSearchBox from './components/FilterSearchBox';
import NewRegisterForm from './components/NewRegisterForm';
import PhonebookList from './components/PhonebookList';
import personService from './services/person';

const App = () => {
  const [persons, setPersons] = useState([]);

  const [searchFilter, setSearchFilter] = useState('');

  useEffect(() => {
    personService.getAll().then((persons) => {
      setPersons(persons);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterSearchBox
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
      />
      <h3>add a new</h3>
      <NewRegisterForm phonebook={persons} updatePhonebook={setPersons} />
      <h3>Numbers</h3>
      <PhonebookList
        phonebook={persons}
        searchFilter={searchFilter}
        setPersons={setPersons}
      />
    </div>
  );
};

export default App;
