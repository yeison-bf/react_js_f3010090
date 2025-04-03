
const express = require('express')
const Products = require('../models/products.models')

const getProducts = async (req, res) =>{
    const products = await Products.findAll();
    console.log("listado", products)
    return res.json({
        ok:200,
        message:products
    })
}

const getOneProducts = (req, res) =>{
    return res.json({
        ok:200,
        message:"Hola estoy en el GET de un solo producto"
    })
}


const postProducts = async (req, res) =>{
    try {
        const product = await Products.create(req.body)
        return res.json({
            ok:200,
            message: product
        })
    } catch (error) {
        console.log(error)
    }
}

const putProducts = (req, res) =>{
    return res.json({
        ok:200,
        message:"Hola estoy en el PUT de productos"
    })
}

const deleteProducts = (req, res) =>{
    return res.json({
        ok:200,
        message:"Hola estoy en el DELETE de productos"
    })
}

module.exports = {
    getProducts,
    getOneProducts,
    postProducts,
    putProducts,
    deleteProducts
}