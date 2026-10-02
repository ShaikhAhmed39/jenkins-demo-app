try {
  require('./app.js');
  console.log('✅ App loaded successfully');
  process.exit(0);
} catch (err) {
  console.error('❌ Test failed:', err);
  process.exit(1);
}
