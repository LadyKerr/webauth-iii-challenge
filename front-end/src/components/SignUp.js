import React from "react";

class SignUp extends React.Component {
  state = {
    users: {
      username: "",
      password: "",
      department: ""
    }
  };

  handleChanges = event => {
    this.setState({
      users: {
        ...this.state.users,
        [event.target.name]: event.target.value
      }
    });
  };

  addNewUser = event => {
    event.preventDefault();
    this.props.addUser(this.state.users);
    // .then(res => {
    //   if (res) {
    //     this.props.history.push("/users");
    //   }
    // });
  };

  render() {
    return (
      <div>
        <h1> Sign Up Today! </h1>
        <form onSubmit={this.addNewUser}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={this.handleChanges}
            value={this.state.users.username}
          />
          <input
            type="text"
            name="password"
            placeholder="Password"
            onChange={this.handleChanges}
            value={this.state.users.password}
          />
          <input
            type="text"
            name="department"
            placeholder="Department"
            onChange={this.handleChanges}
            value={this.state.users.department}
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
