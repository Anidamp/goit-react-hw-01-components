import './App.css';
import Profile from './components/profile/profile';
import user from './components/profile/user.json'

import Statistics from './components/statistics/statistics';
import statisticalData from './components/statistics/statistical-data.json';

import FriendsList from './components/FriendsList/FriendsList';
import friends from './components/FriendsList/friends.json';

import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './components/TransactionHistory/transactions.json';


function App() {
  return (
    <div className="App">
      <Profile
      name ={user.name}
      tag ={user.tag}
      location={user.location}
      avatar = {user.avatar}
      followers = {user.stats.followers}
      views = {user.stats.views}
      likes = {user.stats.likes}
      />
      <Statistics stats={statisticalData} />
      <FriendsList friends = {friends} />
      <TransactionHistory transactions = {transactions} />
    </div>
  );
}

export default App;
