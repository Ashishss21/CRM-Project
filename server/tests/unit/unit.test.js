const { ApolloServer } = require('apollo-server');
const typeDefs = require('../../schema');
const resolvers = require('../../resolvers');
const Lead = require('../../models/Lead');
const mongoose = require('mongoose');

const server = new ApolloServer({ typeDefs, resolvers });

beforeAll(async () => {
  const url = `mongodb://127.0.0.1:27017/test_db`;
  await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

describe('Lead Resolver Unit Tests', () => {
  it('adds a lead', async () => {
    const ADD_LEAD = `
      mutation AddLead($name: String!, $email: String!) {
        addLead(name: $name, email: $email) {
          id
          name
          email
        }
      }
    `;

    const response = await server.executeOperation({
      query: ADD_LEAD,
      variables: { name: 'John Doe', email: 'john@example.com' },
    });

    expect(response.data.addLead.name).toBe('John Doe');
    expect(response.data.addLead.email).toBe('john@example.com');
  });

  it('changes lead status', async () => {
    const lead = new Lead({ name: 'Jane Smith', email: 'jane@example.com', status: 'New' });
    await lead.save();

    const CHANGE_LEAD_STATUS = `
      mutation ChangeLeadStatus($id: ID!, $status: String!) {
        changeLeadStatus(id: $id, status: $status) {
          id
          name
          email
          status
        }
      }
    `;

    const response = await server.executeOperation({
      query: CHANGE_LEAD_STATUS,
      variables: { id: lead._id.toString(), status: 'Contacted' },
    });

    expect(response.data.changeLeadStatus.status).toBe('Contacted');
  });
});
