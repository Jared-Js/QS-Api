'use strict'

const express = require('express')
const router = express.Router()
const { ensureAuth } = require('../service/auth')
const CustomerController = require('../controllers/customers')


        router.post('/login', CustomerController.login)
        router.post('/register', CustomerController.register)
        router.get('/getInfo',[ensureAuth], CustomerController.getYourInfo)
        router.get('/getPackages', ensureAuth, CustomerController.getYourPackages)
        router.put('/updatePassword', ensureAuth, CustomerController.updatePassword)//ensureAuth middleware que valida antes de pasar a la funcion controller
        router.put('/updateProfile', ensureAuth,CustomerController.editYourAccount)
        router.delete('/deleteProfile', ensureAuth, CustomerController.deleteAccount)



module.exports = router
