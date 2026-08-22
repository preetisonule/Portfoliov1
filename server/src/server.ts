// src/server.ts
import app from "./app";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📧 Contact API: http://localhost:${PORT}/api/contact`);
  console.log(`❤️  Health Check: http://localhost:${PORT}/api/health`);
});