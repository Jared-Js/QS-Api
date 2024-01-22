'use strict'

const express = require('express')
const router = express.Router()
const { ensureAuth } = require('../services/authenticated')
const CustomerController = require('../controllers/customer')

class CustomerRouter {
    constructor() {
        this.controller = new CustomerController()
        this.init()
    }

    init() {
        router.post('/login', this.controller.login)
        router.post('/register', this.controller.register)
        router.get('/getInfo', ensureAuth, this.controller.getYourInfo)
        router.get('/getPackages', ensureAuth, this.controller.getYourPackages)
        router.put('/updatePassword/:id', ensureAuth, this.controller.updatePassword)
        router.put('/updateProfile', ensureAuth, this.controller.editYourAccount)
        router.delete('/deleteProfile', ensureAuth, this.controller.deleteAccount)
    }
}

new CustomerRouter()

module.exports = router
