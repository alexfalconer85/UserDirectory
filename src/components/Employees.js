import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import {
  Button,
  Container,
  Col,
  Row,
  Form,
  Tab,
  Tabs,
  TabContainer,
} from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import filterFactory from "react-bootstrap-table2-filter";
import "react-datepicker/dist/react-datepicker.css";
import EmployeeAdd from "./EmployeeAdd";
// import { findAllByAltText } from "@testing-library/react"; , { textFilter }

class Employees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      // employeeName: "",
      // role: "",
      // userID: "",
      // phoneNumber: "",
      // email: "",
      // isEditing: false,
    };
    this.update = React.createRef();
    this.employeeName = "";
    this.role = "";
    this.userID = "";
    this.phoneNumber = "";
    this.email = "";
  }
  // passData(value) {
  //   this.setState({ userList: value });
  // }
  componentDidMount() {
    const employeeTest = [
      {
        employeeName: "Alex",
        userID: 123,
        role: "employee",
        phoneNumber: 3038806862,
        email: "Alex@FalconerLLC.com",
      },
      {
        employeeName: "Bill",
        userID: 120,
        role: "boss",
        phoneNumber: 4567859843,
        email: "Bill@FalconerLLC.com",
      },
      {
        employeeName: "Jim",
        userID: 100,
        role: "salesman",
        phoneNumber: 6859493021,
        email: "Jim@FalconerLLC.com",
      },
    ];
    this.setState({ userList: employeeTest });
  }

  onSelectionChanged = () => {
    var selectedRows = this.gridApi.getSelectedRows();
    document.querySelector("#selectedRows").innerHTML =
      selectedRows.length === 1 ? selectedRows[0].athlete : "";
  };
  columns = [
    {
      dataField: "employeeName",
      text: "Employee",
      font: 12,
      sort: true,
    },
    {
      dataField: "userID",
      text: "User ID",
      sort: true,
    },
    {
      dataField: "role",
      text: "Role",
      sort: true,
    },
    {
      dataField: "phoneNumber",
      text: "Phone Number",
      sort: true,
    },
    {
      dataField: "email",
      text: "Email",
      sort: true,
    },
  ];
  defaultSorted = [
    {
      dataField: "employeeName",
      order: "asc",
    },
  ];
  selectRow = {
    mode: "checkbox",
    clickToSelect: true,
    hideSelectColumn: true,
  };

  rowEvents = {
    onDoubleClick: (e, row, rowIndex) => {
      this.employeeName = row.employeeName;
      this.role = row.role;
      this.email = row.email;
      this.userID = row.userID;
      this.phoneNumber = row.phoneNumber;
      // this.state.isEditing = true;

      console.log("this is the ID = " + row.userID);
      // create an  empty array variable thats a copy of the user list
      let tempArray = [];
      // loop throutp the UserList
      for (var i = 0; i < this.state.userList.length; i++) {
        // where row.userID does not matches Userlist[i].userId
        if (row.userID !== this.state.userList[i].userID) {
          // lets push it in emptyArry
          tempArray.push(this.state.userList[i]);
        }
      }
      // then upsate state with this smaller list
      this.setState({
        userList: tempArray,
        employeeName: this.employeeName,
        role: this.role,
        userID: this.userID,
        phoneNumber: this.phoneNumber,
        email: this.email,
        // isEditing: false,
      });
    },
  };
  dateFormatter(cell, row) {
    // MM/dd/yyyy
    let date = new Date(parseInt(cell));
    return (
      ("0" + (date.getMonth() + 1)).slice(-2) +
      "/" +
      ("0" + date.getDate()).slice(-2) +
      "/" +
      date.getFullYear()
    );
  }
  // onSelectOption(value) {
  //   this.setState({
  //     selectedOption: value,
  //   });
  // }
  addEmployee() {
    this.employeeName = "";
    this.userID = "0";
    this.role = "";
    this.phoneNumber = "";
    this.email = "";
    this.setState({
      userList: this.state.userList,
      employeeName: this.employeeName,
      role: this.role,
      userID: this.userID,
      phoneNumber: this.phoneNumber,
      email: this.email,
      // isEditing: false,
    });
  }
  render() {
    return (
      <>
        <div>
          <Jumbotron>
            <h1>EMPLOYEE DIRECTORY</h1>
          </Jumbotron>
        </div>

        <div className='container'>
          <div className='row'>
            <div className='column'>
              <Button
                onClick={this.addEmployee.bind(this)}
                variant='primary'
                type='add'
                value='ADD'>
                ADD
              </Button>
              <Container>
                <BootstrapTable
                  id='table'
                  bootstrap4
                  keyField='id'
                  striped
                  data={this.state.userList}
                  columns={this.columns}
                  selectRow={this.selectRow}
                  rowEvents={this.rowEvents}
                  defaultSorted={this.defaultSorted}
                  filter={filterFactory()}
                  options={this.options}
                />
              </Container>
            </div>
            <div className='column'>
              <EmployeeAdd
                parent={this}
                userList={this.state.userList}
                employeeName={this.employeeName}
                role={this.role}
                phoneNumber={this.phoneNumber}
                userID={this.userID}
                email={this.email}
                isEditing={this.isEditing}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Employees;
