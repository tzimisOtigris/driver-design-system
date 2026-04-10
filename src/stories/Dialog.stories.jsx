import { Dialog, DialogCard } from '../components/Dialog';

export default {
  title: 'Components/Dialog',
  component: DialogCard,
};

export const Card = {
  args: {
    title: 'Επιβεβαίωση Έναρξης',
    description: "Είστε σίγουροι ότι θέλετε να αλλάξετε την κατάσταση της εργασίας σε 'Ενεργή';",
    cancelLabel: 'Ακύρωση',
    confirmLabel: 'Επιβεβαίωση',
  },
};

export const CompleteCard = {
  args: {
    title: 'Ολοκλήρωση Εργασίας',
    description: 'Είστε σίγουροι ότι θέλετε να ολοκληρώσετε αυτή την εργασία;',
    cancelLabel: 'Ακύρωση',
    confirmLabel: 'Ολοκλήρωση',
  },
};
