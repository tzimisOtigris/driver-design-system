import TopBar from '../components/TopBar';

export default {
  title: 'Components/TopBar',
  component: TopBar,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  args: {
    title: 'Καλώς ήρθες, Dimitris',
    showSearch: true,
  },
};

export const WithBack = {
  args: {
    title: 'Διαθέσιμες Εργασίες',
    showBack: true,
    showSearch: true,
  },
};

export const Simple = {
  args: {
    title: 'Παράδοση Κηφισιά - Ενεργή',
    showBack: true,
  },
};
