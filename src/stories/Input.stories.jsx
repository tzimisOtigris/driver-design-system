import Input from '../components/Input';

export default {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {
    type: { control: 'select', options: ['text', 'email', 'password'] },
    placeholder: { control: 'text' },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export const Default = { args: { type: 'text', placeholder: 'email@example.com' } };
export const WithLabel = { args: { type: 'text', label: 'Email', placeholder: 'email@example.com' } };
export const Password = { args: { type: 'password', label: 'Κωδικός', placeholder: '••••••••' } };
export const Disabled = { args: { type: 'text', placeholder: 'email@example.com', disabled: true } };
