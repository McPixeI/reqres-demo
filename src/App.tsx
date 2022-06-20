import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import {
  useGetAllUsersPaginatedQuery,
  useGetUserByIdQuery,
} from "./services/api/usersApi";

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

  const { data: user } = useGetUserByIdQuery(Number(3));

  if (isLoading) return <div>Loading...</div>;
  if (!users?.data) return <div>No users...</div>;
  if (isError) return <div>Oops, ther was an error</div>;

  return (
    <div className="App">
      <Title>Get paginated users</Title>
      {isSuccess &&
        users?.data.map((user) => <p key={user.id}>{user.first_name}</p>)}
      <button onClick={() => setPage(page - 1)} disabled={users.page === 1}>
        Prev page
      </button>
      <button
        onClick={() => setPage(page + 1)}
        disabled={users.page >= users.total_pages}
      >
        Next page
      </button>
      <Title>Get user by id (3)</Title>

      <p>{JSON.stringify(user)}</p>
    </div>
  );
}

export default App;
