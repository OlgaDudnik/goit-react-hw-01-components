import { Profile } from './components/Profile/Profile';
// import { FriendList } from './components/FriendList/FriendList';
// import { Statistics } from './components/Statistics/Statistics';
// import { TransactionHistory } from './components/TransactionHistory/TransactionHistory';

import user from './components/data/user.json';
// import data from './components/data/data.json';
// import friends from './components/data/friends.json';
// import transactions from './components/data/transactions.json';

const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {/* <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} /> */}
      {/* <FriendList friends={friends} /> */}
      {/* <TransactionHistory items={transactions} /> */}
    </div>
  );
};

export default App;
