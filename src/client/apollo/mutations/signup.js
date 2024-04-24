import { gql, useMutation } from '@apollo/client';


export const SIGNUP = gql`
  mutation signup($username: String!, $email: String!, $password: String!){
    signup(username: $username, email: $email, password: $password){
      token
    }
  }
`

// parse query string export login function 
export const useSignupMutation = () => useMutation(SIGNUP);