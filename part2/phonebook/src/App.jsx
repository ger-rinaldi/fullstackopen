import { useState } from 'react';

const InputText = ({ label, value, setValue }) => {
  return (
    <>
      {label}:{' '}
      <input value={value} onChange={(event) => setValue(event.target.value)} />
    </>
  );
};

const FilterSearchBox = ({ setSearchFilter, searchFilter }) => (
  <InputText
    label='filter shown with'
    value={searchFilter}
    setValue={setSearchFilter}
  />
);

const NewRegisterForm = ({ phonebook, updatePhonebook }) => {
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const handleSubmition = (e) => {
    e.preventDefault();

    if (
      phonebook.filter((e) => e.name.toLowerCase() == newName.toLowerCase())
        .length === 0
    ) {
      updatePhonebook([
        ...phonebook,
        { name: newName, number: newNumber, id: phonebook.length + 1 },
      ]);
      setNewName('');
      setNewNumber('');
    } else {
      alert(`${newName} is already added to the phonebook`);
    }
  };

  return (
    <form onSubmit={handleSubmition}>
      <InputText label='name' value={newName} setValue={setNewName} />
      <InputText label='number' value={newNumber} setValue={setNewNumber} />
      <div>
        <button type='submit'>add</button>
      </div>
    </form>
  );
};

const PhonebookList = ({ phonebook, searchFilter }) => {
  if (searchFilter) {
    return phonebook
      .filter((e) => e.name.match(new RegExp(`^${searchFilter}`, 'i')))
      .map((e) => (
        <li key={e.id}>
          {e.name} {e.number}
        </li>
      ));
  }

  return phonebook.map((e) => (
    <li key={e.id}>
      {e.name} {e.number}
    </li>
  ));
};

const App = () => {
  // TODO: use regex for searching...

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);

  const [searchFilter, setSearchFilter] = useState('');

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
      <PhonebookList phonebook={persons} searchFilter={searchFilter} />
    </div>
  );
};

export default App;
