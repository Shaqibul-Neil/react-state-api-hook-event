const List = ({ list }) => {
  const {
    name,
    company: { name: companyName },
    address: { city },
  } = list;

  return (
    <ul className="list">
      <li>Name: {name}</li>
      <li>Company: {companyName}</li>
      <li>City: {city}</li>
    </ul>
  );
};
export default List;
