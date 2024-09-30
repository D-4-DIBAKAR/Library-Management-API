const app = require('./app');
const cors = require('cors');
const dotenv = require('dotenv');
// Define the server port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
     console.log(`Server running on port ${PORT}`);
});
