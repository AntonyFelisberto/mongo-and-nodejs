"use strict"

var express = require("express")
var frutaController = require("../controllers/fruta")

var api = express.Router()

api.get("/provas",frutaController.provas)

module.exports = api