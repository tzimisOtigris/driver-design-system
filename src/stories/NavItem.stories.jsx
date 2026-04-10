import NavItem from '../components/NavItem';

export default {
  title: 'Components/NavItem',
  component: NavItem,
};

export const Active = {
  args: {
    active: true,
    icon: '🏠',
  },
};

export const Inactive = {
  args: {
    active: false,
    icon: '⚙️',
  },
};

export const AllNavItems = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '41px' }}>
      <NavItem active={true} icon="🏠" />
      <NavItem active={false} icon="📋" />
      <NavItem active={false} icon="📐" />
      <NavItem active={false} icon="⚙️" />
    </div>
  ),
};
