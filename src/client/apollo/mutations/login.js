import { gql, useMutation } from '@apollo/client';


export const LOGIN = gql`
  mutation login($email: String!, $password: String!){
    login(email: $email, password: $password){
      token
    }
  }
`

// parse query string export login function 
export const useLoginMutation = () => useMutation(LOGIN);