const dotenv = require("dotenv");

dotenv.config();

const app = require("./app");
const connectDatabase = require("./config/database");

const PORT = process.env.PORT || 5000;

// Connect MongoDB
connectDatabase();

// Start Server
app.listen(PORT, () => {
  console.log(`
====================================
🚀 MessMate Backend Started
🌐 Server : http://localhost:${PORT}
====================================
`);
});