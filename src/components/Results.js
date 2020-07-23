import React, { Component } from "react";
import "../index.css";
import employees from "../employees.json";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

let order = 'desc';

class Results extends React.Component {

  handleBtnClick = () => {
    if (order === 'desc') {
      this.refs.table.handleSort('asc', 'name');
      order = 'asc';
    } else {
      this.refs.table.handleSort('desc', 'name');
      order = 'desc';
    }
  }

  render() {
    return (
  <div>
    <BootstrapTable ref='table' data={ employees } multiColumnSort={ 2 }>
        <TableHeaderColumn dataField='first_name' isKey={ true } dataSort={ true } >First Name</TableHeaderColumn>
        <TableHeaderColumn dataField='last_name' dataSort={ true }>Last Name</TableHeaderColumn>
        <TableHeaderColumn dataField='job_title' dataSort={ true }>Job Title</TableHeaderColumn>
        <TableHeaderColumn dataField='email' dataSort={ true }>Email</TableHeaderColumn>
    </BootstrapTable>
  </div>
  );
};
}
  export default Results;

// class Results extends Component {

//   state = {
//     employees, 
//   };

//   // Renders what shows up onto the page dynamically as letters are typed in the input field -- BREAKS APP WHEN RUN NOW. HAVE IT GREYED OUT BELOW
//   dynamicSearch = () => {
//     return this.props.employees.filter
//     (emp => emp.toLowerCase().includes(this.props.searchTerm.toLowerCase()))
//   }

//   // Sorts by first name click - not working 
//   sortName = (first_name) => {
//     this.setState( prevState => {
//       return {
//       employees: prevState.employees.sort(e => e.first_name === first_name)
//       }
//     });
//   }

//   render() {
//   return (
//   <div>
//     <Search />
//     <div className="container">
//         <table className="table">
//           <thead>
//               <tr>
//                   <th id="col">First Name</th>
//                   <th id="col">Last Name</th>
//                   <th id="col">Job Title</th>
//                   <th id="col">Email Address</th>
//               </tr>
//           </thead>

//             {this.state.employees.map( emp => 
//               <Employees
//                   key={emp.id}
//                   first_name={emp.first_name} 
//                   last_name={emp.last_name}
//                   job_title={emp.job_title}
//                   email={emp.email}
//               />
//             )}
//         </table>
//     </div>
//     </div>   
//   );
//   };
// }
  
//   export default Results;