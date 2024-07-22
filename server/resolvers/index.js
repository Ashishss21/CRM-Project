const Lead = require('../models/Lead');
const { sendEmail } = require('../config/nodemailer');

const resolvers = {
  Query: {
    leads: async () => {
      try {
        return await Lead.find();
      } catch (error) {
        console.error('Error fetching leads', error);
        throw new Error('Error fetching leads');
      }
    },
  },
  Mutation: {
    addLead: async (_, { name, email }) => {
      try {
        const newLead = new Lead({ name, email });
        await newLead.save();
        await sendEmail(email, 'Welcome to CRM', 'Thank you for joining our CRM system.');
        return newLead;
      } catch (error) {
        console.error('Error adding lead', error);
        throw new Error('Error adding lead');
      }
    },
    changeLeadStatus: async (_, { id, status }) => {
      try {
        const lead = await Lead.findByIdAndUpdate(id, { status }, { new: true });
        if (lead) {
          await sendEmail(lead.email, 'Lead Status Updated', `Your lead status has been updated to: ${status}`);
        }
        return lead;
      } catch (error) {
        console.error('Error changing lead status', error);
        throw new Error('Error changing lead status');
      }
    },
  },
};

module.exports = resolvers;
