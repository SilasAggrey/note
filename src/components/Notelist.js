import React from "react";

const UserList = (props) => {
  console.log(props.students);
  return (
    <div className="d-flex justify-content-center">
      <h1>Note list</h1>
      {/* {props.users.map((user, index) => {
        return (
          <div key={`${user.name}-${index}`}>
            <h1>{user.name}</h1>
            <h3>{user.email}</h3>
            <h5>{user.gen}</h5>
          </div>
        );
      })} */}
    </div>
  );
};

export default UserList;
