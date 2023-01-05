const next = require("next")
const express = require("express")
require("dotenv").config()

const dev = process.env.NODE_ENV !== "production"
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()


nextApp.prepare().then(() => {
    const app = express();

    app.get(`*`, (req,res) => {
        return handle(req,res)
    })

    const port = process.env.PORT || 5000;

    app.listen(port, () => {
        console.log(`Listening on port ${port}...`)
      })
})

