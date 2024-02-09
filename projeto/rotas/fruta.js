"use strict"

var express = require("express")
var frutaController = require("../controllers/fruta")

var api = express.Router()

api.get("/provas",frutaController.provas)
api.get("/fruta",frutaController.saveFruta)
api.get("/frutas",frutaController.getFrutas)

module.exports = api