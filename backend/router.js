const express = require('express')

const { depositController, withdrawController, getTransactions } = require('./controller/walletController')


const routes = new express.Router()


routes.post('/deposit', depositController)
routes.post('/withdraw', withdrawController)
routes.get('/transaction', getTransactions)

module.exports = routes