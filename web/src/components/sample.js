import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const TODOS_QUERY = gql`
  query GetUsers {
    users @client {
      id
      rpassword
      password
      email
    }
  }
`;

const Sample = ({ users, loading }) => {
  if (loading) {
    return <div> loading... </div>;
  }
  console.log("users: ", users);
  return (
    <div>
      {users.map((user, key) => (
        <div key={key}>
          {user.email} - {user.password}
        </div>
      ))}
      <div>sample</div>
    </div>
  );
};

export default graphql(TODOS_QUERY, {
  props: ({ data: { users, loading } }) => ({
    users,
    loading
  })
})(Sample);
