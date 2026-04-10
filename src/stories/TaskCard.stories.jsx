import TaskCard from '../components/TaskCard';

export default {
  title: 'Components/TaskCard',
  component: TaskCard,
};

export const Dashboard = {
  args: {
    variant: 'dashboard',
    title: 'Παράδοση Κηφισιά',
    date: '3 Απρ, 2026',
    route: 'Αναφιώτικα 11  →  Κηφισίας 234',
  },
};

export const List = {
  args: {
    variant: 'list',
    title: 'Μεταφορά Πειραιάς',
    date: '4 Απρ, 2026',
    route: 'Σταδίου 15  →  Πειραιώς 120',
  },
};

export const ListSelected = {
  args: {
    variant: 'list',
    title: 'Παράδοση Κηφισιά',
    date: '3 Απρ, 2026',
    route: 'Αναφιώτικα 11  →  Κηφισίας 234',
    selected: true,
  },
};
