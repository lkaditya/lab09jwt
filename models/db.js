const mongoose = require("mongoose");
let dburl = process.env.DATABASE_URL || "mongodb://localhost:27017";
mongoose.connect(dburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(() => {
    console.log("connected to db");
}).catch((err) => {
    console.log("error connected to db", err.message);
    process.exit();
});
