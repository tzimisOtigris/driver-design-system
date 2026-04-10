import SearchBar from '../components/SearchBar';

export default {
  title: 'Atoms/SearchBar',
  component: SearchBar,
  argTypes: {
    placeholder: { control: 'text' },
  },
};

export const Default = { args: { placeholder: 'Search...' } };
export const CustomPlaceholder = { args: { placeholder: 'Αναζήτηση εργασιών...' } };
