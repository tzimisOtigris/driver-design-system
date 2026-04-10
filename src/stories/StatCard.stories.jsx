import StatCard from '../components/StatCard';

export default {
  title: 'Components/StatCard',
  component: StatCard,
};

export const Total = {
  args: {
    type: 'total',
    value: '12',
    label: 'Συνολικές Εργασίες',
  },
};

export const Active = {
  args: {
    type: 'active',
    value: '1',
    label: 'Ενεργή Εργασία',
  },
};

export const Available = {
  args: {
    type: 'available',
    value: '4',
    label: 'Διαθέσιμες Εργασίες',
  },
};

export const Completed = {
  args: {
    type: 'completed',
    value: '7',
    label: 'Ολοκληρωμένες',
  },
};

export const AllCards = {
  render: () => (
    <div style={{ display: 'flex', gap: '38px' }}>
      <StatCard type="total" value="12" label="Συνολικές Εργασίες" />
      <StatCard type="active" value="1" label="Ενεργή Εργασία" />
      <StatCard type="available" value="4" label="Διαθέσιμες Εργασίες" />
      <StatCard type="completed" value="7" label="Ολοκληρωμένες" />
    </div>
  ),
};
