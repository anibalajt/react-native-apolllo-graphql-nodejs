import gql from 'graphql-tag'

export default gql`
  query{
    placeHolder @client{
      email
      password
      rpassword
    }
  }
`
