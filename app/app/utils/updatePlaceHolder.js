import gql from 'graphql-tag';

export default gql`
  mutation updatePlaceHolder($index: String!, $value: String!){
    updatePlaceHolder(index: $index, value: $value) @client{
      email
      password
      rpassword
    }
  }
`