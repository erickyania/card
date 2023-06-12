import Card from "../UI/Card";

const userList = (props) => {
  return (
    <Card>
      <ul>
        {props.users.map((user) => (
          <li>
            {user.name} ({user.age} year's old)
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default userList;
