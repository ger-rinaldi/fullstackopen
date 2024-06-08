import { useState } from 'react';
import InputText from './InputText';
import personService from '../services/person';

const NewRegisterForm = ({ phonebook, updatePhonebook, setNotification }) => {
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
        setNotification({
          msg: `"${updatedData.name}" has been successfuly updated`,
          success: true,
        });
      })
      .catch((error) => {
        console.log(error);
        setNotification({
          msg: `Information of "${inputPersonName}" has already been removed from server`,
          error: true,
        });
      });
  };

  const handleCreation = (newPersonData) => {
    personService.create(newPersonData).then((createdPerson) => {
      updatePhonebook([...phonebook, createdPerson]);
      setNotification({
        msg: `Added "${newPersonData.name}"`,
        success: true,
      });
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
