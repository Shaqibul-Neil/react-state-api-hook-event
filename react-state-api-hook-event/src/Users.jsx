import { use } from 'react';

const Users = ({ fetchUsers }) => {
  const users = use(fetchUsers);
  //console.log(users);
  return (
    <div className="counter">
      <h3>Users: {users.length}</h3>
      <div>
        {users.map(user => {
          return <h2 key={user.id}>{user.name}</h2>;
        })}
      </div>
    </div>
  );
};
export default Users;
