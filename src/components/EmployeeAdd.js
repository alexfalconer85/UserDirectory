import React from "react";
import ReactBootstrap, { Button } from "react-bootstrap";

class EmployeeAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // employeeName: "",
      // userID: "",
      // role: "",
      // phoneNumber: "",
      // email: "",
    };
    this.employeeName = "";
    this.role = "";
    this.userID = "";
    this.phoneNumber = "";
    this.email = "";
    // this.handleChange = this.handleChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleUserIDChange = this.handleUserIDChange.bind(this);
    this.handleRoleChange = this.handleRoleChange.bind(this);
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  UNSAFE_componentWillReceiveProps() {
    console.log(this.props.employeeName);
    this.employeeName = this.props.employeeName;
    this.userID = this.props.userID;
    this.role = this.props.role;
    this.phoneNumber = this.props.phoneNumber;
    this.email = this.props.email;
  }
  // handleChange(event) {
  //   this.state.employeeName = event.target.value;
  //   this.state.userID = event.target.value;
  //   this.state.role = event.target.value;
  //   this.state.phoneNumber = event.target.value;
  //   this.state.email = event.target.value;
  // }
  handleNameChange(event) {
    this.employeeName = event.target.value;
  }
  handleUserIDChange(event) {
    this.userID = event.target.value;
  }
  handleRoleChange(event) {
    this.role = event.target.value;
  }
  handlePhoneNumberChange(event) {
    this.phoneNumber = event.target.value;
  }
  handleEmailChange(event) {
    this.email = event.target.value;
  }
  handleSubmit(event) {
    const newEmployee = {
      employeeName: this.employeeName,
      userID: this.userID,
      role: this.role,
      phoneNumber: this.phoneNumber,
      email: this.email,
    };
    let myArray = this.props.userList;
    myArray.push(newEmployee);

    this.props.parent.setState({ myArray });
    event.preventDefault();
  }

  render() {
    if (this.props.userID !== undefined && this.props.userID !== null) {
      if (this.props.userID !== this.userID) {
        this.employeeName = this.props.employeeName;
        this.userID = this.props.userID;
        this.role = this.props.role;
        this.phoneNumber = this.props.phoneNumber;
        this.email = this.props.email;

        return (
          <form onSubmit={this.handleSubmit}>
            <div className='container'>
              <strong>ADD EMPLOYEE/double click existing</strong>
              <div className='column'>
                <div className='row'>
                  <div className='col'>
                    <label>Name:</label>
                  </div>
                  <input
                    type='text'
                    defaultValue={this.employeeName}
                    onChange={this.handleNameChange}
                  />
                </div>
                <div className='row'>
                  <div className='col'>
                    <label>UserID:</label>
                  </div>
                  <input
                    type='text'
                    defaultValue={this.userID}
                    onChange={this.handleUserIDChange}
                  />
                </div>
                <div className='row'>
                  <div className='col'>
                    <label>Role:</label>
                  </div>
                  <input
                    type='text'
                    defaultValue={this.role}
                    onChange={this.handleRoleChange}
                  />
                </div>
                <div className='row'>
                  <div className='col'>
                    <label>Phone Number:</label>
                  </div>
                  <input
                    type='text'
                    defaultValue={this.phoneNumber}
                    onChange={this.handlePhoneNumberChange}
                  />
                </div>
                <div className='row'>
                  <div className='col'>
                    <label>Email:</label>
                  </div>
                  <input
                    type='text'
                    defaultValue={this.email}
                    onChange={this.handleEmailChange}
                  />
                </div>
                <Button variant='primary' type='submit' value='SUBMIT'>
                  SUBMIT
                </Button>
              </div>
            </div>
          </form>
        );
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
}

export default EmployeeAdd;
