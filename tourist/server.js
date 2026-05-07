const express = require("express");
const path = require("path");

const app = express();


// Serve Static Files
app.use(express.static(path.join(__dirname, "public")));


// Start Server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});