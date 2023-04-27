import React, { useEffect, useState } from 'react';
import {fetchEmployees} from "./services/api";
import styled from "styled-components";
import { MdFace } from "react-icons/md";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeDetails from './components/EmployeeDetails'

import { platformColors } from './constants/colors'
import EmployeeListItem from "./components/EmployeeListItem";
import {createManagersDirectory} from "./utils/createManagersDirectory";

const MyLogo = styled.div`
  color: ${platformColors.lightPink}
`;
function App() {
    const [employees, setEmployees] = useState([]);
    const [employeesById, setEmployeesById] = useState({});
    useEffect(() => {
      const data = fetchEmployees()
      setEmployees(data)
      const byId = createManagersDirectory(data)
      setEmployeesById(byId)
    }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/:username" >
            {({ match }) => <EmployeeDetails username={match.params.username} />}
          </Route>
          {/*<Route path="/:username" element={<Home />} />*/}
        </Routes>
      </Router>
      <div>
        <MyLogo>
          <MdFace color={platformColors.lightPink}/>
          oritkozolin 2023
        </MyLogo>
        <h1>Employees</h1>

        {employees.map((employee)=>(
          <div>
            <EmployeeListItem employee={employee} employeesById={employeesById}/>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
