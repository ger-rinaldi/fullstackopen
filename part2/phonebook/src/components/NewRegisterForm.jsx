import { useState } from 'react';
import InputText from './InputText';
import personService from '../services/person';

const NewRegisterForm = ({ phonebook, updatePhonebook }) => {
  const [inputPersonName, setInputPersonName] = useState('');
  const [newInputNumber, setNewInputNumber] = useState('');

  const handleUpdate = (personToUpdate) => {
    personService
      .update(personToUpdate.id, {
        ...personToUpdate,
        number: newInputNumber,
      })
      .then((updatedData) => {
        updatePhonebook(
          phonebook.map((person) =>
            person.id === updatedData.id ? updatedData : person
          )
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCreation = (newPersonData) => {
    personService.create(newPersonData).then((createdPerson) => {
      updatePhonebook([...phonebook, createdPerson]);
    });
  };

  const handleSubmition = (submitEvent) => {
    submitEvent.preventDefault();

    const registeredNameMatch = phonebook.filter(
      (person) => person.name.toLowerCase() == inputPersonName.toLowerCase()
    );

    if (registeredNameMatch.length !== 0) {
      if (
        confirm(
          `"${inputPersonName}" already added to phonebook, replace old number with new one?`
        )
      ) {
        const personToUpdate = registeredNameMatch[0];
        handleUpdate(personToUpdate);
      }
    } else {
      handleCreation({ name: inputPersonName, number: newInputNumber });
    }

    setInputPersonName('');
    setNewInputNumber('');
  };

  return (
    <form onSubmit={handleSubmition}>
      <InputText
        label='name'
        value={inputPersonName}
        setValue={setInputPersonName}
      />
      <InputText
        label='number'
        value={newInputNumber}
        setValue={setNewInputNumber}
      />
      <div>
        <button type='submit'>add</button>
      </div>
    </form>
  );
};

export default NewRegisterForm;
