import React, { useState } from "react";
import styled from "styled-components";
import { useLoginMutation, useRegisterMutation } from "./app/services/auth";
import {
  useGetAllUsersPaginatedQuery,
  useGetUserByIdQuery,
} from "./app/services/users";
import { useAppDispatch } from "./app/store";
import { logout } from "./features/auth/authSlice";

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

  const [register] = useRegisterMutation();
  const [login] = useLoginMutation();

  const dispatch = useAppDispatch();

  if (isLoading) return <div>Loading...</div>;
  if (!users?.data) return <div>No users...</div>;
  if (isError) return <div>Oops, ther was an error</div>;

  return (
    <div className="App">
      <button
        onClick={() =>
          register({
            email: "eve.holt@reqres.in",
            password: "pistol",
          })
        }
      >
        Fake register
      </button>
      <button
        onClick={() =>
          login({
            email: "eve.holt@reqres.in",
            password: "pistol",
          })
        }
      >
        Fake login
      </button>
      <button onClick={() => dispatch(logout())}>Fake logout</button>
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

      <pre>{JSON.stringify(user, undefined, 4)}</pre>
    </div>
  );
}

export default App;
