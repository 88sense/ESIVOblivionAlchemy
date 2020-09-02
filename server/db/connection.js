const mongoose = require('mongoose');

// DB Connection
mongoose.Promise = global.Promise;

if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoIndex: false
    });
}
else {
    mongoose.connect('mongodb://localhost/outcomeTrackerDb', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoIndex: false
    });
}

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
});

mongoose.connection.once('open', function () {
    console.log("Mongoose connected to MongoDB!");
});

// export your mongoose connection
module.exports = mongoose;