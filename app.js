const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Node.js Jenkins Project</title>
        </head>
        <body>
            <h1>NODE.JS FREESTYLE PROJECT</h1>
            <h2>Jenkins Build Successful</h2>
            <p>This website is running using Node.js + Express.</p>
            <p>GitHub + Jenkins + PM2</p>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log("Node.js server running on port " + PORT);
});
