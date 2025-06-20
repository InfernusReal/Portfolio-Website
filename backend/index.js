const express = require('express');
const contactRoutes = require('./routes/contact');
const cors = require('cors');
const app = express();

require('dotenv').config();
app.use(cors());
app.use(express.json());


app.use('/api/contact', contactRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
