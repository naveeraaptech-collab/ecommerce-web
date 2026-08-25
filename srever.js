const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('API is running...');
});


app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/categories', require('./routes/Categoryroutes'));
app.use("/api/products", require('./routes/Productroutes'));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});