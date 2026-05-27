// Import http module
const http = require("http");

// Create server
const server = http.createServer((req, res) => {

    // Home Route
    if (req.url === "/") {

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(`
            <html>
                <head>
                    <title>Home Page</title>
                </head>
                <body>
                    <h1>Welcome to Home Page</h1>
                    <p>This is a basic Node.js HTTP Server.</p>
                    <a href="/about">Go to About Page</a>
                </body>
            </html>
        `);
    }

    // About Route
    else if (req.url === "/about") {

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(`
            <html>
                <head>
                    <title>About Page</title>
                </head>
                <body>
                    <h1>About Us</h1>
                    <p>This server is created using pure Node.js.</p>
                    <a href="/">Go to Home Page</a>
                </body>
            </html>
        `);
    }

    // 404 Route
    else {

        res.writeHead(404, {
            "Content-Type": "text/html"
        });

        res.end(`
            <html>
                <head>
                    <title>404 Error</title>
                </head>
                <body>
                    <h1>404 - Page Not Found</h1>
                    <p>The page you requested does not exist.</p>
                </body>
            </html>
        `);
    }
});

// Start server
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});