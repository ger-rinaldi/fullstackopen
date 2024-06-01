import { useState } from 'react';
import InputText from './InputText';

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

export default NewRegisterForm;
