const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const dev = process.env.dev !== 'production'
const hostname = 'localhost'
const port = process.env.port || 3000
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

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