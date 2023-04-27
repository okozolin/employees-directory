import React, { useEffect, useState } from 'react';
import {fetchEmployees} from "./services/api";
import styled from "styled-components";
import { MdFace } from "react-icons/md";

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
  );
}

export default App;
