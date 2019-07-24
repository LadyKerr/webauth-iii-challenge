import React from "react";
import axios from "axios";

import SignUp from "./components/SignUp";
import UserList from "./components/UserList";
import "./App.css";

class App extends React.Component {
  state = {
    users: [],
    error: ""
  };

  //set State to retrieve users from the Db
  componentDidMount() {
    axios
      .get("http://localhost:4000/api/users")
      .then(res => {
        console.log(res);
        this.setState({ users: res.data });
      })
      .catch(err => {
        this.setState({ error: err });
      });
  }

  //add new users to the Db
  addUser = newUser => {
    axios
      .post("http://localhost:4000/api/auth/register", newUser)
      .then(res => {
        this.setState({ users: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1>Welcome to the First FullStack App</h1>
        <SignUp addUser={this.addUser} />
        <UserList userData={this.state.users} />
      </div>
    );
  }
}

export default App;
