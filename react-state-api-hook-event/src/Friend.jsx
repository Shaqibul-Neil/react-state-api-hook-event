const Friend = ({ friend }) => {
  //console.log(friend);
  const { name, email, phone, website } = friend;
  return (
    <div className="card">
      <h3>Name: {name}</h3>
      <p>E-mail: {email}</p>
      <p>Phone: {phone}</p>
      <p>Website: {website}</p>
    </div>
  );
};

export default Friend;
