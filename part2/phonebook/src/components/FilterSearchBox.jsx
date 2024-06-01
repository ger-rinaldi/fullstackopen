import InputText from './InputText';

const FilterSearchBox = ({ setSearchFilter, searchFilter }) => (
  <InputText
    label='filter shown with'
    value={searchFilter}
    setValue={setSearchFilter}
  />
);

export default FilterSearchBox;
