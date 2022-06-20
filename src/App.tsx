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
        {users.page > 1 && (
          <button onClick={() => setPage(page - 1)}>Prev page</button>
        )}
        {users.page < users.total_pages && (
          <button onClick={() => setPage(page + 1)}>Next page</button>
        )}
      </header>
    </div>
  );
}

export default App;
