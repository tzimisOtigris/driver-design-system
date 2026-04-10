import Button from '../components/Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'ghost'] },
    size: { control: 'select', options: ['large', 'default', 'small'] },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
};

export const Primary = { args: { children: 'Πλοήγηση', variant: 'primary' } };
export const Secondary = { args: { children: 'Ολοκλήρωση', variant: 'secondary' } };
export const Ghost = { args: { children: 'Έναρξη', variant: 'ghost', size: 'small' } };
export const Large = { args: { children: 'Σύνδεση', variant: 'primary', size: 'large' } };
export const Disabled = { args: { children: 'Disabled', variant: 'primary', disabled: true } };
export const FullWidth = { args: { children: 'Σύνδεση', variant: 'primary', size: 'large', fullWidth: true } };
