import { gql } from 'apollo-server';

export const typeDefs = gql`
    type collection {
        id: ID!
        title: String!
        imageUrl: String!
        items: [item!]
    }

    type item {
        id: ID!
        name: String!
        price: Float!
        imageUrl: String!
        quantity: Int!
    }

    type Query {
        getCatalogue: [collection!]
        collectionById(id: ID!): collection
    }
`;