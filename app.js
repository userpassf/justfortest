const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.get('/',function(req,res){
  res.send('web page is running');
})
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
