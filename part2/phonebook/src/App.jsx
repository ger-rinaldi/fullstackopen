import { useState, useEffect } from 'react';
import FilterSearchBox from './components/FilterSearchBox';
import NewRegisterForm from './components/NewRegisterForm';
import PhonebookList from './components/PhonebookList';
import Notification from './components/Notification';
import personService from './services/person';
import './index.css';

const App = () => {
  const [persons, setPersons] = useState([]);

  const [searchFilter, setSearchFilter] = useState('');
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    personService.getAll().then((persons) => {
      setPersons(persons);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} />
      <FilterSearchBox
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
      />
      <h3>add a new</h3>
      <NewRegisterForm
        phonebook={persons}
        updatePhonebook={setPersons}
        setNotification={setNotification}
      />
      <h3>Numbers</h3>
      <PhonebookList
        phonebook={persons}
        searchFilter={searchFilter}
        setPersons={setPersons}
        setNotification={setNotification}
      />
    </div>
  );
};

export default App;
