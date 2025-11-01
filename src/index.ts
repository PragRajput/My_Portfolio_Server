import app from './app';

const PORT = process.env.PORT || 5000;

// Start server for local development
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📧 Email endpoint: http://localhost:${PORT}/api/send-email`);
  console.log(`🧪 Test endpoint: http://localhost:${PORT}/test`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
