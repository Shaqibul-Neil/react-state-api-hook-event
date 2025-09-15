import Friend from './Friend';
import { use } from 'react';

const Friends = ({ friendsPromise }) => {
  const friends = use(friendsPromise);
  //console.log(friends);
  return (
    <div className="counter">
      <h3>Friends: {friends.length}</h3>
      <div className="cardContainer">
        {friends.map(friend => (
          <Friend friend={friend} key={friend.id} />
        ))}
      </div>
    </div>
  );
};
export default Friends;
