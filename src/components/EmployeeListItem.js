import React, { useState } from 'react';
import styled from 'styled-components';
import { MdOutlineExpandMore, MdExpandLess } from "react-icons/md";


const Avatar = styled.img`
  border-radius: 50%;
  width: 48px;
  height: 48px;
`;

const Details = styled.div`
  margin-left: 12px;
`;

const FullName = styled.div`
  font-weight: bold;
`;

const Email = styled.div`
  font-size: 0.8em;
`;

const Count = styled.div`
  margin-left: 24px;
  font-size: 0.8em;
  color: #888;
`;

const EmployeeListItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
`;
const NestedEmployeeList = styled.div`
  margin-left: 30px;
`;
const EmployeeListItem = ({ employee, employeesById }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const renderNestedEmployees = () => {
    if (employee.managed_employees && employee.managed_employees.length > 0) {
      return employee.managed_employees.map((id) => {
        const nestedEmployee = employeesById[id];
        return <EmployeeListItem key={nestedEmployee.id} employee={nestedEmployee} employeesById={employeesById} />;
      });
    }
    return null;
  };

  return (
    <>
      <EmployeeListItemWrapper >
        <div onClick={toggleOpen}>
          {isOpen ? <MdExpandLess /> : <MdOutlineExpandMore/>}
        </div>
        <Avatar src={employee.profile_pic} />
        <Details>
          <FullName>{`${employee.first_name} ${employee.last_name}`}</FullName>
          <Email>{employee.email}</Email>
        </Details>
        {employee.managed_employees && <Count>{employee.managed_employees.length} employees</Count>}
      </EmployeeListItemWrapper>
      {isOpen &&
        <NestedEmployeeList>
          {renderNestedEmployees()}
        </NestedEmployeeList>
      }
    </>
  );
};

export default EmployeeListItem;
