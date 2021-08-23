import express from 'express';
import cors from 'cors';
import payload from 'payload';

require('dotenv').config();
const app = express();

// Add your own express routes here
app.use(cors({
  origin: '*'
}));

// Initialize Payload
payload.init({
  secret: process.env.PAYLOAD_SECRET,
  mongoURL: process.env.MONGODB_URI,
  license: process.env.PAYLOAD_LICENSE_KEY,
  express: app,
  onInit: () => {
    payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
  },
});



app.listen(3000);
