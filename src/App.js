import React, { Component } from 'react';
import Modal from './component/Modal/Modal';
import './App.scss';

class App extends Component {
  state = {
    isLoginModal: false,
    isUserModal: false,
    name: '',
    surname: '',
    email: '',
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
      email: this.state.email,
    };
    this.setState({
      users: this.state.users.concat(user),
      name: '',
      surname: '',
      email: '',
    });
    this.closeModal('isLoginModal');
  };

  renderSignUp = () => {
    return (
      <form onSubmit={this.handleSubmit} className="modalForm">
        <div className="field">
          <input
            onChange={this.handleChange}
            value={this.state.name}
            name="name"
            placeholder=" "
            id="name"
          />
          <label htmlFor="name">Name</label>
        </div>
        <div className="field">
          <input
            onChange={this.handleChange}
            value={this.state.surname}
            name="surname"
            placeholder=" "
            id="surname"
          />
          <label htmlFor="surname">Surname</label>
        </div>
        <div className="field">
          <input
            onChange={this.handleChange}
            value={this.state.email}
            name="email"
            placeholder=" "
            id="email"
          />
          <label htmlFor="email">Email</label>
        </div>
        <button className="btn">Submit</button>
      </form>
    );
  };

  listOfUsers = () => {
    const content = this.state.users.map((user) => {
      return (
        <div className="usersList">
          <div>{user.name}</div>
          <div>{user.surname}</div>
          <div>{user.email}</div>
        </div>
      );
    });

    return content;
  };

  render() {
    return (
      <>
        <div className="wrapper">
          <button
            id="isLoginModal"
            onClick={this.openModal}
            className="wrapper__btn"
          >
            Sign up
          </button>
          <button
            id="isUserModal"
            onClick={this.openModal}
            className="wrapper__btn"
          >
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
