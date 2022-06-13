const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const fs = require("fs");
const dev = process.env.dev !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const httpsOptions = {
    key: fs.readFileSync("./server.key"),
    cert: fs.readFileSync("./server.cert"),
};

const port = process.env.port || 3000
app.prepare().then(() => {
    createServer(async (req, res) => {
        // Be sure to pass `true` as the second argument to `url.parse`.
        // This tells it to parse the query portion of the URL.
        const parsedUrl = parse(req.url, true)
        const { pathname, query } = parsedUrl

        if (pathname === '/a') {
            app.render(req, res, '/a', query)
        } else if (pathname === '/b') {
            app.render(req, res, '/b', query)
        } else {
            handle(req, res, parsedUrl)
        }
    }).listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on https://localhost:${port}`)
    })
})