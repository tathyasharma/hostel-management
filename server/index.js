const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth',    require('./routes/auth'));
app.use('/api/tickets', require('./routes/tickets'));
app.use('/api/rooms',   require('./routes/rooms'));
app.use('/api/users',   require('./routes/users'));

app.listen(5000, () => console.log('Server running on port 5000'));