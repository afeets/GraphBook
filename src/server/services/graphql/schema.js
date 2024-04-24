const typeDefinitions = `
  type Auth {
    token: String
  }

  type Response {
    success: Boolean
  }
  
  type User {
    id: Int
    avatar: String
    username: String
  }

  type UsersSearch {
    users: [User]
  }

  type Post {
    id: Int
    text: String
    user: User
  }

  type PostFeed {
    posts: [Post]
  }

  type Message {
    id: Int
    text: String
    chat: Chat
    user: User
  }

  type Chat {
    id: Int
    messages: [Message]
    users: [User]
    lastMessage: Message
  }

  type RootQuery {
    posts: [Post]
    chats: [Chat]
    chat(chatId: Int): Chat
    postsFeed(page: Int, limit: Int): PostFeed
    usersSearch(page: Int, limit: Int, text: String!): UsersSearch
  }

  input PostInput {
    text: String!
  }

  input ChatInput {
    users: [Int]
  }

  input MessageInput {
    text: String!
    chatId: Int!
  }

  type RootMutation {
    login (
      email: String!
      password: String!
    ): Auth

    signup (
      username: String!
      email: String!
      password: String!
    ): Auth
    
    addPost (
      post: PostInput!
    ): Post
    addChat (
      chat: ChatInput!
    ): Chat
    addMessage (
      message: MessageInput!
    ): Message

    deletePost (
      postId: Int!
    ) : Response
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`;

export default [typeDefinitions];
