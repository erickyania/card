
const AddUser = (props) => {
    const addUserHandler = event => {event.preventDefault()};

   return(
    <form onsubmit={addUserHandler}>
        <label htmlFor="username" >Username</label>
        <input id="username" type="text"></input>

        <label htmlFor="age">Age</label>
        <input id="age" type="number"></input>

        <button type="submit">Add User</button>
    </form>
   );
}

export default AddUser;