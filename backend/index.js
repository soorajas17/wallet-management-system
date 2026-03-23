
const express = require('express')

const walletServer = express()
const cors = require('cors')
const routes = require('./router')

walletServer.use(cors())
walletServer.use(express.json())
walletServer.use(routes)

const PORT = 4000 || process.env.PORT


walletServer.listen(PORT, () => {
    console.log(`server successfully running at ${PORT}`);
})