"use strict"


function provas(req,res){
    res.status(200).send({
        message:"esta rota esta a prova da rest api"
    })
}

module.exports = {
    provas
}