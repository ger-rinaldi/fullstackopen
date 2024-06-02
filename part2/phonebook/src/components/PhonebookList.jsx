import ActionButton from './ActionButton';
import personService from '../services/person';

const PhonebookList = ({ phonebook, searchFilter, setPersons }) => {
  if (searchFilter) {
    return phonebook
      .filter((e) => e.name.match(new RegExp(`^${searchFilter}`, 'i')))
      .map((e) => (
        <li key={e.id}>
          {e.name} {e.number}
        </li>
      ));
  }

  const handleDeletion = (personToDelete) => () => {
    if (
      confirm(
        `Do you really wish to delete "${personToDelete.name}" from your phonebook?`
      )
    ) {
      personService
        .erase(personToDelete.id)
        .then((deletedPerson) => {
          console.log(deletedPerson);
          alert(
            `"${personToDelete.name}" has been succesfully deleted from your phonebook!`
          );
          setPersons(phonebook.filter((p) => p.id !== deletedPerson.id));
        })
        .catch((error) => {
          console.log(error);
          alert(
            `There's been an error while trying to delete "${personToDelete.name}" from your phonebook...\nPlease refresh.`
          );
        });
    }
  };

  return phonebook.map((e) => (
    <li key={e.id}>
      {e.name} {e.number}{' '}
      <ActionButton message='delete' clickAction={handleDeletion(e)} />
    </li>
  ));
};

export default PhonebookList;
