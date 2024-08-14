const express = require('express');
const path = require('path');
const app = express();
const { Telegraf, Markup } = require('telegraf');
const PORT = process.env.PORT || 3000;
const bot = new Telegraf('6841562964:AAEs5ivXTR3VLUn15wbOemNG_LJqR92TbBU');

bot.start((ctx)=>{
ctx.reply('hello i am working');
});


// Serve static files

app.get('/',function(req,res){
  res.send('web page is running');
})
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

bot.launch();
