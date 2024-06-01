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

export default PhonebookList;
