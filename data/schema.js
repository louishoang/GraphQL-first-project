import { resolvers } from './resolvers';
import { makeExecutableSchema } from 'graphql-tools';

// ! means required
//  createFriend(input: FriendInput): Friend   mean creating a mutation that take a FriendInput and return a Friend

const typeDefs = `
    type Friend {
        id: ID
        firstName: String
        lastName: String
        gender: Gender
        age: Int
        language: String
        email: String
        contacts: [Contact]
    }

    type Contact {
        firstName: String
        lastName: String
    }

    type Alien {
        id: ID,
        firstName: String,
        lastName: String,
        planet: String,
    }

    enum Gender {
        MALE
        FEMALE
        OTHER
    }

    input FriendInput {
        id: ID
        firstName: String!
        lastName: String
        gender: Gender
        age: Int
        language: String
        email: String
        contacts: [ContactInput]
    }

    input ContactInput {
        firstName: String
        lastName: String
    }

    type Query {
        getFriend(id: ID): Friend
    }

    type Mutation {
        createFriend(input: FriendInput): Friend  
        updateFriend(input: FriendInput): Friend
        deleteFriend(id: ID!): String
    }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema };