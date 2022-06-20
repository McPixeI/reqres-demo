import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import { useGetAllUsersPaginatedQuery } from "./services/api/usersApi";

const Title = styled.h1`
  color: palevioletred;
`;

function App() {
  const [page, setPage] = useState(1);
  const {
    data: users,
    isError,
    isLoading,
    isSuccess,
  } = useGetAllUsersPaginatedQuery(page);

  if (isLoading) return <div>Loading...</div>;
  if (!users?.data) return <div>No users...</div>;
  if (isError) return <div>Oops, ther was an error</div>;

  return (
    <div className="App">
      <header className="App-header">
        <Title>Users</Title>
        {isSuccess && users?.data.map((user) => <p>{user.first_name}</p>)}
      </header>
    </div>
  );
}

export default App;
