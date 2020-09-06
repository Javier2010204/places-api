const mongoose = require('mongoose');

const dbName = 'places_db';

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

module.exports = {
    connect: () => mongoose.connect('mongodb://localhost/'+ dbName),
    dbName,
    connection: ()=>{
        if(mongoose.connection)
            return mongoose.connection
        return this.connect();
    }
}