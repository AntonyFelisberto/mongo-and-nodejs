"use strict"

var Fruta = require("../models/frutas")

function provas(req,res){
    res.status(200).send({
        message:"esta rota esta a prova da rest api"
    })
}

async function saveFruta(req,res){
    var fruta = new Fruta()
    var params = req.body
    if(params.nome){
        fruta.nome = params.nome
        fruta.cor = params.cor
        fruta.temporada = params.temporada
        try {
            const frutaStored = await fruta.save();
            res.status(200).send({
                message: frutaStored
            });
        } catch (err) {
            res.status(500).send({
                message: "Erro na inserção: " + err.message
            });
        }
    }else{
        res.status(200).send({
            message:"o nome da fruta é obrigatorio"
        })
    }
}

async function getFrutas(req, res){
    try {
        const frutas = await Fruta.find();
        res.status(200).send({
            message: frutas
        });
    } catch (err) {
        res.status(500).send({
            message: "Erro na busca dos dados: " + err.message
        });
    }
}

module.exports = {
    provas,
    saveFruta,
    getFrutas
}