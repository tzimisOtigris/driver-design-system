import Badge from '../components/Badge';

export default {
  title: 'Atoms/Badge',
  component: Badge,
  argTypes: {
    variant: { control: 'select', options: ['active', 'available', 'completed'] },
    label: { control: 'text' },
  },
};

export const Active = { args: { variant: 'active', label: 'Active' } };
export const Available = { args: { variant: 'available', label: 'Available' } };
export const Completed = { args: { variant: 'completed', label: 'Completed' } };
export const CustomLabel = { args: { variant: 'active', label: 'Custom Label' } };
