import React from 'react';
import styled from 'styled-components';

const ListItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const AvatarContainer = styled.div`
  margin-right: 10px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FullName = styled.span`
  font-weight: bold;
`;

const Email = styled.span`
  color: #666;
  margin-top: 5px;
`;

const Count = styled.span`
  background-color: #ccc;
  color: #fff;
  font-size: 12px;
  border-radius: 10px;
  padding: 2px 6px;
  margin-left: 10px;
`;

const EmployeeListItem = ({ employee, count }) => {
  return (
    <ListItemContainer>
      <AvatarContainer>
        <Avatar src={employee.profile_pic} alt="Avatar" />
      </AvatarContainer>
      <DetailsContainer>
        <FullName>{employee.first_name} {employee.last_name}</FullName>
        <Email>{employee.email}</Email>
      </DetailsContainer>
      {count && <Count>{count}</Count>}
    </ListItemContainer>
  );
};

export default EmployeeListItem;
