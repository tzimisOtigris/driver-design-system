import Avatar from '../components/Avatar';

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
  argTypes: {
    initials: { control: 'text' },
    bgColor: { control: 'text' },
    size: { control: 'number' },
  },
};

export const Default = { args: { initials: 'DL', size: 40 } };
export const CustomColor = { args: { initials: 'SC', bgColor: 'rgba(255,255,255,0.15)', size: 40 } };
export const Large = { args: { initials: 'DL', size: 56 } };
export const Small = { args: { initials: 'DL', size: 32 } };
