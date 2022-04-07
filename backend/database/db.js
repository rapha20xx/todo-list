const mongoose = require("mongoose");

const connectToDb = () => {
    mongoose.connect(
        "mongodb://localhost:27017/to-do-db",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    ).then(() => console.log("MongoDB Connected!"))
        .catch((err) => console.log(err))
}

mongoose.Promise = global.Promise

connectToDb();

