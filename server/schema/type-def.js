const { gql } = require('apollo-server')

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality
        friends: [User!]
        favoriteMovies: [Movie]
    }

    type Movie {
        id: ID!
        name: String!
        yearOfPublication: Int!
        isInTheaters: Boolean!
    }

    input CreateUserInput {
        name: String!
        username: String!
        age: Int = 18 # If not required, then default to 18 years old?
        natinality: Nationality = JAPAN
    }

    input UpdateUsernameInput {
        id: ID!
        newUsername: String!
    }

    type Query {
        users: [User!]!
        user(id: ID!): User!
        movies: [Movie!]!
        movie(name: String!): Movie!
    }

    type Mutation {
        createUser(user: CreateUserInput!): User
        addFriend(userId: ID!, friendId: ID!): User!
        updateUsername(input: UpdateUsernameInput!): User
        deleteUser(userId: ID!): User
    }

    enum Nationality {
        JAPAN
        CANADA
        AUSTRALIA
        UK
        USA
    }
`;

module.exports = { typeDefs }