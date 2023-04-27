import React, { useEffect, useState } from 'react';
import {fetchEmployees} from "./services/api";
import styled from "styled-components";
import { MdFace } from "react-icons/md";

import { platformColors } from './constants/colors'
import EmployeeListItem from "./components/EmployeeListItem";

const MyLogo = styled.div`
  color: ${platformColors.lightPink}
`;
function App() {
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
      const data = fetchEmployees()
      setEmployees(data)
    }, []);

  return (
    <div>
    {/*<UsersContext.Provider value={users}>*/}
      <MyLogo>
        <MdFace color={platformColors.lightPink}/>
        oritkozolin 2023
      </MyLogo>
      <h1>Employees</h1>

      {employees.map((employee)=>(
        <div>
          <EmployeeListItem employee={employee} count={5}/>
          {/*{employee?.first_name}*/}
        </div>
      ))}
    {/*</UsersContext.Provider>*/}
  </div>
  );
}

export default App;
