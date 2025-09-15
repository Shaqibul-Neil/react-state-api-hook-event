import { use } from 'react';

const Friends = ({ friendsPromise }) => {
  const friends = use(friendsPromise);
  console.log(friends);
  return (
    <div className="counter">
      <h3>Friends: {friends.length}</h3>
      <div className="cardContainer">
        {friends.map(friend => {
          return (
            <div className="card" key={friend.id}>
              <h3>Name: {friend.name}</h3>
              <p>E-mail: {friend.email}</p>
              <p>Phone: {friend.phone}</p>
              <p>Website: {friend.website}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Friends;
