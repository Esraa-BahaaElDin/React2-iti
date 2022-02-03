import "./App.css";
import React from "react";
// import UserList from "./UserList";
// import UserListFunctional from './UserListFunctional';
import UserFormLogin from './UserFormLogin';
import FormRegistration from './FormRegistration'
class App extends React.Component {
  render() {
    return (
      <div className="test">
        <UserFormLogin />
        <FormRegistration />
      </div>
    );
  }
}

export default App;
