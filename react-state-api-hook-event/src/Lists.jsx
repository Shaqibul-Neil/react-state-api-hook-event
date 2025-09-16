import { use } from 'react';
import List from './List';

const Lists = ({ listsPromise }) => {
  const listsUser = use(listsPromise);
  //console.log(listsUser);
  return (
    <div>
      <h4>Lists</h4>
      <div className="lists">
        {listsUser.map(list => (
          <List list={list} key={list.id} />
        ))}
      </div>
    </div>
  );
};
export default Lists;
