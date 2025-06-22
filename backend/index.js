const express = require('express');
const contactRoute = require('./route/contact');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/contact', contactRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;