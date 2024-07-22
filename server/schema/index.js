const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Lead {
    id: ID!
    name: String!
    email: String!
    status: String!
  }

  type Query {
    leads: [Lead]
  }

  type Mutation {
    addLead(name: String!, email: String!): Lead
    changeLeadStatus(id: ID!, status: String!): Lead
  }
`;

module.exports = typeDefs;
