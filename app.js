import express from 'express';
const app = Express();

import connectDB from './config/db';

// Server Setup
const PORT = 3333;
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
