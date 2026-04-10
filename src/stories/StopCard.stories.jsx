import StopCard from '../components/StopCard';

export default {
  title: 'Components/StopCard',
  component: StopCard,
};

export const Origin = {
  args: {
    type: 'origin',
    name: 'Αφετηρία 1',
    address: 'Αναφιώτικα 11, Αθήνα 105 58',
    showConnector: true,
  },
};

export const Stop = {
  args: {
    type: 'stop',
    name: 'Στάση 2',
    address: 'Αδμέτου 36, Αθήνα 104 46',
    showConnector: true,
  },
};

export const LastStop = {
  args: {
    type: 'stop',
    name: 'Στάση 5',
    address: 'Λεωφ. Αλεξάνδρας 196, Αθήνα',
    showConnector: false,
  },
};

export const Selected = {
  args: {
    type: 'origin',
    name: 'Αφετηρία 1',
    address: 'Αναφιώτικα 11, Αθήνα 105 58',
    showConnector: true,
    selected: true,
  },
};

export const RouteList = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <StopCard type="origin" name="Αφετηρία 1" address="Αναφιώτικα 11, Αθήνα 105 58" showConnector={true} />
      <StopCard type="stop" name="Στάση 2" address="Αδμέτου 36, Αθήνα 104 46" showConnector={true} />
      <StopCard type="stop" name="Στάση 3" address="Πατησίων 50, Αθήνα 104 34" showConnector={true} />
      <StopCard type="stop" name="Στάση 4" address="Λεωφ. Αλεξάνδρας 196, Αθήνα" showConnector={false} />
    </div>
  ),
};
