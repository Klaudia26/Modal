import React, { Component } from 'react';
import Modal from './component/Modal/Modal';

class App extends Component {
  state = {
    isLoginModal: false,
    isUserModal: false,
    name: '',
    surname: '',
    users: [],
  };

  openModal = (e) => {
    this.setState({
      [e.target.id]: true,
    });
  };

  closeModal = (key) => {
    this.setState({
      [key]: false,
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name: this.state.name,
      surname: this.state.surname,
    };
    this.setState({
      users: this.state.users.concat(user),
      name: '',
      surname: '',
    });
  };

  renderSignUp = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          value={this.state.name}
          name="name"
          placeholder="Name"
        />
        <input
          onChange={this.handleChange}
          value={this.state.surname}
          name="surname"
          placeholder="Surname"
        />
        <button>Add</button>
      </form>
    );
  };

  listOfUsers = () => {
    const content = this.state.users.map((user) => {
      return (
        <div>
          <div>{user.name}</div>
          <div>{user.surname}</div>
        </div>
      );
    });

    return content;
  };

  render() {
    return (
      <>
        <div>
          <button id="isLoginModal" onClick={this.openModal}>
            Sign up
          </button>
          <button id="isUserModal" onClick={this.openModal}>
            Users
          </button>
          {this.state.isLoginModal && (
            <Modal
              id="isLoginModal"
              closeModal={this.closeModal}
              render={this.renderSignUp()}
            />
          )}
          {this.state.isUserModal && (
            <Modal
              id="isUserModal"
              closeModal={this.closeModal}
              render={this.listOfUsers()}
            />
          )}
        </div>
      </>
    );
  }
}

export default App;
