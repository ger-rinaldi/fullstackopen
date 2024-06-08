import ActionButton from './ActionButton';
import personService from '../services/person';

const PhonebookList = ({
  phonebook,
  searchFilter,
  setPersons,
  setNotification,
}) => {
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
          setNotification({
            msg: `"${personToDelete.name}" has been succesfully deleted from your phonebook!`,
            success: true,
          });
          setPersons(phonebook.filter((p) => p.id !== deletedPerson.id));
        })
        .catch((error) => {
          console.log(error);
          setNotification({
            msg: `Information of "${personToDelete.name}" has already been removed from server`,
            error: true,
          });
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
