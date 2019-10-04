var mongoose = require('mongoose');
mongoose.connect(process.env.DBString,{useNewUrlParser : true, useUnifiedTopology: true });

mongoose.connection.on('connected',function()
{
    console.log('db connected');
});

module.exports = mongoose;