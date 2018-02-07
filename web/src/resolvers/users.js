import gql from "graphql-tag";
const query = gql`
  query GetUsers {
    users @client {
      id
      rpassword
      password
      email
    }
  }
`;
let nextTodoId = 0;
export default {
  defaults: {
    users: []
  },
  resolvers: {
    Mutation: {
      addUser: (_, { rpassword, password, email }, { cache }) => {
        console.log(email);

        const previous = cache.readQuery({ query });
        const newTodo = {
          id: nextTodoId++,
          rpassword,
          password,
          email,
          __typename: "UserItem"
        };
        const data = {
          users: previous.users.concat([newTodo])
        };
        cache.writeData({ data });
        return newTodo;
      }
    },
    Query: {
      GetUsers: (_, { cache }) => {
        console.log("GetUsers");
      }
    }
  }
};
