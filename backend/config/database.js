const mongoose = require("mongoose");

async function connect() {
    try {
        const dbUrl = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/portfolio";
        await mongoose.connect(dbUrl);
        console.log("Database Connected successfully");
    } catch (err) {
        console.error("Database Connection Error:", err);
    }
}

module.exports = connect;
