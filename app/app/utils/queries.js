import gql from 'graphql-tag';

export default {
  query:{

  },
  mutation:{
    login: gql`
    mutation($email: String!, $password: String!){
      login(email: $email, password: $password) {
        success
        token
        errors{
          path
          message
        }
      }
    }
    `,
    createUser: gql`
    mutation($password: String!, $email: String!){
      createUser(password:$password, email:$email){
        success
        token
        errors{
          path
          message
        }
      }
    }
    `
  },
  // subscription:{},
}
